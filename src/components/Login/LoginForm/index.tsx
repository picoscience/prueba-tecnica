import ForgotPassword from "../ForgotPassword";
import Recaptcha from "../Recaptcha";
import style from "./style.module.css";

export default function Form() {
  return (
    <form action="" className={style.form}>
      <div className={style.divInputs}>
        <label htmlFor="" className={style.label}>
          Correo Electronico
        </label>
        <input type="email" className={style.input} />

        <label htmlFor="" className={style.label}>
          Contraseña
        </label>
        <input type="password" className={style.input} />
      </div>
      <div>
        <ForgotPassword />
      </div>
      <div>
        <Recaptcha />
      </div>
      <div>
        <button className={style.button}>Ingresar</button>
      </div>
    </form>
  );
}
