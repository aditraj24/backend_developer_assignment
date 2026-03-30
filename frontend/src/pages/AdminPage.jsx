import { useAuth } from "../context/AuthContext";

const AdminPage = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin Page</h2>
      <p>Welcome, {user?.name}</p>
      <p>You have admin access.</p>
    </div>
  );
};

export default AdminPage;