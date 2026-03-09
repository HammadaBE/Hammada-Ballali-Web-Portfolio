import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 lg:px-12 fixed top-0 left-0 right-0 bg-cyan-100  z-50 ">
      <div className=" flex items-center justify-between">
        
        <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3">

              {/* Optional gradient logo */}
              {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-tech-purple to-tech-teal"></div> */}

              <h1 className="text-2xl font-bold text-white flex items-center space-x-3">
                <span className="px-3 py-1 bg-black/80 rounded">
                  Hammada Ballali
                </span>

                <span className="hidden sm:inline text-cyan-800 font-normal">
                  Software Engineer
                </span>
              </h1>

            </a>
          
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-lg text-cyan-800 hover:text-white transition-colors">About</a>
          <a href="#workExperience" className="text-lg text-cyan-800 hover:text-white transition-colors">Work Experience</a>
          <a href="#academics" className="text-lg text-cyan-800 hover:text-white transition-colors">Academics</a>
          <a href="#research" className="text-lg text-cyan-800 hover:text-white transition-colors">Research</a>
          <a href="#projects" className="text-lg text-cyan-800 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-lg text-cyan-800 hover:text-white transition-colors">Contact</a>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-500/80 backdrop-blur-lg  border-gray-800 py-4 px-6">
          <div className="flex flex-col space-y-4 text-gray-300 hover:text-white py-2 font-bold">
            <a
              href="#about"
              className=""
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#workExperience"
              className=""
              onClick={() => setIsMenuOpen(false)}
            >
              Work Experience
            </a>
            <a
              href="#academics"
              className=""
              onClick={() => setIsMenuOpen(false)}
            >
              Academics
            </a>
            <a
              href="#research"
              className=""
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </a>
            <a
              href="#projects"
              className=""
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className=""
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;