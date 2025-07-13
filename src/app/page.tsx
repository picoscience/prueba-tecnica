import Message from "@/components/Home/Message/index";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.generalDiv} >
      <Message />
    </div>
  );
}
