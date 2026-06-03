import { AsideComponentDashboard } from "@/components/dashboard/AsideComponentDashboard";
import React from "react";

export default function DashboardLayout({
  children,
  products,
  blogs,
  setting,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  blogs: React.ReactNode;
  setting: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-6 ">
      <div className="">
        <AsideComponentDashboard />
      </div>
      <div className="grid col-span-5">
        <div className=" bg-amber-100">{children}</div>
        <div className=" bg-green-100">{products}</div>
        <div className=" bg-pink-50">{blogs}</div>
        <div className="bg-blue-50">{setting}</div>
      </div>
    </section>
  );
}
