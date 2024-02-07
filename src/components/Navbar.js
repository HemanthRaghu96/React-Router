import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import All from './All';
import FullStackDevelopement from './FullStackDevelopment'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'

const Navbar = () => {
  return (
    <header>
        <nav>
        
            <ul className='flex justify-center p-3 shadow-md  h-12 w-full'>
                <li className=' font-poppins font-black text-2xl w-60 hover:text-green-600'>R-Router</li>
                <li className='p-1  w-20 text-slate-700 font-bold text-base text-center font-poppins hover:text-green-600 hover:border-b-4 hover:border-green-600 h-16'><Link to={'/'}>ALL</Link></li>
                <li className='p-1  w-64 text-slate-700 font-bold text-base text-center font-poppins hover:text-green-600 hover:border-b-4 hover:border-green-600 h-16'><Link to={'/FullStackDevelopement'}>FULL STACK DEVELOPMENT</Link></li>
                <li className='p-1  w-44 text-slate-700 font-bold text-base text-center font-poppins hover:text-green-600 hover:border-b-4 hover:border-green-600 h-16'><Link to={"/DataScience"}>DATA SCIENCE</Link></li>
                <li className='p-1  w-48 text-slate-700 font-bold text-base text-center font-poppins hover:text-green-600 hover:border-b-4 hover:border-green-600 h-16'><Link to={"/CyberSecurity"}>CYBER SECURITY</Link></li>
                <li className='p-1  w-32 text-slate-700 font-bold text-base text-center font-poppins hover:text-green-600 hover:border-b-4 hover:border-green-600 h-16'><Link to={"/Career"}>CAREER</Link></li>
            </ul>
        </nav>
        
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