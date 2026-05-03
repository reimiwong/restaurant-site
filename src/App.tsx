import './App.css'
import MainLayout from './layouts/MainLayout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'

export default function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <AboutUs />
    </MainLayout>
    
  )
}