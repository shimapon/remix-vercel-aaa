import { useLoaderData } from "@remix-run/react";

import { HeadersFunction, LoaderFunction } from "@remix-run/node";

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "max-age=0, s-maxage=30, stale-while-revalidate=30",
  };
};

export const loader: LoaderFunction = () => {
  return new Date().toUTCString();
};

export default function Index() {
  const data = useLoaderData<string>();

  return (
    <div className="p-8">
      <h1>swr</h1>
      <p>{data}</p>
      <h1>csr</h1>
      <p>{new Date().toUTCString()}</p>
    </div>
  );
}
