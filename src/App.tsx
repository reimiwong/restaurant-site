import './App.css'
import MainLayout from './layouts/MainLayout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'

export default function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <AboutUs />
      <Menu />
    </MainLayout>
    
  )
}