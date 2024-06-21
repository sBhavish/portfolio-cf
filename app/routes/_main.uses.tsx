import { HeadersFunction } from "@remix-run/node";
import { CACHE_LIV } from "~/Constants";

export let headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, s-maxage=${CACHE_LIV}`,
    };
};
export default function Index() {
    return (
        <>
            <section className="bg-gradient-dark-- bg-color-background-dark text-color-background">
                <div className="hero p-4 text-center mx-auto max-w-6xl py-20 md:py-40">
                    <h1 className="inline-block font-font-serif text-xl font-extrabold md:text-4xl">
                        <div className="font-mono text-base font-normal md:text-2xl text-white">If you're wondering</div>
                        <div className="py-2 bg-gradient-to-r from-orange-600 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text px-3 text-4xl md:text-7xl">What I'm using?</div>
                    </h1>
                </div>
            </section>
            <section className="m-auto max-w-6xl py-20 px-4 md:my-10">
                <h2 className="pb-8 text-3xl">Hardware <span className="ml-2">💻</span></h2>
                <p>I've been happily developing on a Mac over the last 10+ years. However, I grew up on PC's and built a few rigs over the years for gaming and work. Now days a perk of working in Software our employer often supplies a well equipped box.</p>
                <ul className="my-10 list-disc columns-1 pl-4 md:columns-2 lg:columns-3">
                    <li>Computer - <a rel="noreferrer" target="_blank" href="https://www.apple.com/macbook-pro/">MacBook Pro 14"</a></li>
                    <li className="ml-4">M1 Max with 64GB of RAM 😍 🔥</li>
                    <li>Monitor - <a rel="noreferrer" target="_blank" href="https://www.amazon.com/gp/product/B074JKT894">34" LG Curved Ultra-wide</a></li>
                    <li>Storage - <a rel="noreferrer" target="_blank" href="https://www.amazon.com/gp/product/B01MRSRQLA">TerraMaster RAID Enclosure</a></li>
                    <li className="ml-4">2x <a rel="noreferrer" target="_blank" href="https://www.amazon.com/gp/product/B01AV1697A">WD Gold 4TB @7200 RPM</a></li>
                    <li>Desk - <a rel="noreferrer" target="_blank" href="https://www.amazon.com/gp/product/B07HJJLLML">Adjustable height Desk</a></li>
                    <li>Keyboard - <a rel="noreferrer" target="_blank" href="https://www.apple.com/shop/product/MK2A3LL/A/magic-keyboard-us-english">Apple Magic Keyboard</a></li>
                    <li>Music - <a rel="noreferrer" target="_blank" href="https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B0756CYWWD">Bose Headphones</a></li>
                    <li>Mouse - <a rel="noreferrer" target="_blank" href="https://www.apple.com/shop/product/MMMQ3AM/A/magic-mouse-black-multi-touch-surface">Apple Magic Mouse</a></li>
                </ul>
            </section>
        </>
    );
}
