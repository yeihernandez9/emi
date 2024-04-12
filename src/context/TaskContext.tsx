import React, { createContext, useContext, useState, useEffect } from 'react';

// Crea el contexto
export const TaskContext = createContext();

// Proveedor del contexto
const TaskProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Función para obtener todas las tareas desde json-server
  const getAllTasks = async () => {
    try {
      const response = await fetch('http://localhost:5001/tasks'); // Cambia la URL según la configuración de tu servidor json-server
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error('Error al obtener las tareas desde json-server:', error);
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
      const data = await response.json();
      console.log('Nueva tarea agregada:', data);
      // Actualizar la lista de tareas después de agregar una nueva
      getAllTasks();
    } catch (error) {
      console.error('Error al agregar la nueva tarea:', error);
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
      const data = await response.json();
      console.log('Tarea actualizada:', data);
      // Actualizar la lista de tareas después de actualizar una tarea
      getAllTasks();
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5001/tasks/${taskId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Tarea eliminada exitosamente');
        // Actualizar la lista de tareas después de eliminar una tarea
        getAllTasks();
      } else {
        console.error('Error al eliminar la tarea:', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <TaskContext.Provider value={{ data, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

export const useTasks = () => useContext(TaskContext);
