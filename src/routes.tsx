import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Detection from './pages/Detection'
import Analytics from './pages/Analytics'
import Reports from './pages/Reports'
import DrConsole from './pages/DrConsole'

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
    path: '/dr_console',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DrConsole />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'detection',
        element: <Detection />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      }
    ],
  },
]) 