import style from "./style.module.css";

export default function Legal() {
  return (
    <div className={style.div} >
      <h2>Legal:</h2>
      <div>
        <a href="" className={style.a}>
          Términos y condiciones
        </a>
      </div>
      <div>
        <a href="" className={style.a}>
          Politicas de privacidad
        </a>
      </div>
    </div>
  );
}
