import React from 'react';


export default TaskItem = (props) => {
    return (
        <div>
            <div>
                <h1>{props.index}</h1>
            </div>
            <div >
                <h1>{props.task}</h1>
                <button onSubmit={() => props.deleteTask()}>
                    delete
                </button>
            </div>
        </div>
    );
}