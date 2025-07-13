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

  function validationData(e: React.FormEvent<HTMLFormElement>) {
    if (!email || !password) {
      console.log("Todos los campos son necesarios");
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

    //fetch
    const credentials = {
      email,
      password,
    };
    console.log(credentials);
    sendData()
  }

  async function sendData() {
    const jsonData = {
      grant_type: "password",
      username: email,
      password: password,
      scope: "",
      client_id: "",
      client_secret: "",
    };

    try {
      const response = await fetch(
        "http://3.21.37.135:8000/core/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(jsonData as any).toString(),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error al registrarse");
      }

      const resdata = await response.json();
      console.log("Registro exitoso:", resdata);
      localStorage.setItem("token", resdata.item.access_token);
      router.push("/");
    } catch (error: any) {
      console.error("Error en el registro:", error.message);
    }
  }

  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        validationData(e);
      }}
    >
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
