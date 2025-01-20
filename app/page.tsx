"use client";
import styles from "../styles/styles.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
