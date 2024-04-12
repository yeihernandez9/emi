import React, { createContext, useContext, useState, useEffect } from 'react';

// Crea el contexto
export const TaskContext = createContext();

// Proveedor del contexto
const TaskProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getAllTasks = async () => {
    try {
      const response = await fetch('http://localhost:5001/tasks');
      if (!response.ok) {
        throw new Error('Error al obtener las tareas: ' + response.statusText);
      }
      const data = await response.json();
      setData(data);
      setError(null); // Reiniciar el estado de error si la solicitud es exitosa
    } catch (error) {
      console.error('Error al obtener las tareas desde json-server:', error);
      setError('Hubo un problema al cargar las tareas. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const addTask = async (newTask) => {
    try {
      const response = await fetch('http://localhost:5001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        throw new Error('Error al agregar la nueva tarea: ' + response.statusText);
      }
      const data = await response.json();
      console.log('Nueva tarea agregada:', data);
      getAllTasks();
    } catch (error) {
      console.error('Error al agregar la nueva tarea:', error);
      setError('Hubo un problema al agregar la nueva tarea. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const updateTask = async (taskId, updatedTaskData) => {
    try {
      const response = await fetch(`http://localhost:5001/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTaskData),
      });
      if (!response.ok) {
        throw new Error('Error al actualizar la tarea: ' + response.statusText);
      }
      const data = await response.json();
      console.log('Tarea actualizada:', data);
      getAllTasks();
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      setError('Hubo un problema al actualizar la tarea. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5001/tasks/${taskId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error al eliminar la tarea: ' + response.statusText);
      }
      console.log('Tarea eliminada exitosamente');
      getAllTasks();
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
      setError('Hubo un problema al eliminar la tarea. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ data, addTask, updateTask, deleteTask, error }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

export const useTasks = () => useContext(TaskContext);
