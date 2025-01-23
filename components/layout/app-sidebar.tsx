"use client";
import * as React from "react";

import Logo from "@/public/images/logo.png";
import { SearchForm } from "@/components/layout/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import Image from "next/image";
import Link from "next/link";
import { useSidebarData } from "@/components/context/SidebarContext";
import { useState } from "react";
export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const initialData = useSidebarData();
  const [data, setData] = useState(initialData);
  const handleItemClick = (groupIndex: number, itemIndex: number) => {
    const newData = { ...data };
    if (newData.navMain) {
      newData.navMain = newData.navMain.map((group, gIndex) => ({
        ...group,
        items: group.items.map((item, iIndex) => ({
          ...item,
          isActive: gIndex === groupIndex && iIndex === itemIndex,
        })),
      }));
    }
    setData(newData as typeof initialData);
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Image
          src={Logo}
          width={150}
          height={60}
          alt="Logo"
          className="w-64 h-16"
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data?.navMain.map((group, groupIndex) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item, itemIndex) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      onClick={() => handleItemClick(groupIndex, itemIndex)}
                    >
                      <Link href={`/cms/${item.url}`}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={data?.user ?? { name: "", avatar: "", email: "", level: "" }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
