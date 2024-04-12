import React, { useState, useEffect } from 'react';
import Task from './TaskComponent';
import { Grid } from '@mui/material';

const TaskList = ({ tasks }) => {
  return (
    <Grid container spacing={2}>
      {tasks.map(task => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Task
            id={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            currentState={task.currentState}
            notes={task.notes}
            onDelete={undefined}
            onEdit={undefined}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskList;
