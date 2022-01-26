import { LoginContext } from "../helpers/Context";
import { useContext } from "react";

function Login() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  function handleLogin() {
    setLoggedIn(true);
  }

  return (
    <div>
      <input
        name=""
        id=""
        className="btn btn-primary"
        type="button"
        value="Login"
        onClick={handleLogin}
      />
      {loggedIn ? <p>🍏</p> : <p>🎈</p>}
    </div>
  );
}


export default Login;
