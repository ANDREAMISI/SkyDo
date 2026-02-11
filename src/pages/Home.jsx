import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import SearchBar from "../components/SearchBar";
import TaskItem from "../components/TaskItem";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Sky<span>DO</span></h1>

      <SearchBar search={search} setSearch={setSearch} />

      <Link to="/add" className="btn add-btn"><MdAddCircle /> Ajouter une tâche</Link>

      <div className="list">
        {filtered.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Home;
