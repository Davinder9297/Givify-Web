import React from "react";

export default function Header() {
    return (
        <div>
            <div className="bg-neutral-300 flex justify-between shadow-md shadow-neutral-400">
                <div className="">
                    <img className="h-16 ml-5 py-1" src="logo.png" alt="Givify" />
                </div>
                <div className="flex justify-center mr-6 ">
                    <div className="py-3 px-5 hover:bg-neutral-400 cursor-pointer rounded-md hover:text-white mx-3 m-auto">About Us</div>
                    <div className="py-3 px-5 hover:bg-neutral-400 cursor-pointer rounded-md hover:text-white mx-3 m-auto">Gallery</div>
                    <div className="py-3 px-5 hover:bg-neutral-400 cursor-pointer rounded-md hover:text-white mx-3 m-auto">Our Partners</div>
                    <div className="py-3 px-5 hover:bg-neutral-400 cursor-pointer rounded-md hover:text-white mx-3 m-auto">Contact Us</div>
                    <div className="py-3 px-5 hover:bg-neutral-400 cursor-pointer rounded-md hover:text-white mx-3 m-auto">Join Us</div>
                </div>
            </div>
        </div>
    )
}