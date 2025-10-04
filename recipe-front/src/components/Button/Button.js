import "./Button.css";
import { useNavigate } from "react-router";

export default function Button({ link, text }) {
  const navigate = useNavigate();
  console.log(link, text);

  return <button onClick={() => navigate(link)}>{text}</button>;
}
