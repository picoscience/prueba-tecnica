"use client";
import Message from "@/components/Home/Message/index";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import style from "./page.module.css";

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    storedToken ? null : router.push("/login");
  }),
    [];

  return (
    <div className={style.generalDiv}>
      <Message />
    </div>
  );
}
