import { HeadersFunction, defer, type MetaFunction } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { CACHE_LIV, about } from "~/Constants";
import { CompanyData } from "~/DTO/DTO";
import ErrorIllustrator from "~/components/ErrorIllustrator";
import Skeleton from "~/components/Skeleton";
import HeroHome from "~/components/about/Hero";
import About from "~/components/about/about";
import Companies from "~/components/about/companies";
import Goals from "~/components/about/goals";
import Technologies from "~/components/about/technologies";
import pb from "~/components/portfolio.server";
export let headers: HeadersFunction = () => {
  return {
    "Cache-Control": `public, s-maxage=${CACHE_LIV}`,
  };
};
export const meta: MetaFunction = () => {
  return [
    { title: "About Bhavish" },
    { name: "description", content: "Welcome to my website!👾" },
  ];
};
export const loader = async () => {
  try {
    pb.authStore.save(process.env.POCKETBASE_TOKEN as string, null)
    const companyRecords = pb.collection(about).getFirstListItem('')
    return defer({ companies: companyRecords });
  } catch (err) {
    console.error(err);
    return defer(
      { companies: null }
    )
  }

};

export default function Index() {
  const { companies } = useLoaderData <typeof loader>()
  return (
    <div>
      <HeroHome />
      <About />
      <Goals />
      <Technologies />
      <Suspense fallback={<Skeleton count={12} />}>
        <Await resolve={companies} errorElement={<ErrorIllustrator message={"Something went wrong while fetching the component"} />}>
          {(resolvedData) =>
            <>
              <Companies data={resolvedData as CompanyData} />
            </>
          }
        </Await>
      </Suspense>
    </div>
  );
}
