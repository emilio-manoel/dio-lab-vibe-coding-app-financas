import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        children:[
            {
                path: '/',
                element: <h1>formulario de simulação</h1>,
            },
            {
                path: '/resultado',
                element: <h1>resultado da simulação</h1>,
            },
            {
                path: '/historico',
                element: <h1>histórico de simulações</h1>,
            }
        ]
    }
])