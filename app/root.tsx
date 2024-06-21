import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  json,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import styles from "~/styles/root.css?url";
import tailwindcss from "~/tailwind.css?url";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import { getEnv } from "./provider.server";
import LoadingTest from "./components/Loading";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "/siteicon.svg",
    type: "image/svg",
  },
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: tailwindcss },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  }
];

export const loader = async () => {
  return json({
    ENV: getEnv()
  });
};
export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "mixmofp1me");
        `,
          }}
        />
      </head>
      <body>
        <HeaderComponent />
        <LoadingTest />
        {children}
        <ScrollRestoration />
        <FooterComponent />
        <Scripts />
        <script dangerouslySetInnerHTML={{ __html: `window.ENV = ${JSON.stringify(data.ENV)}` }} />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
export function ErrorBoundary() {
  const error = useRouteError();
  console.log(JSON.stringify(error))
  if (isRouteErrorResponse(error)) {
    return (
      <Layout>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </Layout>
    );
  } else if (error instanceof Error) {
    return (
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>Ze stack trace is:</p>
        <pre>{error.stack}</pre>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1>Unknown Error</h1>
      </Layout>
    );
  }
}
