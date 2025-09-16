import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          {" "}
          <button onClick={() => navigate("/")}>Login</button>
        </li>
        <li>
          {" "}
          <button onClick={() => navigate("/register")}>Register</button>
        </li>
        <li>
          {" "}
          <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
