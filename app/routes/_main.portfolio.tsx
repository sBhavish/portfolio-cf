import { HeadersFunction, defer } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CACHE_LIV, PAGE, PERPAGE, projects } from "~/Constants";
import { Projects } from "~/DTO/project";

import pb from "~/components/portfolio.server";
import { WorkPreview } from "~/components/portfolio/cards";
export const meta: MetaFunction = () => {
    return [
        { title: "Featured Work | Bhavish Kotian" },
        {
            property: "og:title",
            content: "Featured works",
        },
        {
            name: "description",
            content: "Featured works by Bhavish",
        },
    ];
};
export let headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, s-maxage=${CACHE_LIV}`,
    };
};
export const loader = async ({ request }: LoaderFunctionArgs) => {
    let { searchParams } = new URL(request.url)
    let page = searchParams.get('page')
    let pageNumber = page ? parseInt(page, 10) : PAGE;

    if (isNaN(pageNumber)) {
        pageNumber = PAGE;
    }
    pb.authStore.save(process.env.POCKETBASE_TOKEN as string, null)
    const resultList = await pb.collection(projects).getList(pageNumber, PERPAGE, {
        fields: 'id,projectName,tag,projectYear,sideNote',
    }) as Projects;
    return defer({ projects: resultList });
};
export default function PortfolioMain() {
    const { projects } = useLoaderData<typeof loader>()
    return (
        <>
            <main>
                <div className="bg-color-background-dark text-color-background">
                    <div className="hero p-4 text-center py-20 md:py-40">
                        <h1 className="inline-block  text-xl font-extrabold md:text-4xl">
                            <div className="font-monospace text-base text-white font-normal md:text-2xl py-1">Right now...</div>
                            <div className="py-2 bg-gradient-to-r from-orange-600 via-red-500 to-orange-400 text-transparent bg-clip-text px-3 text-4xl md:text-7xl">What I'm building</div>
                        </h1>
                    </div>
                </div>
                <div className="mx-auto md:max-w-6xl">
                    
                    <div className="my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        {
                            projects.items?.filter(item => !item.todo)
                                .map((item, index) => {
                                    return (
                                        <WorkPreview year={item.projectYear} key={index} title={item.projectName} url={`/portfolio/${item.projectName}`} spanTitle={item?.tag} description={item.sideNote} />
                                    )
                                })
                        }
                        
                    </div>
                </div>
            </main>
        </>
    );
}