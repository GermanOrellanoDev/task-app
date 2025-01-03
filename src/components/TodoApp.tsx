import { useState } from "react";
import TaskList from "./TaskList/TaskList";

declare const Swal: {
  fire: (options: {
    icon: "success" | "error" | "warning" | "info" | "question";
    title: string;
    text?: string;
    timer: number;
    showConfirmButton?: false | true;
  }) => Promise<any>;
};

type Priority = "Normal" | "Urgente" | "Muy urgente";

export interface Task {
  id: number;
  description: string;
  priority: Priority;
}

const TodoApp = () => {
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const [taskList, setTaskList] = useState<Task[]>([]);

  const [selectedPriotiry, setSelectedPriority] = useState<Priority>("Normal");

  const handleAddTask = (): void => {
    if (newTaskDescription.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "¡Hey!",
        timer: 1500,
        text: "Debes ingresar una tarea",
        showConfirmButton: false,
      });
    } else {
      const newTask: Task = {
        id: taskList.length + 1,
        description: newTaskDescription,
        priority: selectedPriotiry,
      };

      Swal.fire({
        icon: "success",
        title: "Tarea agregada",
        timer: 1500,
        showConfirmButton: false,
      });
      setTaskList([...taskList, newTask]);
      setNewTaskDescription("");
    }
  };

  const handleDeleteTask = (index: number): void => {
    setTaskList((tasks) => tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container-index">
      <h1 className="title">Lista de tareas</h1>
      <div className="form-floating-md form-container">
        <input
          className="form-control"
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Ingrese una tarea"
        />
        <div className="dropdown">
          <select
            className="btn btn-dark dropdown-toggle"
            value={selectedPriotiry}
            onChange={(e) => setSelectedPriority(e.target.value as Priority)}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Prioridad
            <option className="dropdown-item" value="Normal">
              Normal
            </option>
            <option className="dropdown-item" value="Urgente">
              Urgente
            </option>
            <option className="dropdown-item" value="Muy urgente">
              Muy urgente
            </option>
          </select>
        </div>
        <button
          className="btn-add-task btn btn-primary btn-add"
          onClick={handleAddTask}
        >
          Agregar tarea
        </button>
      </div>
      <TaskList taskList={taskList} deleteTask={handleDeleteTask}></TaskList>
    </div>
  );
};

export default TodoApp;
