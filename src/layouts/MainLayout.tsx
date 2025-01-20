import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-black w-full">
      <Navbar />
      <main className="h-screen mt-20 w-full overflow-y-auto scrollbar-hide">
        <div className="w-full mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default MainLayout 