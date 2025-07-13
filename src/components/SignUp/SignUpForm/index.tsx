import ConsentCheckbox from "../ConsentCheckbox";
import style from "./style.module.css";

export default function SignUpForm() {
  return (
    <form action="" className={style.form}>
      <label htmlFor="" className={style.label}>
        Nombre Completo
      </label>
      <input type="text" className={style.input} />
      <label htmlFor="" className={style.label}>
        Tipo de Identificacion
      </label>
      <select name="Tipo Id" className={style.input}>
        <option value="rojo">cedula de ciudadania</option>
        <option value="azul">targeta de identidad</option>
        <option value="verde">cedula de extrangeria</option>
      </select>
      <label htmlFor="" className={style.label}>
        Numero de Identificacion
      </label>
      <input type="text" className={style.input} />
      <label htmlFor="" className={style.label}>
        Fecha de nacimiento
      </label>
      <input type="date" className={style.input} />
      <label htmlFor="" className={style.label}>
        Fecha de Expedicion
      </label>
      <input type="date" className={style.input} />
      <label htmlFor="" className={style.label}>
        Genero
      </label>
      <select name="Genero" className={style.input}>
        <option value="rojo">Masculino</option>
        <option value="azul">Femenino</option>
        <option value="verde">Prefiero No Decir</option>
      </select>
      <label htmlFor="" className={style.label}>
        Estado civil
      </label>
      <select name="EstadoCivil" className={style.input}>
        <option value="rojo">Soltero</option>
        <option value="azul">Casado</option>
        <option value="verde">Divorciado</option>
      </select>
      <label htmlFor="" className={style.label}>
        Telefono
      </label>
      <input type="number" className={style.input} />
      <label htmlFor="" className={style.label}>
        Campaña
      </label>
      <input type="text" className={style.input} />
      <label htmlFor="" className={style.label}>
        Direccion
      </label>
      <input type="text" className={style.input} />
      <label htmlFor="" className={style.label}>
        Supervisor
      </label>
      <input type="text" className={style.input} />
      <label htmlFor="" className={style.label}>
        Correo Electronico
      </label>
      <input type="text" className={style.input} />
      <label htmlFor="" className={style.label}>
        Contraseña
      </label>
      <input type="password" className={style.input} />
      <label htmlFor="" className={style.label}>
        Confirmar Contraseña
      </label>
      <input type="password" className={style.input} />

      <ConsentCheckbox />
      <div className={style.divButton}>
        <button type="submit" className={style.button}>Registrarse</button>
      </div>
    </form>
  );
}
