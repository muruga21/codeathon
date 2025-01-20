import About from './About/about'
import './App.css'
import Faq from './FAQ'
import Home from './Home'
import Organizers from './Organizers/organizer'
import Prizes from './Prizes/Prizes'

function App() {

  return (
    <>
      <Home/>
      <About/>
      <Prizes />
      <Organizers/>
      <Faq/>
    </>
  )
}

export default App;
