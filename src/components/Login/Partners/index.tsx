import style from "./style.module.css";

export default function Partners() {
  return (
    <div className={style.div}>
        <h2>Socios estratégicos</h2>
      <div className={style.imgDiv} >
        <img
          src="/rq-peq-img.png"
          alt="Grupo empresarial rq imagen"
          className={style.img}
        />
        <img
          src="/rq-peq-img.png"
          alt="Grupo empresarial rq imagen"
          className={style.img}
        />
        <img
          src="/rq-peq-img.png"
          alt="Grupo empresarial rq imagen"
          className={style.img}
        />
      </div>
    </div>
  );
}
