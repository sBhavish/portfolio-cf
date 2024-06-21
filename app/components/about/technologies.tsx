import { useState } from "react";
import { Technology } from "~/DTO/DTO";
import { techJson } from "~/content/technologies";
export default function Technologies() {
    let data: Technology[] = JSON.parse(techJson)
    const [description, setDescription] = useState<string|null>()
    const [current, setCurrent] = useState<number>(-1)
    const handleButtonClick = (tech:Technology) => {
        setDescription(tech.description);
        setCurrent(tech.id)
    };
    
    return (
        <>
            <section className="bg-color-background-dark py-20 text-color-background-light">
                <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:py-20">
                    <div className="basis-2/5">
                        <h2 className="mb-8 text-xl md:text-3xl text-white">
                            Technology <span className="ml-2">🧰</span>
                        </h2>
                        <div className="work-details flex flex-wrap gap-2">
                            {data.map(tech => (
                                <button
                                    key={tech.id}
                                    className={`rounded-md px-2 py-1 text-sm ${(tech.id==current)? 'active' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick(tech)}
                                >
                                    {tech.techtitle}
                                </button>
                            ))}
                        </div>
                    </div>
                    {description === undefined ? (
                        <blockquote className="my-8 basis-3/5 text-xl font-light leading-relaxed text-white text-pretty font-sans tracking-wide">
                            This is a <b className="font-extrabold">non exhaustive</b> list of tools and technologies I use to make products come to life. I'm also very comfortable pushing pixels in Figma, Adobe, Video, and 3D modelling.
                        </blockquote>
                    ) : (
                        <blockquote className="my-8 basis-3/5 text-xl font-light leading-relaxed text-white text-pretty font-sans tracking-wide text-justify">
                            {description}
                        </blockquote>
                    )}

                </div>
            </section>
        </>
    );
}
