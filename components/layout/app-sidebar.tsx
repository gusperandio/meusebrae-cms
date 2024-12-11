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

interface DataItens {
  user: {
    name: string;
    email: string;
    avatar: string;
    level: string;
  };
  navMain: {
    title: string;
    url: string;
    items: (
      | {
          title: string;
          url: string;
          isActive?: undefined;
        }
      | {
          title: string;
          url: string;
          isActive: boolean;
        }
    )[];
  }[];
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [data, setData] = React.useState<DataItens>();

  React.useEffect(() => {
    const loadMenu = async () => {
      try {
        fetch("/api/v1/menu")
          .then((res) => res.json())
          .then((resp) => {
            console.log(resp);
            setData(resp);
          });
      } catch (error) {}
    };

    loadMenu();
  }, []);
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
        {data?.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data?.user ?? {name: '', avatar: "", email: "", level: ""}} />
      </SidebarFooter>
      <SidebarRail />
      <SidebarRail />
    </Sidebar>
  );
}
