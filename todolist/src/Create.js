import { useState } from "react";


const Create = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

//  const handleAddTask = (value) => {
//    props.addTask(value);
//    setTask(null);
//}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { id:1, task };

  };

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Task: </label>
        <input
          type="text"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
      <button onSubmit= {() => addTask={addTask}}>add task</button>
    </div>
  );
};

export default Create;
