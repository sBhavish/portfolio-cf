export const loader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url)
    const content = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <changefreq>monthly</changefreq>
            <loc>${url}</loc>
            <lastmod>2024-06-01T00:15:16+01:00</lastmod>
            <priority>1.0</priority>
        </url>
        
    </urlset>
    `
    return new Response(content, {
        status: 200,
        headers: {
            "Content-Type": "application/xml",
            "xml-version": "1.0",
            "encoding": "UTF-8"
        }
    });
};