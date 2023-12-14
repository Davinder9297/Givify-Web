import React from "react";
import {Link,BrowserRouter,Routes} from 'react-router-dom'
import Login from "./login";
import Sidebar from "./Sidebar";
import Cookies from "universal-cookie";

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
        </div>
    )
}