import React, { useState } from 'react';
import Countdown from './Countdown';
import './styles.css';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
  className="min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/img.png'), url('/bgdesign.png')",
  }}
>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 backdrop-blur-lg bg-white/10 rounded-lg"> {/* Increased padding, added blur background */}

          <img src="/thiran.png" alt="Logo" className="w-26 h-16" />
        <div className="space-x-8 hidden md:flex"> {/* Increased space between items */}
          <ul className='flex space-x-8 text-[#F3F4F5]'> {/* Increased space between items and changed text color */}
            <li><a href="#about" className="hover-underline-animation text-lg">About</a></li> {/* Increased font size */}
            <li><a href="#themes" className="hover-underline-animation text-lg">Themes</a></li> {/* Increased font size */}
            <li><a href="#timeline" className="hover-underline-animation text-lg">Timeline</a></li> {/* Increased font size */}
            <li><a href="#sponsors" className="hover-underline-animation text-lg">Sponsors</a></li> {/* Increased font size */}
            <li><a href="#faq" className="hover-underline-animation text-lg">FAQ</a></li> {/* Increased font size */}
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-[#F3F4F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <ul className='flex flex-col space-y-4 text-[#F3F4F5]  ml-9  ' > {/* Increased space between items and changed text color */}
            <li><a href="#about" className="hover-underline-animation text-lg text-[#F3F4F5]">About</a></li> {/* Increased font size and changed text color */}
            <li><a href="#themes" className="hover-underline-animation text-lg text-[#F3F4F5]">Themes</a></li> {/* Increased font size and changed text color */}
            <li><a href="#timeline" className="hover-underline-animation text-lg text-[#F3F4F5]">Timeline</a></li> {/* Increased font size and changed text color */}
            <li><a href="#sponsors" className="hover-underline-animation text-lg text-[#F3F4F5]">Sponsors</a></li> {/* Increased font size and changed text color */}
            <li><a href="#faq" className="hover-underline-animation text-lg text-[#F3F4F5]">FAQ</a></li> {/* Increased font size and changed text color */}
          </ul>
        </div>
      )}
      
      

      {/* Hero Section */}
      <div className="text-center py-8">
      
        
        <h1 className="font-bold max-md:text-[45px] md:text-[100px] font-hubot-sans leading-none text-[#F3F4F5] highlight">CODEATHON</h1>
       
        
        <p className="text-2xl font-semibold mt-4 text-[#F3F4F5]  font-hubot-sans ">HACK IT . BUILD IT . OWN IT</p>
        <p className="text-[#F3F4F5] text-lg mt-4">
          Building Sustainable Solutions for Successful Planet
        </p>
        <div className="flex justify-center mt-8">
          <p className="mb-8 text-[#F3F4F5] font-bold text-2xl">20  Feb, 2025 9:30 AM - 4:00 PM</p>
        </div>
        <button className=" gradient-button text-2xl font-semibold">
            Register now
          </button>

          
          
      </div>
       
 
      {/* Countdown */}
      <div className="flex justify-center mt-8 p-4">
        <Countdown />
      </div>
      <div className="flex justify-center mt-8">
          <img src="/codeathonlight.png" alt="Codeathon Light" className="w-1/2 md:w-1/3 lg:w-1/4" />
        </div> 
    </div>
  );
};

export default Home;