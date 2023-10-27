import { useEffect, useState } from 'react';
import Header from './Header';
 import {GoOrganization} from 'react-icons/go';


export default function Donate_us(){
    const [data, setdata] = useState([])
    useEffect(() => {
        const url = "http://localhost:5000/signup";
        // const url1 = "http://localhost:3000/api/placementevents";
      
      
        const fetchData = async () => {
          try {
           
            let response = await fetch(url);
            let json = await response.json();
            console.log(json);
            setdata(json)
           
          } catch (error) {
            // setshow('hidden')
            // setspin('')
            console.log("error", error);
          }
        };
      
        fetchData();
      }, []);
      const showresult = (e) => {
        e.preventDefault()
        // data.map((curr)=>{
      
        let temp = data.filter((currelem) => {
    
          return currelem.location == e.target.value;
        })
        // if (temp.length == 0) {
        //   setnorecord('')
        // }
        // else {
        //   setnorecord('hidden')
        // }
        setdata(temp)
    
    
      }
    return(<>
    {/* <Header/> */}
    <div className= " mt-2 p-2 flex flex-row w-full h-auto overflow-y-hidden ">

    <div className=" py-3 px-3 flex-col h-[100vh] w-1/6 border-l-2 border-black scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-400 bg-slate-800 text-black  overflow-y-scroll overflow-x-auto xsm:hidden">

    <div className=" w-full mt-2  h-8 items-center">
    <div className=" text-3xl text-center font-bold text-white">Select Organisation</div>
</div>

<div className=' mt-16 '>
<div className='flex-col space-y-2'>

 <div className=' text-white flex-col w-full space-y-3'> 
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black bg-fixed text-xl font-medium ">NGO's </button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Universities</button> </div></div>
  {/* <div className="flex justify-center "><button ><GoOrganization className='m-auto mt-2' size={70}/><div className='mt-2'>Food</div></button></div> */}
  
    </div>
    </div>

   </div>

<div className=" w-full mt-8 h-8 items-center">
    <div className=" text-3xl text-center font-bold text-white">Filter Locations</div>
</div>

<div className=' mt-8 '>
<div className='flex-col space-y-2'>

 <div className=' text-white flex-col w-full space-y-3'> 
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black bg-fixed text-xl font-medium ">Punjab</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Haryana</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Chandigarh</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Delhi</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Rajasthan</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Gujrat</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium ">Himachal Pardesh</button> </div></div>
  <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 hover:bg-violet-200 hover:text-black text-xl font-medium "></button> </div></div>



    </div>
    </div>

   </div>

</div>

<div className="  w-[75%]  bg-zinc-100 border-b-4 ">
<div className=" pt-12 text-center text-3xl font-serif font-semibold">Showing Filtered locations </div>

<div className=" mt-10 px-4 flex flex-row justify-center space-x-10">
  {data.map((da)=>{
    return(
        <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5 shadow-2xl hover:scale-95 transition duration-300 ease-in ">
        <div className=" flex justify-center"><img className=" w-52 h-48 mt-2" src="work1.png" alt="" /></div>
        <div className="px-1 mt-4 text-lg font-bold">NGO NAME</div>
        <div className="px-1 text-sm">We are an organisation which is working for the well-being of the society and its people.</div>
        <button className='bg-cyan-100 w-[90%] mt-5 rounded-md p-1'>
            View 
        </button>
</div>
    )
  })}
    {/* <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5 shadow-2xl hover:scale-95 transition duration-300 ease-in ">
                    <div className=" flex justify-center"><img className=" w-52 h-48 mt-2" src="work1.png" alt="" /></div>
                    <div className="px-1 mt-4 text-lg font-bold">NGO NAME</div>
                    <div className="px-1 text-sm">We are an organisation which is working for the well-being of the society and its people.</div>
                    <button className='bg-cyan-100 w-[90%] mt-5 rounded-md p-1'>
                        View 
                    </button>
    </div>
    <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5 shadow-2xl hover:scale-95 transition duration-300 ease-in ">
                    <div className=" flex justify-center"><img className=" w-52 h-48 mt-2" src="work1.png" alt="" /></div>
                    <div className="px-1 mt-4 text-lg font-bold">NGO NAME</div>
                    <div className="px-1 text-sm">We are an organisation which is working for the well-being of the society and its people.</div>
                    <button className='bg-cyan-100 w-[90%] mt-5 rounded-md p-1'>
                        View 
                    </button>
    </div> */}
    
    </div>
    </div>
</div>
    
    
    </>)
}