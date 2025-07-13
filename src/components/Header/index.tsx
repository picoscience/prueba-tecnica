import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style.header}  >
      <div className={style.imgDiv} >
        <img src="/rq-peq-img.png" alt="Grupo empresarial Pq imagen" className={style.img} />
      </div>
    </header>
  );
}
