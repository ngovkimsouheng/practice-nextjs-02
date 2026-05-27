"use client";

import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export function AsideComponentDashboard() {
  const pathName = usePathname();

  return (
    <Sidebar aria-label="Default sidebar example">
      <SidebarItems>
        <SidebarItemGroup>
          <h1 className="text-xl font-bold">Dashboard</h1>
          {/* <SidebarItem>
            Dashboard
          </SidebarItem> */}
          {/* <SidebarItem
            href="#"
            icon={HiViewBoards}
            label="Pro"
            labelColor="dark"
          >
            Kanban
          </SidebarItem> */}
          {/* <SidebarItem href="#" icon={HiInbox} label="3">
            Inbox
          </SidebarItem> */}
          <SidebarItem
            className={
              pathName === "/dashboard/products"
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : ""
            }
            href="/dashboard/products"
            icon={HiUser}
          >
            product
          </SidebarItem>
          <SidebarItem
            className={
              pathName === "/dashboard/blogs"
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : ""
            }
            href="/dashboard/blogs"
            icon={HiShoppingBag}
          >
            blog
          </SidebarItem>{" "}
          <SidebarItem
            className={
              pathName === "/dashboard/settings"
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : ""
            }
            href="/dashboard/settings"
            icon={HiShoppingBag}
          >
            setting
          </SidebarItem>
          {/* <SidebarItem href="#" icon={HiArrowSmRight}>
            Sign In
          </SidebarItem>
          <SidebarItem href="#" icon={HiTable}>
            Sign Up
          </SidebarItem> */}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
