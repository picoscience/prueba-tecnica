"use client";
import { useState, useEffect } from "react";
import style from "./style.module.css";

export default function InfoDiv() {
  const [token, setToken] = useState<string>("");
  const [resData, setResData] = useState<any>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  async function getData() {
    try {
      const response = await fetch("http://3.21.37.135:8000/core/users/me/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error al obtener la información");
      }

      const resdata = await response.json();
      setResData(resdata);
      console.log("Datos del usuario:", resdata);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  }

  return (
    <>
      {resData ? (
        <div className={style.divInfo}>
          <div className={style.divTitle} >
            <h2 className={style.title} >Información del Usuario</h2>
          </div>
          <p>User info Id: {resData.user_info_id}</p>
          <p>Email: {resData.email}</p>
          <p>Password haseada: {resData.hashed_password}</p>
          <p>USer id: {resData.id}</p>
          <p>
            Tipo de identificacion: {resData.user_info.identification_type_id}
          </p>
          <p>address: {resData.user_info.address}</p>
          <p>Fecha de cumpleaños: {resData.user_info.birth_date}</p>
          <p>Campaña: {resData.user_info.campaing}</p>
          <p>Numero de Id: {resData.user_info.identification_number}</p>
        </div>
      ) : (
        <div>
          <h1>El usuario no tiene informacion</h1>
        </div>
      )}
    </>
  );
}
