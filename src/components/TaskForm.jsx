import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskForm({ editId }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("à faire");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (editId) {
      const stored = JSON.parse(localStorage.getItem("tasks")) || [];
      const task = stored.find((t) => t.id === Number(editId));

      if (task) {
        setTitle(task.title);
        setDescription(task.description);
        setStatus(task.status);
        setTime(task.time);
      }
    }
  }, [editId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored = JSON.parse(localStorage.getItem("tasks")) || [];

    if (editId) {
      const updated = stored.map((t) =>
        t.id === Number(editId)
          ? { ...t, title, description, status, time }
          : t
      );
      localStorage.setItem("tasks", JSON.stringify(updated));
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
        status,
        time,
      };
      localStorage.setItem("tasks", JSON.stringify([...stored, newTask]));
    }

    navigate("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        className="input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="input"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>à faire</option>
        <option>en cours</option>
        <option>terminé</option>
      </select>

      <input
        className="input"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button className="btn" type="submit">
        {editId ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
}

export default TaskForm;
