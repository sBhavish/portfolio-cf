import { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Outlet, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import notFoundImage from "app/images/svg/404.svg"
import { CACHE_LIV } from "~/Constants";
export let headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, s-maxage=${CACHE_LIV}`,
    };
};
export const meta: MetaFunction = () => {
    return [
        { title: "Not found page" },
        { name: "description", content: "Invalid Route" },
    ];
};
export default function MainLayout() {

    return (
        <>
            <main>
                <img className="mx-auto w-full h-96 object-contain" src={notFoundImage} alt="Not Found" />
                <h1 className="text-center text-2xl">404 Page Not Found</h1>
                <p className="max-w-2xl mx-auto text-center my-6 font-sans text-pretty">Oops! It looks like the page you're looking for doesn't exist. Don't worry, you can find your way back using our navigation menu!</p>
            </main>
        </>
    );
}