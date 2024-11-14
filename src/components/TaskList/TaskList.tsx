import { Task } from "../TodoApp";
import TaskComponent from "../Task/Task";
import "./TaskList.css";

type Props = {
  taskList: Task[];
  deleteTask: (index: number) => void;
};

const TaskList = ({ taskList, deleteTask }: Props) => {
  return (
    <div className=".container task-list">
      {taskList.map((task, index) => (
        <TaskComponent
          key={task.id}
          task={task}
          deleteTask={() => deleteTask(index)}
        ></TaskComponent>
      ))}
    </div>
  );
};

export default TaskList;
