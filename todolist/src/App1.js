import React, {useState} from 'react';
import Create from './Create';

export default function App1() {
  const [tasks, setTasks] = useState([]);


  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <div >
        <h1 >TODO LIST ! </h1>
        <Create></Create>
        {
        tasks.map((task, index) => {
          return (
            <div key={index} >
              <button index={index + 1} task={task} deleteTask={() => deleteTask(index)}>delete</button>
            </div>
          );
        })
      }
    </div>
  );
}