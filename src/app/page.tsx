"use client";
import Message from "@/components/Home/Message/index";
import LogOut from "@/components/Home/LogOut";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./page.module.css";
import InfoDiv from "@/components/Home/InfoDiv";

export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState<boolean>(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    storedToken ? setToken(true) : router.push("/login");
  }),
    [token];

  function changeTokenStatus() {
    setToken(false);
  }

  return (
    <div className={style.generalDiv}>
      <Message />
      <InfoDiv />
      <LogOut changeTokenStatus={changeTokenStatus} />
    </div>
  );
}
