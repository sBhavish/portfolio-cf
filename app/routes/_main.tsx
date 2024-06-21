import { HeadersFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import {
    isRouteErrorResponse,
    useRouteError,
} from "@remix-run/react";
import errImage from "app/images/man.webp"
import { CACHE_LIV } from "~/Constants";
export let headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, s-maxage=${CACHE_LIV}`,
    };
};
export default function MainLayout() {

    return (
        <>
            <Outlet />
        </>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();
    return (
        <main>
            <img className="mx-auto w-full h-96 object-contain" src={errImage} alt="Something went wrong image" />
            <h1 className="text-center text-2xl">Something went wrong</h1>
            <p className="max-w-2xl mx-auto text-center my-6 font-sans text-pretty">Try reloading the page or navigating here again. Don't worry a notification has been sent to the developers of this site regarding this issue.</p>
        </main>
    );
}
