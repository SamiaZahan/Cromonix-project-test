import React from 'react';

const Task = () => {
    const { _id, name,description} = props.task;

    return (
        <div className="task">
           
            <div className="detail">
                <h3 className="task-name">{name}</h3>
                <p><small>{description}</small></p>
            </div>
        </div>
    );
};

export default Task;

