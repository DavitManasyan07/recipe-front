import Button from "../components/Button/Button";
import "./Sign-In.css";

export default function SignIn() {
  return (
    <div className="signInBody">
      <header>Sign In</header>
      <form action="signIn">
        <div className="field">
          <input type="email" required placeholder="Email" />
        </div>
        <div className="field">
          <input
            type="password"
            className="pass-key"
            required
            placeholder="Password"
          />
        </div>
        <div className="field-button">
          <Button link={""} text={"Sign In"} />
        </div>
      </form>
      <div className="link">
        Don't have an account yet? <a href="signUp">Sign Up here</a>
      </div>
    </div>
  );
}
