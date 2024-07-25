
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import Academics from './components/Academics'
import Faculty from './components/Faculty'
import Admission from './components/Admission'
import Students from './components/Students'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
     <Route path='/' element={<Home/>} /> 
     <Route path='/academics' element={<Academics/>} /> 
     <Route path='/admissions' element={<Admission/>} /> 
     <Route path='/students' element={<Students/>} /> 
     <Route path='/about' element={<About/>} /> 
     <Route path='/contact' element={<Contact/>} /> 
     <Route path='/faculty' element={<Faculty/>} /> 
     <Route path='/gallery' element={<Gallery/>} /> 
     
      
      </Routes>
    </>
  )
}

export default App
