export default function BlogHero({minor, major, light=false}:{minor:string, major:string, light: boolean}) {
    return (
        <>
            <section className={`text-color-background ${(light) ? "bg-white" : "bg-gradient-dark-- bg-color-background-dark "}`}>
                <div className="hero p-4 text-center mx-auto max-w-6xl py-20 md:py-40">
                    <h1 className="inline-block text-xl font-extrabold md:text-4xl">
                        <div className={`font-monospace text-base font-normal md:text-2xl ${(light) ? "text-black" : "text-white"}`}>{minor}</div>
                        <div className="py-2 font-font-serif  bg-gradient-to-r from-orange-600 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text px-3 text-4xl md:text-7xl">{major}</div>
                    </h1>
                </div>
            </section>  
        </>
    )
}