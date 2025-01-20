import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const DashboardLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-black w-full">
      <Navbar />
      <div className="flex h-[calc(100vh-80px)] mt-20">
        <Sidebar />
        <main className="flex-1 overflow-y-auto scrollbar-hide p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout 