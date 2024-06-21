import { formatDateString } from "~/utils";
import BlogsList from "./BlogsList";
import { Blogs } from "~/DTO/blog";
import { Link } from "@remix-run/react";
import { generateSrcSet } from "~/images/resolutions";
export default function Featured ({ minimalBlogData }: { minimalBlogData: Blogs }) {
    const featuredItem = minimalBlogData.items.find(item => item.featured === true);
    return (
        <>
            <section className="section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20 px-4 py-20">
                <div className="flex flex-col gap-20 md:flex-row">
                    <Link className="blog-preview relative flex flex-col basis-2/3" prefetch="intent" to={`/blog/${featuredItem?.title}`}>
                        <img 
                            alt={featuredItem?.title} height="auto" 
                            loading="lazy" 
                            src={`${ENV.BASE_URL}/api/files/${featuredItem?.collectionId}/${featuredItem?.id}/${featuredItem?.heroImage}`} 
                            srcSet={generateSrcSet(ENV.BASE_URL ?? "", featuredItem?.collectionId ?? "", featuredItem?.id ?? "" , featuredItem?.heroImage ?? "")}
                            width="auto" 
                        />
                        <h2 className="mt-4 mb-2 text-2xl">{featuredItem?.title} </h2>
                        <div className="font-monospace text-sm"> {formatDateString(featuredItem?.updated, 'DD/MM/YYYY')} </div>
                    </Link>
                    <div className="flex flex-col gap-10 basis-1/3">
                        <div>
                            <h3 className="text-2xl">Upcoming Posts</h3>
                            <ul className="mt-8">
                                {
                                    minimalBlogData?.items
                                        ?.filter(item => item.released === false)
                                        .map((item, index) => {
                                            return (
                                                <li key={index} className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">{item.title}</li>
                                            );
                                        })}
                            </ul>
                        </div>
                    </div>
                </div>
                <BlogsList minimalBlogData={minimalBlogData} />
            </section>
        </>
    )
}