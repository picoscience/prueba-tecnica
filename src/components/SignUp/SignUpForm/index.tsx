"use client";
import ConsentCheckbox from "../ConsentCheckbox";
import { useState } from "react";
import style from "./style.module.css";

interface userFormData {
  name: string;
  identificationType: string;
  identificationNumber: number;
  birthDate: string;
  issueDate: string;
  gender: string;
  maritalStatus: string;
  phone: number;
  campaign: string;
  address: string;
  supervisor: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpForm() {
  const [data, setData] = useState<userFormData>({
    name: "",
    identificationType: "",
    identificationNumber: 0,
    birthDate: "",
    issueDate: "",
    gender: "",
    maritalStatus: "",
    phone: 0,
    campaign: "",
    address: "",
    supervisor: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function sendData(e: React.FormEvent<HTMLFormElement>) {
     e.preventDefault();
    console.log(data)
  }

  return (
       <form className={style.form} onSubmit={sendData}>
      <label className={style.label}>Nombre Completo</label>
      <input
        type="text"
        className={style.input}
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <label className={style.label}>Tipo de Identificacion</label>
      <select
        className={style.input}
        value={data.identificationType}
        onChange={(e) => setData({ ...data, identificationType: e.target.value })}
      >
        <option value="">Selecciona una opción</option>
        <option value="CC">Cédula de Ciudadanía</option>
        <option value="TI">Tarjeta de Identidad</option>
        <option value="CE">Cédula de Extranjería</option>
      </select>

      <label className={style.label}>Número de Identificación</label>
      <input
        type="number"
        className={style.input}
        value={data.identificationNumber}
        onChange={(e) => setData({ ...data, identificationNumber: Number(e.target.value) })}
      />

      <label className={style.label}>Fecha de Nacimiento</label>
      <input
        type="date"
        className={style.input}
        value={data.birthDate}
        onChange={(e) => setData({ ...data, birthDate: e.target.value })}
      />

      <label className={style.label}>Fecha de Expedición</label>
      <input
        type="date"
        className={style.input}
        value={data.issueDate}
        onChange={(e) => setData({ ...data, issueDate: e.target.value })}
      />

      <label className={style.label}>Género</label>
      <select
        className={style.input}
        value={data.gender}
        onChange={(e) => setData({ ...data, gender: e.target.value })}
      >
        <option value="">Selecciona una opción</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Prefiero no decir</option>
      </select>

      <label className={style.label}>Estado Civil</label>
      <select
        className={style.input}
        value={data.maritalStatus}
        onChange={(e) => setData({ ...data, maritalStatus: e.target.value })}
      >
        <option value="">Selecciona una opción</option>
        <option value="Soltero">Soltero</option>
        <option value="Casado">Casado</option>
        <option value="Divorciado">Divorciado</option>
      </select>

      <label className={style.label}>Teléfono</label>
      <input
        type="number"
        className={style.input}
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: Number(e.target.value) })}
      />

      <label className={style.label}>Campaña</label>
      <input
        type="text"
        className={style.input}
        value={data.campaign}
        onChange={(e) => setData({ ...data, campaign: e.target.value })}
      />

      <label className={style.label}>Dirección</label>
      <input
        type="text"
        className={style.input}
        value={data.address}
        onChange={(e) => setData({ ...data, address: e.target.value })}
      />

      <label className={style.label}>Supervisor</label>
      <input
        type="text"
        className={style.input}
        value={data.supervisor}
        onChange={(e) => setData({ ...data, supervisor: e.target.value })}
      />

      <label className={style.label}>Correo Electrónico</label>
      <input
        type="email"
        className={style.input}
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <label className={style.label}>Contraseña</label>
      <input
        type="password"
        className={style.input}
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <label className={style.label}>Confirmar Contraseña</label>
      <input
        type="password"
        className={style.input}
        value={data.confirmPassword}
        onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
      />

      <ConsentCheckbox />

      <div className={style.divButton}>
        <button type="submit" className={style.button}>
          Registrarse
        </button>
      </div>
    </form>
  );
}
