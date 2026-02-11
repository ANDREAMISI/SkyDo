import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

function TaskItem({ task, onDelete }) {
  return (
    <div className="task">
      <div className="task-header">
        <h3>{task.title}</h3>
        <div className="task-actions">
          <Link to={`/edit/${task.id}`} className="icon-btn edit">
            <FaEdit />
          </Link>

          <button className="icon-btn delete" onClick={() => onDelete(task.id)}>
            <FaTrash />
          </button>
        </div>
      </div>

      <p>{task.description}</p>
      <p><strong>Statut :</strong> {task.status}</p>
      <p><strong>Heure :</strong> {task.time}</p>
    </div>
  );
}

export default TaskItem;
