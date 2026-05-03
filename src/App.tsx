import './App.css'
import MainLayout from './layouts/MainLayout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
    </MainLayout>
  )
}