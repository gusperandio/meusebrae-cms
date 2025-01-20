import { NextResponse } from "next/server";

const data = {
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
        },
        {
          title: "Usuários",
          url: "users",
        },
        {
          title: "Empresas",
          url: "companies",
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
        },
        {
          title: "Stories",
          url: "stories",
          isActive: true,
        },
        {
          title: "PUSHs",
          url: "pushs",
        },
        {
          title: "Banners",
          url: "banners",
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
        },
        {
          title: "Palestrantes",
          url: "speaker",
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
        },
        {
          title: "Menu",
          url: "menu",
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
