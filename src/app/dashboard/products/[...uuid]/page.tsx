import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { uuid: string };
}): Promise<Metadata> {
  const res = await fetch(
    `https://ishop.cheat.casa/api/v1https://ishop.cheat.casa/api/v1/products/${params.uuid}`,
  );
  const post = await res.json();

  return {
    title: `Product ${post?.uuid} | Next Route`,
    description: `View details for product ${post?.uuid}`,
    openGraph: {
      images: post?.thumbnail,
      title: `Product ${post?.name} | Next Route`,
      description: `View details for product ${post?.description}`,
    },
  };
}

export default function Page({ params }: { params: { uuid: string } }) {
  return <div>{params.uuid}</div>;
}
