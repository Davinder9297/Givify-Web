import Header from './Header';


export default function Donate_us() {
    return (<>
        {/* <Header/> */}
        <div className=" mt-2 p-2 flex flex-row w-full h-auto overflow-y-hidden ">

            <div className=" py-3 px-3 flex-col h-[100vh] w-full border-l-2 border-black scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-400 bg-slate-800 text-black  overflow-y-scroll overflow-x-auto xsm:hidden">
                <div className=" w-full  h-8 items-center">
                    <div className=" text-3xl text-center font-bold text-white">Filter Locations</div>
                </div>

                <div className=' mt-8 '>
                    <div className='flex-col space-y-2'>

                        <div className=' text-white flex-col w-full space-y-3'>
                            <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 focus:bg-violet-200 focus:text-black bg-fixed text-xl font-medium ">Mohali</button> </div></div>
                            <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 focus:bg-violet-200 focus:text-black text-xl font-medium ">Kharar</button> </div></div>
                            <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 focus:bg-violet-200 focus:text-black text-xl font-medium ">Chandigarh</button> </div></div>
                            <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 focus:bg-violet-200 focus:text-black text-xl font-medium ">Panchkula</button> </div></div>
                            <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 focus:bg-violet-200 focus:text-black text-xl font-medium ">Zirakpur</button> </div></div>
                            <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 focus:bg-violet-200 focus:text-black text-xl font-medium ">Kurali</button> </div></div>
                            <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 focus:bg-violet-200 focus:text-black text-xl font-medium ">Ropar</button> </div></div>
                            <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white rounded-full px-3 pt-3 pb-10 focus:bg-violet-200 focus:text-black text-xl font-medium ">Dera Bassi</button> </div></div>


                        </div>
                    </div>

                </div>

            </div>

            <div className="  w-[75%]  bg-zinc-100 border-b-4 ">
                <div className=" pt-12 text-center text-3xl font-serif font-semibold">Showing Filtered locations </div>

                <div className=" mt-10 px-4 flex justify-center space-x-10">
                    <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5 shadow-2xl hover:scale-95 transition duration-300 ease-in ">
                        <div className=" flex justify-center"><img className=" w-52 h-52" src="work1.png" alt="" /></div>
                        <div className="px-1 mt-3 text-xl font-bold">NGO NAME</div>
                        <div className="px-1">We are an organisation which is working for the well-being of the society and its people.</div>
                    </div>
                    <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5 shadow-2xl hover:scale-95 transition duration-300 ease-in ">
                        <div className=" flex justify-center"><img className=" w-52 h-52" src="work1.png" alt="" /></div>
                        <div className="px-1 mt-3 text-xl font-bold">NGO NAME</div>
                        <div className="px-1">We are an organisation which is working for the well-being of the society and its people.</div>
                    </div>
                    <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5 shadow-2xl hover:scale-95 transition duration-300 ease-in ">
                        <div className=" flex justify-center"><img className=" w-52 h-52" src="work1.png" alt="" /></div>
                        <div className="px-1 mt-3 text-xl font-bold">NGO NAME</div>
                        <div className="px-1">We are an organisation which is working for the well-being of the society and its people.</div>
                    </div>


                </div>
            </div>
        </div>


    </>)
}