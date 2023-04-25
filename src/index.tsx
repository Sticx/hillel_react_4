import App from './App'
import { LanguageProvider } from './LanguageProvider/LanguageProvider'
import './index.css'
import ErrorPage from './pages/errorPage/ErrorPage'
import HomePage from './pages/homePage/HomePage'
import LoginPage from './pages/loginPage/LoginPage'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
        ],
    },
    {
        path: '/login-page',
        element: <LoginPage />,
    },
    {
        path: '/login-page/app-page',
        element: <App />,
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <LanguageProvider>
            <RouterProvider router={router} />
        </LanguageProvider>
    </React.StrictMode>
)