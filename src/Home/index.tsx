import React, { useState } from 'react';
import Countdown from './Countdown';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg bg-#f3f35-lg p-4 m-8 ">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">THIRAN</div>
        <div className="space-x-4 hidden md:flex">
          <ul className='flex space-x-4'>
          <li><a href="#about" className="hover:underline hover:text-blue-500">About</a></li>
            <li><a href="#themes" className="hover:underline hover:text-blue-500">Themes</a></li>
            <li><a href="#timeline" className="hover:underline hover:text-blue-500">Timeline</a></li>
            <li><a href="#sponsors" className="hover:underline hover:text-blue-500">Sponsors</a></li>
            <li><a href="#faq" className="hover:underline hover:text-blue-500">FAQ</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <ul className='flex flex-col space-y-4'>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#themes" className="hover:underline">Themes</a></li>
            <li><a href="#timeline" className="hover:underline">Timeline</a></li>
            <li><a href="#sponsors" className="hover:underline">Sponsors</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333]">CODEATHON</h1>
        <p className="text-2xl font-semibold mt-4 text-[#333333]">HACK IT . BUILD IT . OWN IT</p>
        <p className="text-[#333333] text-lg mt-4">
          Building Sustainable Solutions for Successful Planet
        </p>
        <div className="flex justify-center mt-8">
          <p className="mb-8 ">20  Feb, 2025 9:30 AM - 4:00 PM</p>
        </div>
        <button className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600">
          Register now
        </button>
      </div>

      {/* Countdown */}
      <div className="flex justify-center mt-8 p-14">
        <Countdown />
      </div>
    </div>
  );
};

export default Home;