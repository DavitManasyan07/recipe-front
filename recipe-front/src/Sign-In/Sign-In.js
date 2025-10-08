import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../authSlice";
import Button from "../components/Button/Button";
import "./Sign-In.css";

export default function SignIn() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true)
      const response = await fetch("http://localhost:5000//api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Invalid credentials")

      localStorage.setItem("token", data.token)
      dispatch(setCredentials({ user: data.user, token: data.token }))

      window.location.href = "/"
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="signInBody">
      <header>Sign In</header>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            disabled={loading}
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
            disabled={loading}
          />
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
        Don't have an account yet? <a href="/signup">Sign Up here</a>
      </div>
    </div>
  );
}
