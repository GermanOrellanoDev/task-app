import { Task } from "./TodoApp";

type Props = {
  task: Task;
  deleteTask: () => void;
};

const TaskComponent = ({ task, deleteTask }: Props) => {
  const getClassByPriority = (priority: Task["priority"]): string => {
    switch (priority) {
      case "normal":
        return "bg-light text-dark";
      case "urgente":
        return "bg-warning text-dark";
      case "muy-urgente":
        return "bg-danger text-white";
      default:
        return "bg-secondary text-white";
    }
  };

  return (
    <div className={`card ${getClassByPriority(task.priority)}`}>
      <div className="card-body">
        <p className="card-text">{task.description}</p>
        <strong>Prioridad: {task.priority}</strong>
        <button className="btn-delete-task btn btn-danger" onClick={deleteTask}>
          Borrar
        </button>
      </div>
    </div>
  );
};

export default TaskComponent;
