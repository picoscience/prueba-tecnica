"use client";
import ConsentCheckbox from "../ConsentCheckbox";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./style.module.css";

interface userFormData {
  identification_type_id: number;
  identification_number: string;
  identification_expedition: string;
  gender_id: number;
  birth_date: string;
  name: string;
  marital_status_id: number;
  phone_number: string;
  address: string;
  campaing: string;
  supervisor: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpForm() {
  const [data, setData] = useState<userFormData>({
    identification_type_id: 0,
    identification_number: "",
    identification_expedition: "",
    gender_id: 0,
    birth_date: "",
    name: "",
    marital_status_id: 0,
    phone_number: "",
    address: "",
    campaing: "",
    supervisor: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  // useEffect(() => {
  //   localStorage.clear
  // });

  function validationData() {
    if (data.password !== data.confirmPassword) {
      alert("las contraseñas no coinciden");
      return;
    }

    if (data.password.length < 6) {
      console.log("La contraseña es demasiado corta");
      return;
    }
    //implementar un bucle
    if (
      !data.identification_type_id ||
      !data.identification_number ||
      !data.identification_expedition ||
      !data.gender_id ||
      !data.birth_date ||
      !data.name ||
      !data.marital_status_id ||
      !data.phone_number ||
      !data.address ||
      !data.campaing ||
      !data.supervisor ||
      !data.email ||
      !data.password ||
      !data.confirmPassword
    ) {
      alert("Todos los campos son necesarios");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      alert("Correo electrónico inválido.");
      return;
    }

    sendData();
  }

  async function sendData() {
    const jsonData = {
      identification_type_id: data.identification_type_id,
      identification_number: data.identification_number,
      identification_expedition: data.identification_expedition,
      gender_id: data.gender_id,
      birth_date: data.birth_date,
      name: data.name,
      marital_status_id: data.marital_status_id,
      phone_number: data.phone_number,
      address: data.address,
      campaing: data.campaing,
      supervisor: data.supervisor,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await fetch(
        "http://3.21.37.135:8000/core/api/v1/user_infos/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
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
        validationData();
      }}
    >
      <label className={style.label} htmlFor="name">
        Nombre Completo
      </label>
      <input
        id="name"
        type="text"
        className={style.input}
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <label className={style.label} htmlFor="identification_type_id">
        Tipo de Identificacion
      </label>
      <select
        id="identification_type_id"
        className={style.input}
        value={data.identification_type_id}
        onChange={(e) =>
          setData({ ...data, identification_type_id: Number(e.target.value)})
        }
      >
        <option value="0">Selecciona una opción</option>
        <option value="1">Cédula de Ciudadanía</option>
        <option value="2">Tarjeta de Identidad</option>
        <option value="3">Cédula de Extranjería</option>
      </select>

      <label className={style.label} htmlFor="identification_number">
        Número de Identificación
      </label>
      <input
        id="identification_number"
        type="number"
        className={style.input}
        value={data.identification_number}
        onChange={(e) =>
          setData({ ...data, identification_number: (e.target.value) })
        }
      />

      <label className={style.label} htmlFor="birth_date">
        Fecha de Nacimiento
      </label>
      <input
        id="birth_date"
        type="date"
        className={style.input}
        value={data.birth_date}
        onChange={(e) => setData({ ...data, birth_date: e.target.value })}
      />

      <label className={style.label} htmlFor="identification_expedition">
        Fecha de Expedición
      </label>
      <input
        id="identification_expedition"
        type="date"
        className={style.input}
        value={data.identification_expedition}
        onChange={(e) =>
          setData({ ...data, identification_expedition: e.target.value })
        }
      />

      <label className={style.label} htmlFor="gender_id">
        Género
      </label>
      <select
        id="gender_id"
        className={style.input}
        value={data.gender_id}
        onChange={(e) => setData({ ...data, gender_id: Number(e.target.value) })}
      >
        <option value="0">Selecciona una opción</option>
        <option value="1">Masculino</option>
        <option value="2">Femenino</option>
        <option value="3">Prefiero no decir</option>
      </select>

      <label className={style.label} htmlFor="marital_status_id">
        Estado Civil
      </label>
      <select
        id="marital_status_id"
        className={style.input}
        value={data.marital_status_id}
        onChange={(e) =>
          setData({ ...data, marital_status_id: Number(e.target.value) })
        }
      >
        <option value="0">Selecciona una opción</option>
        <option value="1">Soltero</option>
        <option value="2">Casado</option>
        <option value="3">Divorciado</option>
      </select>

      <label className={style.label} htmlFor="phone_number">
        Teléfono
      </label>
      <input
        id="phone_number"
        type="number"
        className={style.input}
        value={data.phone_number}
        onChange={(e) =>
          setData({ ...data, phone_number:(e.target.value) })
        }
      />

      <label className={style.label} htmlFor="campaing">
        Campaña
      </label>
      <input
        id="campaing"
        type="text"
        className={style.input}
        value={data.campaing}
        onChange={(e) => setData({ ...data, campaing: e.target.value })}
      />

      <label className={style.label} htmlFor="address">
        Dirección
      </label>
      <input
        id="address"
        type="text"
        className={style.input}
        value={data.address}
        onChange={(e) => setData({ ...data, address: e.target.value })}
      />

      <label className={style.label} htmlFor="supervisor">
        Supervisor
      </label>
      <input
        id="supervisor"
        type="text"
        className={style.input}
        value={data.supervisor}
        onChange={(e) => setData({ ...data, supervisor: e.target.value })}
      />

      <label className={style.label} htmlFor="email">
        Correo Electrónico
      </label>
      <input
        id="email"
        type="email"
        className={style.input}
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <label className={style.label} htmlFor="password">
        Contraseña
      </label>
      <input
        id="password"
        type="password"
        className={style.input}
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <label className={style.label} htmlFor="confirmPassword">
        Confirmar Contraseña
      </label>
      <input
        id="confirmPassword"
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
