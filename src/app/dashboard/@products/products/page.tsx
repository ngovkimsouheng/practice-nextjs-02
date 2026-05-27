// "use client";
// import { ProductType } from "@/lib/productType/productType";
// import Link from "next/link";
// import React, { use } from "react";
// import { ProductCardComponent } from "@/components/products/ProductCardComponent";

// async function fetchProducts() {
//   try {
//     const res = await fetch(`https://ishop.cheat.casa/api/v1/products`, {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error(`API error: ${res.status} ${res.statusText}`);
//     }
//     const data = await res.json();
//     console.log("Fetched products:", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return { success: false, content: [] };
//   }
// }

// export default function ProductPageRoute() {
//   const { data: products } = use(fetchProducts());
//   return (
//     <div className="bg-gray-100 p-4  gap-4 flex ">
//       <Link
//         className="bg-blue-500 text-white p-2 rounded"
//         href="/dashboard/create"
//       >
//         Create Product
//       </Link>
//       <Link
//         className="bg-green-500 text-white p-2 rounded"
//         href="/dashboard/edit"
//       >
//         Edit Product
//       </Link>

//       {products?.content?.map(
//         ({ thumbnail, priceOut, name, description }: ProductType) => (
//           <ProductCardComponent
//             key={thumbnail}
//             thumbnail={thumbnail}
//             priceOut={priceOut}
//             name={name}
//             description={description}
//           />
//         ),
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductCardComponent } from "@/components/products/ProductCardComponent";

export default function ProductPageRoute() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://ishop.cheat.casa/api/v1/products");

        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }

        const data = await res.json();
        setProducts(data.content || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex gap-4 mb-4">
        {" "}
        <Link
          className="bg-blue-500 text-white p-2 rounded"
          href="/dashboard/create"
        >
          Create Product
        </Link>
        <Link
          className="bg-green-500 text-white p-2 rounded"
          href="/dashboard/edit"
        >
          Edit Product
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4  ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map(({ uuid, thumbnail, priceOut, name, description }) => (
            <ProductCardComponent
              key={uuid}
              thumbnail={thumbnail}
              priceOut={priceOut}
              name={name}
              description={description}
              uuid={""}
            />
          ))
        )}
      </div>
    </div>
  );
}
