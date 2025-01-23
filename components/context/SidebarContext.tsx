import React, { createContext, useContext, useEffect, useState } from "react";

interface NavMain {
  user: {
    name: string;
    email: string;
    avatar: string;
    level: string;
  };
  navMain: {
    title: string;
    url: string;
    items: {
      title: string;
      url: string;
      isActive?: boolean;
    }[];
  }[];
}

const SidebarContext = createContext<NavMain | null>(null);

export function SidebarProviderUsed({ children }: { children: React.ReactNode }) {
  // const [data, setData] = useState<NavMain | null>(null);
  const data: NavMain = {
    user: {
      name: "shadcn",
      email: "ma@example.com",
      avatar: "/avatars/shadcn.jpg",
      level: "Prata",
    },
    navMain: [
      {
        title: "Painel",
        url: "#",
        items: [
          {
            title: "Dashboard",
            url: "dashboard",
            isActive: true,
          },
          {
            title: "Usuários",
            url: "users",
            isActive: false,
          },
          {
            title: "Empresas",
            url: "companies",
            isActive: false,
          },
        ],
      },
      {
        title: "Aplicação",
        url: "#",
        items: [
          {
            title: "Layout",
            url: "layout",
            isActive: false,
          },
          {
            title: "Stories",
            url: "stories",
            isActive: false,
          },
          {
            title: "PUSHs",
            url: "pushs",
            isActive: false,
          },
          {
            title: "Banners",
            url: "banners",
            isActive: false,
          },
        ],
      },
      {
        title: "Eventos",
        url: "#",
        items: [
          {
            title: "Eventos",
            url: "events",
            isActive: false,
          },
          {
            title: "Palestrantes",
            url: "speaker",
            isActive: false,
          },
        ],
      },
      {
        title: "Configurações",
        url: "",
        items: [
          {
            title: "Parametros",
            url: "parameters",
            isActive: false,
          },
          {
            title: "Menu",
            url: "menu",
            isActive: false,
          },
        ],
      },
    ],
  };
  // useEffect(() => {
  //   const loadMenu = async () => {
  //     try {
  //       const response = await fetch("/api/v1/menu"); 
  //       const result = await response.json();
  //       setData(result); 
  //     } catch (error) {
  //       console.error("Error fetching menu data:", error);
  //     }
  //   };
  //   loadMenu();
  // }, []);

  return (
    <SidebarContext.Provider value={data}>{children}</SidebarContext.Provider>
  );
}

export function useSidebarData() {
  return useContext(SidebarContext);
}
