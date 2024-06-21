import { HeadersFunction, LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { CACHE_LIV, blogs } from "~/Constants"
import pb from "~/components/portfolio.server"
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { useEffect } from "react"
import { convertDateString } from "~/utils"
import { Item } from "~/DTO/blog";

export async function loader({ params }: LoaderFunctionArgs) {
    try{
        const blog = await pb.collection(blogs).getFirstListItem(`title = "${params.slug}"`) as Item
        return json({ blog })
    }
    catch(err){
            throw redirect('./404-not-found')
    }
}
export let headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, s-maxage=${CACHE_LIV}`,
    };
};
export const meta: MetaFunction = ({ data }: { data:any }) => {
    return [
        { title: data.blog.title as string },
        {
            name: 'description',
            content: `A Blog on ${data.blog.title}`,
        },
    ]
}
export default function BlogContent() {
    const data = useLoaderData<typeof loader>()
    const EMOJI_REGEX = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    const title = data.blog.title.replace(EMOJI_REGEX, `<span>$&</span>`)
    useEffect(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block as HTMLElement);
        });
    }, [data.blog.markupContent]);
    return (
        <main>
            <section className="mx-auto max-w-6xl">
                <div className="hero p-4 text-center py-20 md:py-40">
                    <h1 className="inline-block font-font-serif text-xl font-extrabold md:text-4xl">
                        <div className="font-font-monospace text-base font-mono font-normal md:text-2xl">{convertDateString(data.blog.updated)}</div>
                        <div dangerouslySetInnerHTML={{ __html: `<h1>${ title }</h1>` }} className="py-2 custom-gradient-text px-3 text-4xl md:text-7xl"/>
                    </h1>
                </div>
            </section>
            <img
                className="w-full h-auto"
                src={`${ENV.BASE_URL}/api/files/${data.blog.collectionId}/${data.blog.id}/${data.blog.heroImage}`}
                alt="Hero Image for this blog" />
            <div className="my-8 md:my-12 m-auto w-full max-w-4xl p-4">
                <h2 dangerouslySetInnerHTML={{ __html: `<h1>${ title }</h1>` }} className="custom-gradient-text m-0 mb-2 inline-block text-left text-3xl md:text-4xl">
                    
                </h2>
                <div className="font-monospace text-sm">
                    {convertDateString(data.blog.updated)}
                </div>
            </div>
            <section className="wysiwyg m-auto w-full max-w-4xl font-sans p-4 mb-10" dangerouslySetInnerHTML={{ __html: `${data.blog.markupContent}` }}>

            </section>
        </main>
    )
}