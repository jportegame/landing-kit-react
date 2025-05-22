import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import FloatingWhatsappButton from '../components/common/FloatingWhatsappButton'
import Footer from '../components/layout/Footer'

const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full mx-auto">
        <Outlet />
      </main>

      <Footer />
      <FloatingWhatsappButton />
    </div>
  )
}

export default DefaultLayout
