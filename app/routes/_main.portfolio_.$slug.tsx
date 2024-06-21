import { HeadersFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { defer, useLoaderData } from "@remix-run/react";
import { CACHE_LIV, projects } from "~/Constants";
import { Item } from "~/DTO/project";
import BlogHero from "~/components/blogs/blogHero";
import pb from "~/components/portfolio.server";
import { generateSrcSet } from "~/images/resolutions";
export const meta: MetaFunction = () => {
    return [
        { title: "Blogs" },
        {
            property: "og:title",
            content: "Blogs/Articles by Bhavish",
        },
        {
            name: "description",
            content: "Blogs/Articles by Bhavish",
        },
    ];
};
export let headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, s-maxage=${CACHE_LIV}`,
    };
};
export const loader = async ({ params }: LoaderFunctionArgs) => {
    pb.authStore.save(process.env.POCKETBASE_TOKEN as string, null)
    const resultList = await pb.collection(projects).getFirstListItem(`projectName = "${params.slug}"`) as Item;
    return defer({ project: resultList });
};
export default function Index() {
    const {project} = useLoaderData<typeof loader>()
    return (
        <>
            <BlogHero light={true}  minor="Right Now...." major="What I'm Building" />
            <img
                className="w-full h-auto"
                src={`${ENV.BASE_URL}/api/files/${project.collectionId}/${project.id}/${project.heroImage}`}
                srcSet={generateSrcSet(ENV.BASE_URL ?? "", project?.collectionId ?? "", project?.id ?? "", project?.heroImage ?? "")}
                alt="Hero Image for this blog" />
            <section className="wysiwyg m-auto w-full max-w-4xl font-sans p-4 mb-10" dangerouslySetInnerHTML={{ __html: `${project.markup}` }}>

            </section>
            <section className="wysiwyg m-auto w-full max-w-4xl font-sans p-4 mb-10 text-center" dangerouslySetInnerHTML={{ __html: `${project.boldMark}` }}>
            </section>
        </>
    );
}
