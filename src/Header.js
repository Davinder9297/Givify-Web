import React from "react";
import {Link,BrowserRouter,Routes} from 'react-router-dom'
import Login from "./login";

export default function Header() {
    return (
        <div>
            <div className="bg-neutral-300 flex justify-between shadow-md shadow-neutral-400">
                <div className="">
                    <img className="h-16 ml-5 py-1" src="logo.png" alt="Givify" />
                </div>
                <div className="flex justify-center mr-6 ">
                  

                    <Link to='/about' className="py-5 px-5 hover:bg-neutral-400 cursor-pointer rounded-md hover:text-white mx-3 m-auto">About Us</Link>
                    <Link to='/gallery' className="py-5 px-5 hover:bg-neutral-400 cursor-pointer rounded-md hover:text-white mx-3 m-auto">Gallery</Link>
                    <Link to='/partners' className="py-5 px-5 hover:bg-neutral-400 cursor-pointer rounded-md hover:text-white mx-3 m-auto">Our Partners</Link>
                    <Link to='/contact-us' className="py-5 px-5 hover:bg-neutral-400 cursor-pointer rounded-md hover:text-white mx-3 m-auto">Contact Us</Link>
                  
                   <Link  to='/login' className="py-5 px-5 hover:bg-neutral-400 cursor-pointer rounded-md hover:text-white mx-3 m-auto">Join Us</Link>

                </div>
            </div>
        </div>
    )
}