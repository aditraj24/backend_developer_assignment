import { useState } from "react";

const TaskForm = ({ onSubmit, initialData = {}, isEditing = false }) => {
  const [form, setForm] = useState({
    title: initialData.title || "",
    description: initialData.description || "",
    status: initialData.status || "pending",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
        if (!isEditing) {
          setForm({ title: "", description: "", status: "pending" });
        }
      }}
      style={{ marginBottom: "1rem" }}
    >
      <input
        name="title"
        placeholder="Task title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">{isEditing ? "Update" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;