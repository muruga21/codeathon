import About from './About/about'
import './App.css'
import Home from './Home'
import Organizers from './Organizers/organizer'
import Prizes from './Prizes/Prizes'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Home/>
      <About/>
      <Prizes />
      <Organizers/>
      <Footer/>
    </>
  )
}

export default App;
