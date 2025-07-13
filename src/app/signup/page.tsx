import SignUpForm from "@/components/SignUp/SignUpForm";
import style from "./style.module.css";
import Login from "@/components/SignUp/Login";

export default function SignUp() {
  return (
    <div className={style.generalDiv}>
      <div className={style.div}>
        <div className={style.divTitle} >
          <h1 className={style.title} >Registrarse</h1>
        </div>
        <Login />
        <SignUpForm />
      </div>
    </div>
  );
}
