import Message from "@/components/Home/Message/index";
import Header from "@/components/Header/index";
import Register from "@/components/Login/Register";
import LoginForm from "@/components/Login/LoginForm";
import MainImg from "@/components/Login/MainImg";
import Service from "@/components/Login/Service";
import Partners from "@/components/Login/Partners";
import Footer from "@/components/Footer/Footer";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.generalDiv} >
      <Header />
      <main className={style.main}>
        <div className={style.divForm}>
          <div>
            <h1 className={style.title}>Iniciar sesión</h1>
          </div>
          <Register />
          <LoginForm />
        </div>
        <div className={style.divInfo}>
          <MainImg />
          <Service />
          <Partners />
        </div>
      </main>
      <Footer />
      {/* <Message /> */}
    </div>
  );
}
