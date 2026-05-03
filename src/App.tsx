import './App.css'
import MainLayout from './layouts/MainLayout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import VisitUs from './components/VisitUs'
import ReserveYourTable from './components/ReserveYourTable'

export default function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <AboutUs />
      <Menu />
      <VisitUs />
      <ReserveYourTable />
    </MainLayout>
  )
}