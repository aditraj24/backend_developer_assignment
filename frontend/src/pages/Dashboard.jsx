import { useEffect, useState } from "react";
import API from "../api/axios";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data.tasks);
    } catch (error) {
      setMessage("Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (data) => {
    try {
      await API.post("/tasks", data);
      setMessage("Task created");
      fetchTasks();
    } catch (error) {
      setMessage(error.response?.data?.message || "Task creation failed");
    }
  };

  const updateTask = async (data) => {
    try {
      await API.put(`/tasks/${editingTask._id}`, data);
      setEditingTask(null);
      setMessage("Task updated");
      fetchTasks();
    } catch (error) {
      setMessage("Task update failed");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setMessage("Task deleted");
      fetchTasks();
    } catch (error) {
      setMessage("Delete failed");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dashboard</h2>
      <p>{message}</p>

      <TaskForm
        onSubmit={editingTask ? updateTask : createTask}
        initialData={editingTask || {}}
        isEditing={!!editingTask}
      />

      <ul>
        {tasks.map((task) => (
          <li key={task._id} style={{ marginBottom: "1rem" }}>
            <strong>{task.title}</strong> - {task.status}<br />
            {task.description}<br />
            <button onClick={() => setEditingTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task._id)} style={{ marginLeft: "0.5rem" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;