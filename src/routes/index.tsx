import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../pages/notFound/NotFound";
import TaskListWithPagination from "../components/task/TaskListWithPaginationComponent";
import TaskForm from "../pages/task/TaskForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <TaskListWithPagination />,
            },
            {
                path: '/taskForm',
                element: <TaskForm />,
            },
        ]

    },
   
])