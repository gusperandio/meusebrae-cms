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
 
export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const data = useSidebarData();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Image src={Logo} width={150} height={60} alt="Logo" className="w-64 h-16" />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data?.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
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
        <NavUser user={data?.user ?? { name: "", avatar: "", email: "", level: "" }} />
      </SidebarFooter>
    </Sidebar>
  );
}