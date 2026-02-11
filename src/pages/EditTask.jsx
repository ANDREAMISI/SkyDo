import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function EditTask() {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Modifier la tâche</h1>
      <TaskForm editId={id} />
    </div>
  );
}

export default EditTask;
