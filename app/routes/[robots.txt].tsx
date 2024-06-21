export const loader = async ({ request }: LoaderFunctionArgs) => {
    let url = new URL("/sitemap.xml", request.url) 
    const robotText = `
    User-agent: *
    Disallow: /api
    Sitemap: ${url}
    `
    return new Response(robotText, {
        status: 200,
        headers: {
            "Content-Type": "text/plain",
        }
    });
};