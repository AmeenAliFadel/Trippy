import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Contact from './Pages/Contact/Contact'
import SignUp from './Pages/SignUp/SignUp'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
  <Navbar />
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/about' element={ <About/> } />
      <Route path='/service' element={ <Service /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/signup' element={ <SignUp /> } />
    </Routes>
    <Footer />
    </>
  )
}

export default App
