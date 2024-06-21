import { Link } from "@remix-run/react";
import { Blogs } from "~/DTO/blog";
import { generateSrcSet } from "~/images/resolutions";
import { formatDateString } from "~/utils";

export default function BlogsList({ minimalBlogData }: { minimalBlogData: Blogs }){
    return (
        <>
            <div className="grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3">
                {minimalBlogData?.items
                    ?.filter(item => item.featured === false && item.released == true)
                    .map((item, index) => {
                        return (
                            <Link
                                key={index} // Adding a key prop for React to track the list items
                                prefetch="intent"
                                className="blog-preview relative flex flex-col"
                                to={`/blog/${item.title}`}>
                                <img
                                className="aspect-video"
                                    alt={item.title}
                                    height="auto"
                                    loading="lazy"
                                    src={`${ENV.BASE_URL}/api/files/${item.collectionId}/${item.id}/${item.heroImage}`}
                                    srcSet={generateSrcSet(ENV.BASE_URL ?? "", item?.collectionId ?? "", item?.id ?? "", item?.heroImage ?? "")}
                                    width="auto"
                                />
                                <h2 className="mt-4 mb-2 text-2xl"> {item.title} </h2>
                                <div className="font-monospace text-sm"> {formatDateString(item.updated, 'DD/MM/YYYY')} </div>
                            </Link>
                        );
                    })}

            </div>
        </>
    )
}