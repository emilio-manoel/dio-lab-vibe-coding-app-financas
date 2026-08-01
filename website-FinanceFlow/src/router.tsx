import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";

export const router = createBrowserRouter([
    {
        element: <RootLayout/>,
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