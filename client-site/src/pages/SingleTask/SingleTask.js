
import React, { useEffect, useState } from 'react';

const SingleTask = () => {
    
    const [task, setTask] = useState([]);
    const[id, setId]= useState('');
  useEffect(() => {
      fetch(`http://localhost:5000/tasks/${id}`)
          .then(res => res.json())
          .then(data => {
              setTask(data);
            
          });
  }, []);

    return (
        <div className="task">
           
            <div className="detail">
                <h3 className="task-name">{task.name}</h3>
                <p><small>{task.description}</small></p>
                <input id="tastId" placeholder="Type Id to Get task"></input>
                {
                    setId(taskId.innerText)
                }
            </div>
        </div>
    );
};

export default SingleTask;
