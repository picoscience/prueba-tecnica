import style from "./style.module.css";

export default function ConsentCheckbox() {
  return (
    <div>
      <div className={style.checkboxDiv}>
        <form action="">
          <input type="checkbox" />
        </form>
        <p>
          Autorizo el tratamiento de mis datos personales conforme a la
          <a href="" className={style.a} >politica de privacidad</a>
        </p>
      </div>
      <div className={style.checkboxDiv}>
        <form action="">
          <input type="checkbox" />
        </form>
        <p>
          Accepto los
          <a href="" className={style.a} >politica de privacidad</a>
        </p>
      </div>
    </div>
  );
}
