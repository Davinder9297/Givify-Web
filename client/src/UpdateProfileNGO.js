import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
// import SidebarNGO from './';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import SidebarNGO from './admin/SidebarNGO';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie'
export default function UpdateProfileNGO() {
    const [email, setemail] = useState('');
    const [location, setlocation] = useState('');
    const [state, setstate] = useState('Select State');
    const [description, setdescription] = useState('');
    const [phone, setphone] = useState('');
    const [members, setmembers] = useState('');
    const [childrens, setchildrens] = useState('');
    const [logo, setlogo] = useState('');
    

let cookies=new Cookies()

const handlestate=(e)=>{
    setstate(e.target.value)
}
    const logoupload=async (e)=>{
        const formdata=new FormData()
          formdata.append("file",e.target.files[0]);
          formdata.append("upload_preset","mystore")
        const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
          method:"POST",
          body:formdata,
    
        })
      const res2=await res.json();
    //   console.log(res2)
setlogo(res2.url)
// console.log(res2.url)
   return res2.url;
   
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
       const username=cookies.get('username');
        try {
            const formData = { username,logo,email,phone,state,location,description,childrens,members };
            console.log(formData)
            if(logo=="" || email=="" ||  phone=="" ||  state=="" ||  location=="" || description=="" || childrens=="" || members=="" ){
              
                toast.warning('Every input must be filled', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false ,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
    
                });
            }
               
            else{
                
            const response = await fetch('http://localhost:5000/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

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
            }

        
        } catch (error) {
    
            toast.warning('Technical issues', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            });
            // console.error('Error:', error);
            // alert('An error occurred while sending the request');
        }
    };


    return (
        <div className='flex'>
            <div className='w-[20%]'><SidebarNGO /></div>
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
            

            <div className='w-full border-2 border-solid border-red-900 ml-5 flex'>
                {/* sidebar */}
                <div className='w-[45%] border-2 border-solid border-red-600 mr-5 '>
                    <div className="user-info mt-10">
                        <img className=" w-[125px] rounded-full border-2 border-solid border-red-600 m-auto mb-4" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                        <div className='text-xl'>Institution Name</div>
                        <div className='text-left mt-2 p-7 ml-8 space-y-4'>
                            <div className='flex'>
                                <div>Profile Picture : </div>
                                <div className='ml-14'>
                                    <input type='file' accept="image/png, image/gif, image/jpeg" onChange={logoupload}  className=' border-2 border-solid border-gray-400 rounded-md pl-1' />
                                </div>
                            </div>
                            <div className='flex'>
                                <div>Email address : </div>
                                <div className='ml-14'>
                                    <input type='email' value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter your email' className=' border-2 border-solid border-gray-400 rounded-md pl-1' />
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    phone :
                                </div>
                                <div className='ml-24'>
                                    <input type='text' value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder='Enter your email' className=' border-2 border-solid border-gray-400 rounded-md pl-1' />
                                </div>

                            </div>
                            <div className='flex'>
                                <div>
                                    Location :
                                </div>
                                <div className='ml-24'>
                                    <input type='text' value={location} onChange={(e)=>{setlocation(e.target.value)}} placeholder='Enter your email' className=' border-2 border-solid border-gray-400 rounded-md pl-1' />

                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    State :
                                </div>
                                <div className="btn-group ml-20">
                                <select name="state" value={state} onChange={(e) => { setstate(e.target.value) }} className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[4px] w-full text-base text-gray-400 outline-gray-300 mt-1">
                                <option className="" value="">--SELECT--</option >
                                <option className="" value="Assam">Assam</option >
                                <option className="" value="Bihar">Bihar</option >
                                <option className="" value="Chandigarh">Chandigarh</option >
                                <option className="" value="Delhi">Delhi</option >
                                <option className="" value="Goa">Goa</option >
                                <option className="" value="Gujarat">Gujarat</option >
                                <option className="" value="Punjab">Punjab</option >
                            </select>
                                   
                                </div>
                            </div>
                        <div>
                            <div>Description</div>
                            <textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} className='border-2 border-solid border-gray-100 w-[95%] p-2' placeholder='Enter the description'></textarea>
                        </div>

                        </div>
                    </div>
                    {/* <nav className="side-menu">
                        <ul className="nav">
                            <li className="active"><a href="#/"><span className="fa fa-user"></span> Profile</a></li>
                            <li><a href="#/"><span className="fa fa-cog"></span> Settings</a></li>
                            <li><a href="#/"><span className="fa fa-credit-card"></span> Billing</a></li>
                            <li><a href="#/"><span className="fa fa-envelope"></span> Messages</a></li>

                            <li><a href="user-drive.html"><span className="fa fa-th"></span> Drive</a></li >
                            <li><a href="#/"><span className="fa fa-clock-o"></span> Reminders</a></li >
                        </ul >
                    </nav > */}
                </div >

            <div className='border-2 border-solid border-gray-600 w-[50%] p-10'>
                <div>
                <div className='flex space-y-4'>
                                <div>
                                    Total members of Organization :
                                </div>
                                <div className='ml-24'>
                                    <input type='text' value={members} onChange={(e)=>{setmembers(e.target.value)}} placeholder='Members of organization' className=' border-2 border-solid border-gray-400 rounded-md pl-1' />

                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    Total Childrens Served :
                                </div>
                                <div className='ml-24'>
                                    <input type='email' value={childrens} onChange={(e)=>{setchildrens(e.target.value)}} placeholder='Childrens in Orgsnization' className=' border-2 border-solid border-gray-400 rounded-md pl-1' />

                                </div>
                            </div>
                            <button onClick={handlesubmit} className='flex bg-cyan-400 text-black font-semibold w-full justify-center py-[6px] rounded-md mt-6 space-x-1 items-center'>Save
                            </button>
                </div>
            </div>
            </div >


        </div >
    );
}