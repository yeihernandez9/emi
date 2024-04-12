import React from 'react'
import ReactDOM from 'react-dom/client'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline } from "@mui/material";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.tsx';
import TaskProvider from './context/TaskContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <TaskProvider >
        <RouterProvider router={router}/>
    </TaskProvider>
    
  </React.StrictMode>,
)
