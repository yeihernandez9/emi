import React, { useState, useEffect, useContext, useMemo } from 'react';
import TaskList from './TaskListComponent';
import { TablePagination, Grid } from '@mui/material';
import { TaskContext, useTasks } from '../../context/TaskContext';

const TaskListWithPagination = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [error, setError] = useState(null);
  const { data } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, [data]);

  const fetchTasks = async () => {
    try {
      setTasks(data);
    } catch (error) {
      setError('Hubo un problema al cargar las tareas. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const memoizedTaskList = useMemo(() => {
    return <TaskList tasks={tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} />;
  }, [tasks, page, rowsPerPage]);

  return (
    <>
      <div style={{ paddingBottom: '60px' }}> 
        {error && <div>{error}</div>}
        {/* Renderizar el componente memoizado */}
        {memoizedTaskList}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tasks.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ color: 'blue' }} // Cambiar el color aquí
        />
      </div>
    </>
  );
};

export default TaskListWithPagination;
