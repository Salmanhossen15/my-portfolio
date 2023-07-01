import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import SocialLinks from './components/SocialLinks'

function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <SocialLinks></SocialLinks>
    </div>
      
  )
}

export default App
