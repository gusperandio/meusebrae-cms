import { NavMain } from "@/types";
import { NextResponse } from "next/server";

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

export function GET(request: Request) {
  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
