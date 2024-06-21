import { HeadersFunction, defer, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CACHE_LIV, about } from "~/Constants";
import { CompanyData } from "~/DTO/DTO";
import envelope from "app/images/svg/envelope.svg";
import me from "/app/images/me.jpeg"

import pb from "~/components/portfolio.server";
export const meta: MetaFunction = () => {
    return [
        { title: `${new Date().getFullYear()} Resume` },
        { name: "description", content: "Here is my resume!" },
    ];
};
export let headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, s-maxage=${CACHE_LIV}`,
    };
};
// export const loader = async () => {
//     try {
//         let authData = await pb.admins.authWithPassword(process.env.POCKETBASE_EMAIL as string, process.env.POCKETBASE_PASS as string);
//         const companyRecords = await pb.collection(about).getFirstListItem('') as CompanyData
//         pb.authStore.clear()
//         return defer({ companies: companyRecords });
//     } catch (err) {
//         console.error(err);
//         return { companies: null }
//     }

// };

export default function Index() {
    // const data = useLoaderData<typeof loader>()
    return (
        <main>
            <div className="m-auto max-w-5xl py-10 md:py-20 font-sans">
                <div className="flex flex-col gap-20 px-4 md:flex-row md:px-0">
                    <aside className="md:w-1/5 print:hidden">
                        <div className="sticky top-32">
                            <div className="flex flex-row items-center justify-center gap-6 md:flex-col">
                                <img alt="Bhavish" className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-400 aspect-square max-h-32 cursor-pointer overflow-hidden rounded-full p-1 transition-transform hover:scale-110 active:rotate-6 md:max-h-40" height="auto" loading="eager" src={me} width="auto"></img>
                            </div>
                            <div className="flex flex-shrink-0 flex-col gap-2 p-4">
                                <a className="flex items-center gap-4 break-words break-all text-sm text-color-copy-light" href="mailto:bhavishpoojary58@gmail.com" rel="noopener noreferrer" target="_blank">
                                    <img alt="Follow me" height="14" src={envelope} width="14" />
                                    me@gmail.com
                                </a>
                                <a className="flex items-center gap-4 break-words break-all text-sm text-color-copy-light" href="mailto:bhavishpoojary58@gmail.com" rel="noopener noreferrer" target="_blank">
                                    <img alt="Follow me" height="14" src={envelope} width="14" />
                                    me@gmail.com
                                </a>
                                <a className="flex items-center gap-4 break-words break-all text-sm text-color-copy-light" href="mailto:bhavishpoojary58@gmail.com" rel="noopener noreferrer" target="_blank">
                                    <img alt="Follow me" height="14" src={envelope} width="14" />
                                    me@gmail.com
                                </a>
                                <a className="flex items-center gap-4 break-words break-all text-sm text-color-copy-light" href="mailto:bhavishpoojary58@gmail.com" rel="noopener noreferrer" target="_blank">
                                    <img alt="Follow me" height="14" src={envelope} width="14" />
                                    me@gmail.com
                                </a>
                            </div>
                        </div>
                    </aside>
                    <div className="resume-sections mb-20 flex flex-1 flex-col gap-10">
                        <section>
                            <h1 className="capitalize mb-10 text-2xl font-extrabold md:text-4xl">
                                <span className="sr-only">The 2024 online resume of </span>
                                Bhavish Kotian
                            </h1>
                            <div className="mb-8 border-t border-solid border-color-border print:hidden"></div>
                            <div className="flex items-center gap-10"><p><span className="mr-1">
                                👨&zwj;💻</span> A Software Engineer whose passion lies in creating <b>quality code</b> written <b>for humans</b>, unlocking <b>developer productivity</b>, and creating a delightful <b>user experience</b>.</p>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h2 className="py-8 text-lg print:py-4 md:text-xl">Experience</h2>
                                <div className="mb-8 border-t border-solid border-color-border print:hidden"></div>
                            </div>
                            <div className="mb-10 flex flex-col gap-10">
                                <div className="flex flex-col gap-10 md:flex-row">
                                    <div className="flex flex-col gap-2 text-base md:basis-[160px] print:basis-8">
                                        <div className="flex">
                                            <h3 className="flex items-center gap-2 font-bold"><a className="underline-offset-4 hover:underline print:text-color-copy-dark" href="https://shiftsmart.com/" rel="noreferrer" target="_blank">Shiftsmart</a><img alt="Shiftsmart favicon" className="h-4 w-4" height="auto" loading="eager" src="https://assets-global.website-files.com/602a3f3e454f14956d14543a/602a3f3e454f1438b61455af_ShiftsmartIcon.png" width="auto" /></h3>
                                        </div>
                                        <h3 className="uppercase- text-xs font-medium">
                                            <div className="uppercase">Staff Engineer</div>
                                            <div className="text-color-copy-light">Sept 2022 - Present</div>
                                        </h3>
                                    </div>
                                    <div className="flex-1 text-sm leading-4">
                                        <div>
                                            <p>
                                                Nearly two years in and we've made some incredible strides. We've paid
                                                down significant technical debt and have begun to see the fruits of our
                                                labor.
                                            </p>
                                        </div>
                                        <ul className="my-4 ml-4 list-disc text-sm font-light text-color-copy">
                                            <li className="my-1">0 - 1 addition of a NX Monorepo with 12+ applications and 20+ packages</li>
                                            <li className="my-1">Adoption of Remix, TailwindCSS, Expo, NestJS, GraphQL, Github Actions, and more</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10 md:flex-row">
                                    <div className="flex flex-col gap-2 text-base md:basis-[160px] print:basis-8">
                                        <div className="flex">
                                            <h3 className="flex items-center gap-2 font-bold"><a className="underline-offset-4 hover:underline print:text-color-copy-dark" href="https://haldi.com/" rel="noreferrer" target="_blank">Haldi</a><img alt="Haldi favicon" className="h-4 w-4" height="auto" loading="eager" src="https://haldi.com/favicon.ico" width="auto" /></h3>
                                        </div>
                                        <h3 className="uppercase- text-xs font-medium">
                                            <div className="uppercase">Principal Engineer</div>
                                            <div className="text-color-copy-light">Apr 2021 - Aug 2022</div>
                                        </h3>
                                    </div>
                                    <div className="flex-1 text-sm leading-4">
                                        <div>
                                            <p>
                                                One year in we've jump-started the organization's code! Taking a
                                                "loosely typed and strongly coupled" system and successfully flipping it.
                                                The entire stack is now containerized and makes us of Firebase Emulators
                                                for an incredible development workflow.
                                            </p>
                                        </div>
                                        <ul className="my-4 ml-4 list-disc text-sm font-light text-color-copy">
                                            <li className="my-1">0% - 80% Containerized stack and development workflow</li>
                                            <li className="my-1">Introduced GraphQL and strongly types across services</li>
                                            <li className="my-1">Delivered a full rebuild &amp; rebrand of the Python + Django website to NextJS</li>
                                            <li className="my-1">Survey Framework, CSS Style Guide, Monorepo, Unit/E2E Testing, and more</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10 md:flex-row">
                                    <div className="flex flex-col gap-2 text-base md:basis-[160px] print:basis-8">
                                        <div className="flex">
                                            <h3 className="flex items-center gap-2 font-bold"><a className="underline-offset-4 hover:underline print:text-color-copy-dark" href="https://thredup.com" rel="noreferrer" target="_blank">thredUP</a>
                                                <img alt="thredUP favicon" className="h-4 w-4" height="auto" loading="eager" src="https://cf-tup-assets.thredup.com/shop/images/manifest_v2/favicon_96.png" width="auto" /></h3>
                                        </div>
                                        <h3 className="uppercase- text-xs font-medium">
                                            <div className="uppercase">Staff Engineer</div>
                                            <div className="text-color-copy-light">Feb 2016 - Apr 2021</div>
                                        </h3>
                                    </div>
                                    <div className="flex-1 text-sm leading-4">
                                        <div>
                                            <p>
                                                Successfully pitched, prototyped, and delivered several high-impact
                                                projects within the organization. Assisting in hiring, managing, and
                                                mentoring engineers at various levels, distributed across the globe.
                                            </p>
                                        </div>
                                        <ul className="my-4 ml-4 list-disc text-sm font-light text-color-copy">
                                            <li className="my-1">Content Management System; Pitched, prototyped, and delivered</li>
                                            <li className="my-1">Progressive Web App (PWA); Pitched, prototyped, and delivered</li>
                                            <li className="my-1">Lerna Monorepo; Pitched, prototyped, and delivered</li>
                                            <li className="my-1">CSS Overhaul; Pitched, prototyped, and delivered</li>
                                            <li className="my-1">Apollo Migration, Redux Migration, Checkout Overhaul, and many more...</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10 md:flex-row">
                                    <div className="flex flex-col gap-2 text-base md:basis-[160px] print:basis-8">
                                        <div className="flex">
                                            <h3 className="flex items-center gap-2 font-bold"><a className="underline-offset-4 hover:underline print:text-color-copy-dark" href="https://bynd.com" rel="noreferrer" target="_blank">Bynd</a>
                                                <img alt="Bynd favicon" className="h-4 w-4" height="auto" loading="eager" src="https://assets-global.website-files.com/646e3fdd996bec75dd974e1f/64c389c72e68f265c7ab93bb_bynd-favicon.jpg" width="auto" /></h3>
                                        </div>
                                        <h3 className="uppercase- text-xs font-medium">
                                            <div className="uppercase">Technical Team Lead</div>
                                            <div className="text-color-copy-light">Nov 2011 - Apr 2015</div>
                                        </h3>
                                    </div>
                                    <div className="flex-1 text-sm leading-4">
                                        <div>
                                            <p>
                                                Agency life in San Francisco affords the opportunity to work with a
                                                variety of "high profile" clients to create and deliver high-impact
                                                projects. As Team Lead, my responsibilities included: pitch work,
                                                application architecture, technical documentation, code reviews, and
                                                mentoring.
                                            </p>
                                        </div>
                                        <ul className="my-4 ml-4 list-disc text-sm font-light text-color-copy">
                                            <li className="my-1">Google TrainUP; Pitched, architected, developed, and delivered</li>
                                            <li className="my-1">Google Databoard; Conceptualized, architected, developed, and delivered</li>
                                            <li className="my-1">Facebook Disaster Relief; Prototyped with BackboneJS and Facebook API's</li>
                                            <li className="my-1">Apple iAds; Development of HTML micro sites internally for Apple</li>
                                            <li className="my-1">Apple iAds; Pitched an abstraction to minimize production time/cost, which was adopted internally</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="print:hidden"><button className="ui-btn custom-bg-gradient m-10 mx-auto block rounded-2xl border border-color-border bg-color-background-light py-2 px-4 font-font-sans-serif text-xs text-white">Show more</button></div>
                        </section>
                    </div>
                </div>

            </div>
        </main>
    );
}
