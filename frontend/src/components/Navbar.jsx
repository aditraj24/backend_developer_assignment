import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.nav}>
      <h2>Task Manager</h2>
      <div>
        {!user ? (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            {user.role === "admin" && (
              <Link to="/admin" style={styles.link}>Admin</Link>
            )}
            <button onClick={logout} style={styles.button}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "#222",
    color: "#fff",
  },
  link: {
    color: "#fff",
    marginRight: "1rem",
    textDecoration: "none",
  },
  button: {
    padding: "0.4rem 0.8rem",
    cursor: "pointer",
  },
};

export default Navbar;