import React, { useEffect, useState } from 'react';
import './App.css';
import AddTask from './pages/AddTask/AddTask';
import Task from './pages/Task/Task';

function App() {
  const [tasks, setTasks] = useState([]);
 
  useEffect(() => {
      fetch('http://localhost:5000/tasks')
          .then(res => res.json())
          .then(data => {
              setTasks(data);
            
          });
  }, []);

  return (
      <div>
        
        <h2><i>Tasks</i></h2>
        
              <div className="task-container"> 
                  {
                     tasks.map(task => <Task
                          key={task.key}
                          task={task}
                          handleAddToCart={handleAddToCart}
                      >
                      </Task>)
                  }
              </div>
              <AddTask></AddTask>

              
          
      </div>
     
      
  );
}

export default App;
