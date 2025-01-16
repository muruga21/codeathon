import "./Style.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import About from "../About/about";
import Organizers from "../Organizers/organizer";

const Home = () => {
  return (
      <div className="flex flex-col gap-16 bg-[#333333]">
        <About/>
        <Organizers/>
      </div>
  )
}

export default Home