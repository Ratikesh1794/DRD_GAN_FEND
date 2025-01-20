import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Detection from './pages/Detection'
import Analytics from './pages/Analytics'
import Reports from './pages/Reports'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'detection',
        element: <Detection />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
    ],
  },
]) 