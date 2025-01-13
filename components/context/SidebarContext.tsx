import React, { createContext, useContext, useEffect, useState } from "react";

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
    items: {
      title: string;
      url: string;
      isActive?: boolean;
    }[];
  }[];
}

const SidebarContext = createContext<DataItens | null>(null);

export function SidebarProviderUsed({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<DataItens | null>(null);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const response = await fetch("/api/v1/menu");
        const result = await response.json();
        setData(result); 
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    loadMenu();
  }, []);

  return (
    <SidebarContext.Provider value={data}>{children}</SidebarContext.Provider>
  );
}

export function useSidebarData() {
  return useContext(SidebarContext);
}
