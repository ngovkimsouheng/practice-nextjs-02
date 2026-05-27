// app/dashboard/@products/(.)products/[uuid]/page.tsx

import ProductDetailModalComponent from "@/components/products/ProductDetailModalComponent";

export default async function Page({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
//   const { uuid } = await params;

  return (
    <ProductDetailModalComponent
    //   uuid={uuid}
    />
  );
}
