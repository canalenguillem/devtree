import { Link } from "react-router-dom";

function RegisterView() {
  return (
    <>
      <div>Register View</div>
      <nav>
        <Link to="/auth/login">login aquí</Link>
      </nav>
    </>
  );
}

export default RegisterView;
