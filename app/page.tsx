"use client";
import { SelectRegional } from "@/components/layout/select-regional";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import styles from "../styles/styles.module.scss";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Sebrae.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";

export default function Home() {
  const router = useRouter();
  const [anime, setAnime] = useState("animate__fadeIn");
  const saveSettings = async (): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    //throw new Error('This is an example exception');
    return false;
  };

  const notify = () =>
    toast.promise(
      saveSettings(),
      {
        loading: "Enviando...",
        success: (
          <div>
            <b>Solicitação enviada </b>
            <br /> Quando liberado seu acesso, você receberá um email
            notificando-o
          </div>
        ),
        error: <b>Erro ao enviar solicitação</b>,
      },
      {
        duration: 2000,
      }
    );

  const login = () => {
    setAnime("animate__fadeOut");
    setTimeout(() => {
      router.push("/cms/dashboard");
    }, 1000);
  };

  return (
    <div className={styles.main}>
      <div>
        <Toaster />
      </div>
      <div
        className={cn("absolute bottom-12 right-12 animate__animated", anime)}
      >
        <Image src={Logo} width={120} height={120} alt={""} />
      </div>
      <div className="flex justify-center items-center h-screen animate__animated">
        <Tabs
          defaultValue="account"
          className={cn("w-[400px] animate__animated", anime)}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Acessar</TabsTrigger>
            <TabsTrigger value="solicitar">Solicitar Acesso</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Acessar</CardTitle>
                <CardDescription>
                  Caso não tenha acesso, solicite um acesso na aba
                  &#34;Solicitar Acesso&#34;
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="exemplo@pr.sebrae.com.br"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    required
                  />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Lembrar meu acesso
                  </label>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={login}>Entrar</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="solicitar">
            <Card>
              <CardHeader>
                <CardTitle>Solicitar Acesso</CardTitle>
                <CardDescription>
                  Para solicitar acesso utilize o seu Email corporativo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="exemplo@pr.sebrae.com.br"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Motivo</Label>
                  <Textarea
                    placeholder="Especifique o motivo do seu acesso ao CMS"
                    required
                  ></Textarea>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="current">Unidade ou Regional</Label>
                  <SelectRegional />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={notify}>Enviar</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
