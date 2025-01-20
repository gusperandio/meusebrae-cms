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
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label"; 
import { Loader } from "@/components/layout/loading";

export default function Home() {
  const router = useRouter(); 
   

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      router.push("/cms/dashboard");
    }
  }, [router]);

  return (
    <div className={styles.main}>
      <Loader />
    </div>
  );
}
