import { useState } from "react";
import SidebarNGO from "./admin/SidebarNGO";
import Cookies from "universal-cookie";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/navbar"
// import TeacherNavbar from "../../components/teacher_navbar"
// import Cookies from "js-cookie";
// import Navbarres from "../../components/navbarres";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function GenerateReq() {
    const [disable, setdisable] = useState(true)
    const [opac, setopac] = useState('opacity-50 cursor-not-allowed')
    const [spin, setspin] = useState('hidden')
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [type, settype] = useState('')
    const changeSelectOptionHandler = (event) => {
        setdisable(false)
        setopac('cursor-pointer')
        // console.log(event.target.value);
    };
let cookie=new Cookies()
const upload=async()=>{
    // let userid=Cookies.get('login')
    let username=cookie.get('username')
    const data={title,description,username,type}
    const res=await fetch('http://localhost:5000/requirements', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(data)
              })
              let response=await res.json();
              if (response.ok) {
                // const data = await response.json();
               
                toast.success('Details Updated Successfully', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
    
                });
              
                // alert(data.message);
            } 
              setspin('hidden')
              setdisable(false)
              setopac('cursor-pointer')
}
    return (<>

        <div className="">
            {/* <Navbarres />
            <TeacherNavbar /> */}
<ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="flex">
                <div className="w-20%"><SidebarNGO/></div>
                <div className="w-[80%]">
                <div className="xsm:text-xl m-auto text-center text-4xl font-semibold p-4 overflow-hidden w-[100%] mb-2">
                    Requirement Generation
                </div>

                <div className=" m-auto w-[70%] shadow-md  shadow-zinc-900 h-full xsm:text-lg xsm:w-[90%]">
                    <div>
                        <select value={type} onChange={(e)=>(settype(e.target.value))} name="select1" id="select1" className="xsm:text-base outline cursor-pointer outline-1 w-full outline-gray-300 bg-cyan-300 p-2 text-xl text-center overflow-auto scrollbar-thin scrollbar-thumb-zinc-900">
                            <option className="bg-cyan-100 " value="">-- Requirement Type --</option >
                            <option className="bg-cyan-100 " value="Food">Food</option >
                            <option className="bg-cyan-100 " value="Education">Education</option >
                            <option className="bg-cyan-100 " value="Medical">Medical</option >
                            <option className="bg-cyan-100 " value="Clothes">Clothes</option >
                            <option className="bg-cyan-100 " value="Money">Money</option >
                        </select>
                    </div>
                  

                    <div className="w-full m-auto space-y-4 ">

                        <div className="border-b-2 border-solid border-zinc-300 mt-3 flex xsm:-mt-5 xsm:flex-col xsm:w-full ">
                            <div className="p-2 w-[50%]  text-center xsm:mx-auto xsm:w-full xsm:text-base xsm:font-semibold">
                                Title
                            </div>
                            <div className="w-[40%] my-auto xsm:mx-auto xsm:w-full xsm:flex xsm:justify-center ">
                            <input type="text" value={title} onChange={(e)=>(settitle(e.target.value))} className="xsm:text-base pl-2 py-2 h-8 w-[85%] bg-zinc-200 form-control"  placeholder="Enter the Title here"/>
                            </div>

                        </div>
                   
                        <div className="border-b-2 border-solid border-zinc-300 flex xsm:flex-col xsm:w-full  ">
                            <div className="p-3 w-[50%]  text-center xsm:mx-auto xsm:w-full xsm:text-base xsm:font-semibold">
                            Requirement Details
                            </div>
                            <div className="w-[40%] my-auto xsm:mx-auto xsm:w-full xsm:flex xsm:justify-center ">
                                <textarea type="" aria-placeholder="" value={description} onChange={(e)=>(setdescription(e.target.value))} className="xsm:text-base pl-2 h-8 w-[85%] bg-zinc-200 form-control" placeholder="Enter Descrption" ></textarea>
                            </div>

                        </div>
                         {/*<div className="border-b-2 border-solid border-zinc-300 flex xsm:flex-col xsm:w-full  ">
                        <div className="p-2 w-[50%]  text-center xsm:mx-auto xsm:w-full xsm:text-base xsm:font-semibold">
                                Attach Images
                            </div>
                            <div className="w-[50%] my-auto xsm:mx-auto xsm:w-full xsm:flex xsm:justify-center">
                                <input type="file"  onChange={handledoc} className="xsm:text-base h-8 w-[40%] xsm:w-[65%]"></input>
                                <button className={` p-1 rounded space-x-2 relative top-0 left-0 ${spin}`} type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span className="" role="status" aria-hidden="true"></span> 

</button>
                            </div> 
                        </div>*/}
                        <div className="space-x-16 justify-center flex items-center  xsm:flex-col xsm:space-x-0">
                            <button onClick={upload}   className={`shadow-cyan-400 shadow-inner rounded bg-cyan-800 p-2 mt-9 mb-9 px-5 hover:bg-cyan-700 text-white  xsm:text-base`}> 
                                
                                Upload</button>
                            {/* <Link className=" cursor-pointer " href={"/teacher/view_submitted_assignment"}><div className="shadow-cyan-400 cursor-pointer shadow-inner rounded bg-cyan-800 p-2 mt-9 mb-9 px-5 hover:bg-cyan-700 text-white xsm:mt-0 xsm:text-base">View Submitted Assignments</div></Link> */}
                            {/* <button className="shadow-cyan-400 shadow-inner rounded bg-cyan-800 p-2 mt-9 mb-9 px-5 hover:bg-cyan-700 hover:text-white ">Cancel</button> */}
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </div>

    </>)
}
