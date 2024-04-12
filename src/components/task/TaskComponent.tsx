import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTasks } from '../../context/TaskContext';

type TaskProps = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  currentState: string;
  notes: string;
};

const Task: React.FC<TaskProps> = ({ id, title, description, dueDate, currentState, notes }) => {
  const { updateTask, deleteTask } = useTasks();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedDueDate, setEditedDueDate] = useState(dueDate);
  const [editedNotes, setEditedNotes] = useState(notes);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTask(id, {
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate,
      currentState: currentState,
      notes: editedNotes,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleCancelar = () => {
    setIsEditing(false);
  };

  return (
    <Grid container spacing={2} className="task" style={{ padding: '20px', borderRadius: '8px' }}>
      {isEditing ? (
        <>
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Due Date"
              variant="outlined"
              type="date"
              fullWidth
              value={editedDueDate}
              onChange={(e) => setEditedDueDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Notes"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={editedNotes}
              onChange={(e) => setEditedNotes(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Button variant="contained" color="secondary" onClick={handleCancelar}>
              Cancelar
            </Button>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <Typography variant="h2">{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Due Date: {dueDate}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Current State: {currentState}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Notes: {notes}</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button variant="contained" color="primary" onClick={handleEdit}>
              Edit
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button variant="contained" color="secondary" onClick={handleDelete}>
              Delete
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Task;
