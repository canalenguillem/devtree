import { Link } from "react-router-dom";

function RegisterView() {
  return (
    <>
      <h1 className=" text-4xl text-white font-bold">Crear cuenta</h1>
      <nav className=" mt-10">
        <Link className=" text-center text-white block" to="/auth/login">
          login aquí
        </Link>
      </nav>
    </>
  );
}

export default RegisterView;
