import ProductDetailModalComponent from "@/components/modal/ProductDetailComponentModal";

async function fetchDetail(uuid: string) {
  const res = await fetch(`https://ishop.cheat.casa/api/v1/products/${uuid}`, {
    cache: "no-store",
  });

  return await res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params; 

  const data = await fetchDetail(uuid);

  return (
    <ProductDetailModalComponent
      uuid={data.uuid}
      name={data.name}
      description={data.description}
      thumbnail={data.thumbnail}
      priceOut={data.priceOut}
    />
  );
}
