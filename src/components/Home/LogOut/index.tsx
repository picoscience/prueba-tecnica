import style from "./style.module.css";

interface LogOutProps {
  changeTokenStatus: () => void;
}

export default function LogOut({ changeTokenStatus }: LogOutProps) {
  function logOut() {
    localStorage.clear();
    changeTokenStatus()
  }

  return (
    <div className={style.div}>
      <button className={style.button} onClick={logOut}>
        Cerrar Sesión
      </button>
    </div>
  );
}
