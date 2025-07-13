import style from "./style.module.css";

export default function MainImg() {
  return (
    <div>
      <img
        src="/rq-peq-img.png"
        alt="Grupo empresarial rq imagen"
        className={style.mainImg}
      />
      <p className={style.textImgMain}>Grupo Empresarial RQ</p>
    </div>
  );
}
