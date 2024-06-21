import logo from "app/images/me.jpeg";
export default function HeroHome() {
    return (
        <>
            <main>
                <div className="relative">
                    <section className="relative z-0 m-auto flex max-w-6xl flex-col-reverse items-center justify-center gap-4 py-20 md:flex-row md:py-40">
                        <div className="hero p-4 text-center py-10 md:py-20 md:text-right">
                            <h1 className="inline-block font-font-serif text-xl font-extrabold whitespace-nowrap md:text-4xl">
                                <div className="font-monospace text-base font-normal md:text-2xl">
                                    <span className="whitespace-nowrap">A Software Engineer</span>
                                </div>
                                <div className="py-2 bg-gradient-to-r from-orange-600 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text px-3 text-4xl md:text-7xl">
                                    Bhavish Kotian
                                </div>
                            </h1>
                        </div>
                        <div>
                            <img alt="Matthew Scholta" className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-400 aspect-square max-h-32 cursor-pointer overflow-hidden rounded-full p-1 transition-transform hover:scale-110 active:rotate-6 md:max-h-40" height="auto" loading="eager" src={logo} width="auto" />
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}