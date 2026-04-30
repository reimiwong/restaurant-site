import './App.css'
import MainLayout from './layouts/MainLayout'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <MainLayout>
      <Navbar />
      <Home />
    </MainLayout>
  )
}