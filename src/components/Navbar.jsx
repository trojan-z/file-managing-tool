import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (

    <div className='bg-[#1F2835]  mx-auto p-3 flex gap-[50px] items-center justify-center rounded-[0px] lg:rounded-2xl text-[18px]'>
        <NavLink to={"/"}>Home
        </NavLink>

        <NavLink to={"/about"}>About
        </NavLink>

        <NavLink to={"/policy"}>Policy
        </NavLink>

        <div className=' flex items-center justify-center gap-4 text-[16px] ml-[0px] lg:ml-[100px]'>
            <button className='btn px-3 py-1 bg-[#579FFD] flex gap-3 rounded-2xl'>
                <a className="flex gap-3 items-center justify-center" href="https://github.com/trojan-z/file-managing-tool">
                     GitHub Repo 
                     <span><FaGithub /> </span>
                </a> 
            </button>
        </div>
    </div>
  )
}

export default Navbar
