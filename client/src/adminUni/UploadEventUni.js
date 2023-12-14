import { useState } from "react";
import SidebarUni from "../adminUni/SidebarUni";
import Cookies from "universal-cookie";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/navbar"
// import TeacherNavbar from "../../components/teacher_navbar"
// import Cookies from "js-cookie";
// import Navbarres from "../../components/navbarres";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function UploadEventUni() {
const [type, settype] = useState('')
    const [title, settitle] = useState('')
    const [doc, setdoc] = useState('')
    const [deadline, setdeadline] = useState('')
    const [disable, setdisable] = useState(true)
    const [opac, setopac] = useState('opacity-50 cursor-not-allowed')
    const [spin, setspin] = useState('hidden')
    const [date, setdate] = useState('')
    const [description, setdescription] = useState('')
    let cookie=new Cookies()
    const changeSelectOptionHandler = (event) => {
        setdisable(false)
        setopac('cursor-pointer')
        // console.log(event.target.value);
    };

const handledoc=async(evnt)=>{
    setspin('')
    setdisable(true)
    setopac('opacity-50 cursor-not-allowed')
    const formdata=new FormData()
          formdata.append("file",evnt.target.files[0]);
          formdata.append("upload_preset","mystore")
        const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
          method:"POST",
          body:formdata,
    
        })
        const res2=await res.json();
        setdoc(res2.url)
        // console.log(res2.url)
        setspin('hidden')
        setdisable(false)
        setopac('cursor-pointer')
}
const upload=async()=>{
    let username=cookie.get('username')
    const data={type,date,title,description,doc,username}
//  console.log(sem,subject)
    const res=await fetch('http://localhost:5000/gallery', {
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

        <div className="flex">
            {/* <Navbarres />
            <TeacherNavbar /> */}
            <div className="w-[20%] ml-0">
            <SidebarUni/></div>
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
            
            <div className="w-[80%]">
                <div className="xsm:text-xl m-auto text-center text-4xl font-semibold p-4 overflow-hidden w-[100%] mb-2">
                    Event Uploading
                </div>

                <div className=" m-auto w-[90%] shadow-md  shadow-zinc-900 h-full xsm:text-lg xsm:w-[90%]">
                    <div>
                        <select value={type} onChange={(e)=>(settype(e.target.value))} name="select1" id="select1" className="xsm:text-base outline cursor-pointer outline-1 w-full outline-gray-300 bg-cyan-300 p-2 text-xl text-center overflow-auto scrollbar-thin scrollbar-thumb-zinc-900">
                            <option className="bg-cyan-100 " value="">-- Event Type --</option >
                            <option className="bg-cyan-100 " value="Environmental Drive">Environmental Drive</option >
                            <option className="bg-cyan-100 " value="Food">Food</option >
                            <option className="bg-cyan-100 " value="Education">Education</option >
                            <option className="bg-cyan-100 " value="Medical">Medical</option >
                            <option className="bg-cyan-100 " value="Clothes">Clothes</option >
                            <option className="bg-cyan-100 " value="Animal">Animal</option >
                            {/* <option className="bg-cyan-100 " value="7th">Seventh Semester</option > */}
                        </select>
                    </div>
                    {/* <div className="w-full ">
                        <select name="select2" value={subject} onChange={(e)=>(setsubject(e.target.value))} id="select2" className="xsm:text-base  outline cursor-pointer outline-1 w-full mx-auto outline-gray-300 bg-zinc-600 text-white p-2 text-xl rounded-2xl text-center overflow-auto scrollbar-thin scrollbar-thumb-zinc-900 mt-4 pl-16">
                        <option className="bg-zinc-400 " >-- SELECT SUBJECT --</option >
                            {options}

                        </select>
                    </div> */}

                    <div className="w-full m-auto space-y-4 ">

                        <div className="border-b-2 border-solid border-zinc-300 mt-3 flex xsm:-mt-5 xsm:flex-col xsm:w-full ">
                            <div className="p-2 w-[50%]  text-center xsm:mx-auto xsm:w-full xsm:text-base xsm:font-semibold">
                                Title
                            </div>
                            <div className="w-[40%] my-auto xsm:mx-auto xsm:w-full xsm:flex xsm:justify-center ">
                            <input type="text" value={title} onChange={(e)=>(settitle(e.target.value))} className="xsm:text-base pl-2 py-2 h-8 w-[85%] bg-zinc-200 form-control"  placeholder="Enter the Title here"/>
                            </div>

                        </div>
                        <div className="border-b-2 mb-26 border-solid border-zinc-300 flex xsm:flex-col xsm:w-full  ">
                            <div className="w-[50%]  text-center xsm:mx-auto xsm:w-full xsm:text-base xsm:font-semibold">
                            Event Date
                            </div>
                            <div className="w-[40%] my-auto xsm:mx-auto xsm:w-full xsm:flex xsm:justify-center ">
                                <input type="date" aria-placeholder="" value={date} onChange={(e)=>(setdate(e.target.value))} className="xsm:text-base pl-2 h-8 w-[85%] bg-zinc-200 form-control" placeholder="Enter the Title here" ></input>
                            </div>

                        </div>
                        <div className="border-b-2 border-solid border-zinc-300 flex xsm:flex-col xsm:w-full  ">
                            <div className="p-3 w-[50%]  text-center xsm:mx-auto xsm:w-full xsm:text-base xsm:font-semibold">
                            Event Description
                            </div>
                            <div className="w-[40%] my-auto xsm:mx-auto xsm:w-full xsm:flex xsm:justify-center ">
                                <textarea type="" aria-placeholder="" value={description} onChange={(e)=>(setdescription(e.target.value))} className="xsm:text-base pl-2 h-8 w-[85%] bg-zinc-200 form-control" placeholder="Enter Descrption" ></textarea>
                            </div>

                        </div>
                        <div className="border-b-2 border-solid border-zinc-300 flex xsm:flex-col xsm:w-full  ">
                        <div className="p-2 w-[50%]  text-center xsm:mx-auto xsm:w-full xsm:text-base xsm:font-semibold">
                                Attach Images
                            </div>
                            <div className="w-[50%] my-auto xsm:mx-auto xsm:w-full xsm:flex xsm:justify-center">
                                <input type="file"  onChange={handledoc} className="xsm:text-base h-8 w-[40%] xsm:w-[65%]"></input>
                                <button className={` p-1 rounded space-x-2 relative top-0 left-0 ${spin}`} type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  {/* <span className="" role="status" aria-hidden="true"></span> */}

</button>
                            </div>
                        </div>
                        <div className="space-x-16 justify-center flex items-center  xsm:flex-col xsm:space-x-0">
                            <button onClick={upload}  disabled={disable} className={`shadow-cyan-400 shadow-inner rounded bg-cyan-800 p-2 mt-9 mb-9 px-5 hover:bg-cyan-700 text-white ${opac} xsm:text-base`}> 
                                
                                Upload</button>
                            {/* <Link className=" cursor-pointer " href={"/teacher/view_submitted_assignment"}><div className="shadow-cyan-400 cursor-pointer shadow-inner rounded bg-cyan-800 p-2 mt-9 mb-9 px-5 hover:bg-cyan-700 text-white xsm:mt-0 xsm:text-base">View Submitted Assignments</div></Link> */}
                            {/* <button className="shadow-cyan-400 shadow-inner rounded bg-cyan-800 p-2 mt-9 mb-9 px-5 hover:bg-cyan-700 hover:text-white ">Cancel</button> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>)
}
