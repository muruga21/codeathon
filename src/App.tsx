import About from './About/about'
import './App.css'
import Faq from './FAQ'
import Home from './Home'
import Organizers from './Organizers/organizer'
import Prizes from './Prizes/Prizes'
import Theme from './Themes'
import Timeline from './Timeline'

function App() {

  return (
    <>
      <Home/>
      <About/>
      <Theme/>
      <Prizes />
      <Timeline/>
      <Organizers/>
      <Faq/>
    </>
  )
}

export default App;
