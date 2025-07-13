"use client";
import ForgotPassword from "../ForgotPassword";
import Recaptcha from "../Recaptcha";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./style.module.css";

export default function Form() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  function sendData(e: React.FormEvent<HTMLFormElement>) {
    if (!email || !password) {
      console.log("todos los campos son necesarios");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Correo electrónico inválido.");
      return;
    }

    if (password.length < 6) {
      alert("Contraseña demasiado corta.");
      return;
    }

    e.preventDefault();
    //fetch
    const credentials = {
      email,
      password,
    };
    console.log(credentials);

    // testing
    const fakeToken =
      "nbWFpbC5jb20iLCJpYXQiOjE3MDAwMDAwMDB9Zp3UvGKhk3G1ekN3UJm2z6yH6ybjZchX3QezqgqAlvU";

    localStorage.setItem("token", fakeToken);
    // localStorage.clear()

    router.push("/");
  }

  return (
    <form className={style.form} onSubmit={sendData}>
      <div className={style.divInputs}>
        <label htmlFor="email" className={style.label}>
          Correo Electronico
        </label>
        <input
          id="email"
          type="email"
          className={style.input}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password" className={style.label}>
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          className={style.input}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <ForgotPassword />
      </div>
      <div>
        <Recaptcha />
      </div>
      <div>
        <button className={style.button} type="submit">
          Ingresar
        </button>
      </div>
    </form>
  );
}
