import { Link } from "react-router-dom";

function LoginView() {
  return (
    <>
      <h1 className=" text-4xl text-white font-bold">Iniciar sessión</h1>

      <nav className=" mt-10">
        <Link className=" text-center text-white block" to="/auth/register">
          crear una cuenta
        </Link>
      </nav>
    </>
  );
}

export default LoginView;
