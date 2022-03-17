import React, {useState} from 'react';


export default TaskInputField = (props) => {
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }

    return (
        <div>
        <input style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder={'Write a task'} />
        <button onSubmit={() => handleAddTask(task)}>
            submit
        </button>
        </div>
    );
}