import { Link } from "react-router-dom";

function LoginView() {
  return (
    <>
      <div>Login View</div>

      <nav>
        <Link to="/auth/register">crear una cuenta</Link>
      </nav>
    </>
  );
}

export default LoginView;
