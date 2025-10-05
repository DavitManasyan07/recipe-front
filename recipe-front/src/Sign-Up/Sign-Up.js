import Button from "../components/Button/Button";
import "./Sign-Up.css";

export default function SignUp() {
  return (
    <div className="signUpBody">
      <header>Sign Up</header>
      <form action="singUp">
        <div className="field">
          <input type="text" required placeholder="Username" />
        </div>
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
          <Button link={""} text={"Sign Up"}/>
        </div>
      </form>
      <div className="link">
        Already a member? <a href="signIn">Login here</a>
      </div>
    </div>
  );
}
