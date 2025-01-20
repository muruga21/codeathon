
import "./styles.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import About from "../About/about";
import Organizers from "../Organizers/organizer";
import React, { useState } from 'react';
import Countdown from './Countdown';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/img.png'), url('/bgdesign.png')",
      }}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 backdrop-blur-lg bg-white/10 rounded-lg font-bold">
        <img src="/thiran.png" alt="Logo" className="w-26 h-16" />
        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-8 text-[#F3F4F5]">
            <li><a href="#about" className="hover-underline-animation text-lg">About</a></li>
            <li><a href="#themes" className="hover-underline-animation text-lg">Themes</a></li>
            <li><a href="#timeline" className="hover-underline-animation text-lg">Timeline</a></li>
            <li><a href="#sponsors" className="hover-underline-animation text-lg">Sponsors</a></li>
            <li><a href="#faq" className="hover-underline-animation text-lg">FAQ</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="focus:outline-none">
            <svg className="w-6 h-6 text-[#F3F4F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
  <>
    {/* Backdrop */}
    <div
      className="backdrop"
      onClick={toggleSidebar}
    ></div>

    {/* Sidebar */}
    <div className="sidebar">
      <div className="flex justify-between items-center mb-6">
        <img src="/thiran.png" alt="Logo" className="w-26 h-16" />
        <button onClick={toggleSidebar} className="text-[#F3F4F5] focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <ul>
        <li><a href="#about" className="hover-underline-animation">About Codeathon</a></li>
        <li><a href="#themes" className="hover-underline-animation">Themes</a></li>
        <li><a href="#timeline" className="hover-underline-animation">Timeline</a></li>
        <li><a href="#sponsers" className="hover-underline-animation">Sponsors</a></li>
        <li><a href="#FAQ" className="hover-underline-animation">FAQ</a></li>
      </ul>
    </div>
  </>
)}


      {/* Hero Section */}
      <div className="text-center py-8">
      <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#b47bff] to-[#eba4e0] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none font-hubot-sans highlight">CODEATHON</h1>
        <p className="text-2xl font-semibold mt-4 text-[#F3F4F5] font-hubot-sans">HACK IT . BUILD IT . OWN IT</p>
        <p className="text-[#F3F4F5] text-lg mt-4">Building Sustainable Solutions for Successful Planet</p>
        <div className="flex justify-center mt-8">
          <p className="mb-8 text-[#F3F4F5] font-bold text-2xl">20 Feb, 2025 9:30 AM - 4:00 PM</p>
        </div>
       <a href="https://docs.google.com/forms/d/e/1FAIpQLSchw2TJX7HNnYJlGXx13jlzk9KjDT6NBYXz1gL0PMcQDjBy8g/viewform" target="_blank" rel="noopener noreferrer" className="gradient-button text-lg sm:text-xl md:text-2xl font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
          Register now
        </a>
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
