import Contact from "../Contact";
import Legal from "../Legal";
import Hour from "../Hour";
import Copyright from "../Copyright";
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.divSections}>
        <Contact />
        <Legal />
        <Hour />
      </div>
      <Copyright />
    </footer>
  );
}
