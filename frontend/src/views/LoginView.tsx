import { Link } from "react-router-dom";

function LoginView() {
  return (
    <>
      <h1>Login</h1>
      <nav>
        <Link to="/auth/register">crear una cuenta</Link>
      </nav>
    </>
  );
}

export default LoginView;
