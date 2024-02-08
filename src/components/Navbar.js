import React, { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import All from './All';
import FullStackDevelopement from './FullStackDevelopment'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'
import { FaBars } from 'react-icons/fa'; 

const Navbar = () => {

  // State variable for menu open and close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Handling button click for menu open and close
  const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
        <nav >
        <div className="flex justify-between md:hidden shadow-md">
          <h1 className="p-4 font-poppins font-black text-xl mx-6">R-Router</h1>
          <button onClick={toggleMenu} className="p-4">
            <FaBars />
          </button>
        </div>
        {/* List of menu options displayed in header */}
            <ul className={`md:flex flex-col md:flex-row md:justify-center p-3 shadow-md  md:h-12 w-full ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li className=' hidden md:block p-1  md:w-44 text-slate-700 font-black text-xl text-left md:text-center  font-poppins hover:text-green-600  '>R-Router</li>
                <li className='p-1  md:w-16 text-slate-700 font-bold text-base text-left md:text-center hover:bg-slate-100 md:hover:bg-transparent font-poppins hover:text-green-600 md:hover:border-b-4 md:hover:border-green-600 md:h-16'><Link to={'/'}>ALL</Link></li>
                <li className='p-1  md:w-80 lg:w-64 text-slate-700 font-bold text-base text-left md:text-center hover:bg-slate-100 md:hover:bg-transparent font-poppins hover:text-green-600 md:hover:border-b-4 md:hover:border-green-600 md:h-16'><Link to={'/FullStackDevelopement'}>FULL STACK DEVELOPMENT</Link></li>
                <li className='p-1  md:w-48 lg:w-44 text-slate-700 font-bold text-base text-left md:text-center hover:bg-slate-100 md:hover:bg-transparent font-poppins hover:text-green-600 md:hover:border-b-4 md:hover:border-green-600 md:h-16'><Link to={"/DataScience"}>DATA SCIENCE</Link></li>
                <li className='p-1   md:w-52 lg:w-48 text-slate-700 font-bold text-base text-left md:text-center hover:bg-slate-100 md:hover:bg-transparent font-poppins hover:text-green-600 md:hover:border-b-4 md:hover:border-green-600 md:h-16'><Link to={"/CyberSecurity"}>CYBER SECURITY</Link></li>
                <li className='p-1  md:w-32 text-slate-700 font-bold text-base text-left md:text-center hover:bg-slate-100 md:hover:bg-transparent font-poppins hover:text-green-600 md:hover:border-b-4 md:hover:border-green-600 md:h-16'><Link to={"/Career"}>CAREER</Link></li>
            </ul>
        </nav>
      
      {/* Giving all Route to  required path and required elements to display when clicked */}
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/FullStackDevelopement" element={<FullStackDevelopement />} />
        <Route path="/DataScience" element={<DataScience />} />
        <Route path="/CyberSecurity" element={<CyberSecurity />} />
        <Route path="/Career" element={<Career />} />
      </Routes>
    </header>
  )
}

export default Navbar