
import { NextResponse } from "next/server";

const data = { 
  user: {
    name: "shadcn",
    email: "ma@example.com",
    avatar: "/avatars/shadcn.jpg",
    level: "Prata"
  },
  navMain: [
    {
      title: "Painel",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Usuários",
          url: "#",
        },
        {
          title: "Empresas",
          url: "#",
        },
      ],
    },
    {
      title: "Aplicação",
      url: "#",
      items: [
        {
          title: "Layout",
          url: "#",
        },
        {
          title: "Stories",
          url: "#",
          isActive: true,
        },
        {
          title: "PUSHs",
          url: "#",
        },
        {
          title: "Banners",
          url: "#",
        }, 
      ],
    },
    {
      title: "Eventos",
      url: "#",
      items: [
        {
          title: "Eventos",
          url: "#",
        },
        {
          title: "Palestrantes",
          url: "#",
        },
         
      ],
    }, 
  ],
};

export function GET(request: Request){
  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}