import React, { useState } from 'react';
import TaskFormComponent from '../../components/task/TaskFormComponent'

const TaskForm = () => {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (newTask) => {
    // Add the new task to the list of tasks
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Add New Task</h1>
      <TaskFormComponent onSubmit={handleSubmit} states={['Pending', 'In Progress', 'Completed']} />
    </div>
  );
};


export default TaskForm
