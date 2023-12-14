import React from "react";
import {Link,BrowserRouter,Routes} from 'react-router-dom'
import Login from "./login";
import Sidebar from "./Sidebar";
import Cookies from "universal-cookie";
import { RxHamburgerMenu } from 'react-icons/rx';


export default function Header() {
    // const [login, setlogin] = useState(second)
    let cookie=new Cookies()
    // console.log(cookie.get('login'))
    let yes=cookie.get('login')
    return (
        
        <div>

            <div className="flex justify-between shadow-md shadow-neutral-400 xsm:text-xs xsm:h-16">
                {/* <div className=""> */}
                    <Link to='/'><img className="xsm:ml-1 h-16 ml-5 py-1 xsm:h-11 xsm:mt-2" src="logo.png" alt="Givify" /></Link>
                {/* </div> */}
                <div className="flex justify-center mr-1">
                  

                    <Link to='/about' className="xsm:!px-1 py-3 px-3 hover:border-solid hover:border-b-4 xsm:hover:border-b-2 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md xsm:m-0  m-auto  nobg">About Us</Link>
                    <Link to='/gallery' className="xsm:!px-1 py-3 px-3 hover:border-solid hover:border-b-4 xsm:hover:border-b-2 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md xsm:m-0  m-auto nobg">Gallery</Link>
                    <Link to='/donate_us' className="xsm:!px-1 py-3 px-3 hover:border-solid hover:border-b-4 xsm:hover:border-b-2 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md xsm:m-0  m-auto nobg">Donate Us</Link>
                    <Link to='/contact-us' className="xsm:!px-1 py-3 px-3 hover:border-solid hover:border-b-4 xsm:hover:border-b-2 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md xsm:m-0  m-auto nobg">Contact Us</Link>
                    <Link to='/UniAdmin' className="xsm:!px-1 py-3 px-3 hover:border-solid hover:border-b-4 xsm:hover:border-b-2 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md xsm:m-0  m-auto nobg">Uni</Link>
                    {/* <Link to='/Ngo_page' className="xsm:!px-1 py-3 px-3 hover:border-solid hover:border-b-4 xsm:hover:border-b-2 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md xsm:m-0  m-auto nobg">Ngo Page</Link>                   */}
                    {/* <Link to='/Adminpage' className="xsm:!px-1 py-3 px-3 hover:border-solid hover:border-b-4 xsm:hover:border-b-2 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md xsm:m-0  m-auto nobg">Admin</Link>                   */}
                   {yes?<Link  to='/Adminpage' className="xsm:!px-1 py-3 px-3 hover:border-solid hover:border-b-4 xsm:hover:border-b-2 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md xsm:m-0  m-auto nobg">Admin</Link>:<Link  to='/login' className="xsm:!px-1 py-3 px-3 hover:border-solid hover:border-b-4 xsm:hover:border-b-2 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md xsm:m-0  m-auto nobg">Join Us</Link>}

                </div>
            </div>

            {/* <nav className="navbar navbar-expand-lg justify-around items-center font-serif text-md font-semibold shadow-md shadow-neutral-400 hidden xsm:block">
      <div className="container-fluid">
      <div className="">
                    <Link to='/'><img className="h-12 ml-1 py-1 " src="logo.png" alt="Givify" /></Link>
                </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
         <RxHamburgerMenu></RxHamburgerMenu>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ">
            <li className="nav-item mb-1 flex">  <div className="xsm:pl-1 text-sm"><Link to='/about' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto nobg">About Us</Link></div>
            </li>
            <li className="nav-item mb-1 flex"> <div className=" xsm:pl-1 text-sm"><Link to='/gallery' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto  nobg">Gallery</Link></div>
            </li>
            <li className="nav-item mb-1 flex">  <div className="xsm:pl-1 text-sm"><Link to='/donate_us' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto  nobg">Donate Us</Link> </div>
            </li>
            <li className="nav-item mb-1 flex">  <div className="xsm:pl-1 text-sm"> <Link to='/contact-us' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto nobg">Contact Us</Link> </div>
            </li>
            <li className="nav-item mb-1 flex">  <div className="xsm:pl-1 text-sm"> <Link to='/Ngo_page' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto nobg">Ngo Page</Link> </div>
            </li>
            <li className="nav-item mb-1 flex">  <div className="xsm:pl-1 text-sm"> <Link to='/Adminpage' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto nobg">Admin</Link> </div>
            </li> */}
           {/* {yes?<Sidebar/>: <Link  to='/login' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto nobg">Join Us</Link> */}
          {/* </ul>
        </div>
      </div>
    </nav> */}

    
        </div>
    )
}