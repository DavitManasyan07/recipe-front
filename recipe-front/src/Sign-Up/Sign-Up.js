import { setCredentials } from "../authSlice";
import Button from "../components/Button/Button";
import "./Sign-Up.css";
import { useState } from "react"
import { useDispatch } from "react-redux"

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.passwordConfirm) {
      return setError("Passwords are not matching");
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          passwordConfirm: formData.passwordConfirm
        })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong! Try again later")
      }
      localStorage.setItem("token", data.token);

      dispatch(setCredentials({ user: data.user, token: data.token }));

      window.location.href = "/";

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="signUpBody">
      <div className="signUpHeader">
        <h1>Sign Up</h1>
        <p>Create your account and join us!</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required disabled={loading}/>
          <label>Full Name</label>
        </div>
        <div className="field">
          <input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={loading}/>
          <label>Email</label>
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="pass-key"
            required 
            disabled={loading}
            />
          <label>Password</label>
        </div>
        <div className="field">
          <input type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} className="pass-key" required disabled={loading}/>
          <label>Confirm Password</label>
        </div>

        {error && <p className="error">{error}</p>}
        
        <div className="field-button">
          <Button
            text={
              loading ? (
                <>
                  <span className="spinner"></span> Signing in...
                </>
              ) : (
                "Sign In"
              )
            }
          />
        </div>
      </form>

      <div className="link">
        Already a member? <a href="signIn">Login here</a>
      </div>
    </div>
  );
}
