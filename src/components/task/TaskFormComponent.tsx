import React, { useState, useContext } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { TaskContext, useTasks } from '../../context/TaskContext'; // Importa el contexto TaskContext

const TaskFormComponent = () => {
  const { addTask } = useTasks(); // Obtén la función addTask del contexto
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation
    if (!title || !description || !dueDate || !currentState || !notes) {
      alert('Please fill in all fields');
      return;
    }
    // Prepare task object
    const newTask = {
      title,
      description,
      dueDate,
      currentState,
      notes,
    };
    // Call addTask function from the context with the new task data
    addTask(newTask);
    // Clear form fields
    setTitle('');
    setDescription('');
    setDueDate('');
    setCurrentState('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Due Date"
            variant="outlined"
            type="date"
            fullWidth
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Current State"
            variant="outlined"
            fullWidth
            value={currentState}
            onChange={(e) => setCurrentState(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Notes"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Add Task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskFormComponent;
