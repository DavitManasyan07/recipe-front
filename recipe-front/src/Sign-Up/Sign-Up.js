import Button from "../components/Button/Button";
import "./Sign-Up.css";

export default function SignUp() {
  return (
    <div className="signUpBody">
      <div className="signUpHeader">
        <h1>Sign Up</h1>
        <p>Create your account and join us!</p>
      </div>

      <form action="signUp">
        <div className="field">
          <input type="text" required />
          <label>Full Name</label>
        </div>
        <div className="field">
          <input type="text" required />
          <label>Username</label>
        </div>
        <div className="field">
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="field">
          <input type="password" className="pass-key" required />
          <label>Password</label>
        </div>
        <div className="field">
          <input type="password" className="pass-key" required />
          <label>Confirm Password</label>
        </div>
        <div className="field-button">
          <Button link={""} text={"Sign Up"} />
        </div>
      </form>

      <div className="link">
        Already a member? <a href="signIn">Login here</a>
      </div>
    </div>
  );
}
