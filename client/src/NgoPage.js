
import { useEffect, useState } from 'react';
import { MdPeopleAlt } from 'react-icons/md'
import { useSearchParams } from 'react-router-dom';
export default function NgoPage() {
    const [searchParams, setSearchParams] = useSearchParams()
const [alldata, setalldata] = useState([])
    useEffect(() => {

    
        const fetchData = async () => {
          try {
    // console.log(searchParams.get('id'))
    let id=searchParams.get('id')
   
            const response = await fetch('https://givify-yce1.onrender.com/singlepage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id}),
            });
    // console.log(response)
    if(response.ok){
        const data=await response.json()
        // console.log(data)
setalldata(data)
    }
    
          } catch (error) {
 
            console.log("error", error);
          }
        };
    
        fetchData();
      }, []);
    return (<>
        <div className=" flex justify-around mt-2">
            <div className="w-full mt-3">
                <div className="text-4xl">{alldata.organizationname}</div>
                {/* main box for content */}
                <div className="mt-4 flex justify-between">
                    {/* LHS */}
                    <div className="w-[30%] bgimg bg-cover">
                        <div className="flex justify-center  ">
                            <img src={alldata.logo?alldata.logo:'img1.png'} alt='uni' height={40} width='100%' className="shadow-md shadow-gray-400" />
                        </div>
                        <div className="mt-4 text-left p-3 font-semibold">
                            <div className=''>E-mail Address : {alldata.email}</div>
                            <div>Joining Date : {alldata.date}</div>
                            <div className="">Description : <div className="text-sm">{alldata.description}</div></div>
                            <div>Location : {alldata.location}</div>
                        </div>

                    </div>


                    {/* RHS */}
                    <div className="w-[68%] h-[81vh] scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-400 overflow-y-auto ">
                        <div className="w-[98%] m-auto flex h-[170px] justify-between mb-5">
                            <div className="w-[24%] rounded-md shadow-md shadow-gray-400">
                                <div className='m-auto p-2 '>
                                    <MdPeopleAlt size={80} className='flex justify-center border-2 border-solid border-red-800 m-auto mb-2 mt-3'/>
                                </div>
                                <div>
                                    Current Members
                                </div>
                            </div>
                            <div className="w-[24%] rounded-md shadow-md shadow-gray-400">
                                <div className='m-auto p-2 '>
                                    <MdPeopleAlt size={80} className='flex justify-center border-2 border-solid border-red-800 m-auto mb-2 mt-3'/>
                                </div>
                                <div>
                                    Number of Requirements Raised
                                </div>
                            </div>
                            <div className="w-[24%] rounded-md shadow-md shadow-gray-400">
                                <div className='m-auto p-2 '>
                                    <MdPeopleAlt size={80} className='flex justify-center border-2 border-solid border-red-800 m-auto mb-2 mt-3'/>
                                </div>
                                <div>
                                    Number of Requirements Recieved
                                </div>
                            </div>
                            <div className="w-[24%] rounded-md shadow-md shadow-gray-400">
                                <div className='m-auto p-2 '>
                                    <MdPeopleAlt size={80} className='flex justify-center border-2 border-solid border-red-800 m-auto mb-2 mt-3'/>
                                </div>
                                <div>
                                    Raise a Donation
                                </div>
                            </div>
                        </div>
                        <div className='font-semibold text-3xl font-p mb-3'>Our Requirements</div>

                        <div className=" flex h-auto  justify-around flex-wrap ">
                         <div className="flex-col border-2 w-[320px] shadow-xl rounded-lg  hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                            <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                            <div className="flex justify-between">
                                 <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                                <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                            </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>

                         <div className="flex-col  border-2 w-[320px] shadow-xl rounded-lg  hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                            <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                            <div className="flex justify-between">
                                 <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                                <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                            </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>
                         <div className="flex-col border-2 w-[320px] shadow-xl rounded-lg  hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                            <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                            <div className="flex justify-between">
                                 <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                                <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                            </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>
                         <div className="flex-col border-2 w-[320px] shadow-xl rounded-lg  hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                            <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                            <div className="flex justify-between">
                                 <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                                <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                            </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>
                
                
                </div>
                   
                    </div>

                </div>

            </div>
        </div>
    </>)
}