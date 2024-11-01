import { useState } from "react";
import TaskList from "./TaskList";

type Priority = "normal" | "urgente" | "muy-urgente";

export interface Task {
  id: number;
  description: string;
  priority: Priority;
}

const TodoApp = () => {
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const [taskList, setTaskList] = useState<Task[]>([]);

  const [selectedPriotiry, setSelectedPriority] = useState<Priority>("normal");

  const handleAddTask = () => {
    if (newTaskDescription.trim() === "") return;

    const newTask: Task = {
      id: taskList.length + 1,
      description: newTaskDescription,
      priority: selectedPriotiry,
    };

    setTaskList([...taskList, newTask]);

    setNewTaskDescription("");
  };

  const handleDeleteTask = (index: number) => {
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
            className="btn btn-secondary dropdown-toggle"
            value={selectedPriotiry}
            onChange={(e) => setSelectedPriority(e.target.value as Priority)}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Prioridad
            <option className="dropdown-item" value="normal">
              Normal
            </option>
            <option className="dropdown-item" value="urgente">
              Urgente
            </option>
            <option className="dropdown-item" value="muy-urgente">
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
