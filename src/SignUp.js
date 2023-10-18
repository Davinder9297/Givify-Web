import { BiLogIn } from 'react-icons/bi'
import {Link} from 'react-router-dom'

export default function Signup() {
    return (<>
        <div className=' w-full h-screen '>
            <div className=" w-[60%] mx-auto  bg-white rounded-lg shadow-xl shadow-cyan-800  xsm:w-[85%]">
                <div className={`justify-around  h-full  flex  mt-16 mb-20`}>
                    <div className='w-[50%]  flex justify-center items-center xsm:hidden'>
                        <img src="img3.png" className='h-full' alt="" />
                    </div>
                    <div className="flex-col w-[50%] text-black bgimg rounded-tr-lg rounded-br-lg h-[100%] py-2 px-7  text-xs space-y-1 xsm:w-[100%] xsm:rounded-lg">
                        <div className="font-mono  font-semibold text-2xl tracking-wide text-center">Sign Up</div>

                        <form action="" method="post" className=''>
                            <div className='text-base font-semibold text-left ml-1 mt-3 text-gray-600'>Enter Organization Name </div>
                            <input type="text"  className='outline outline-1 px-2 rounded-md py-[4px] w-full text-base text-black outline-gray-300 mt-1' placeholder="Enter Organization Name " />
                            {/* <div className='text-base mt-3 font-semibold text-left ml-1'>Re-enter Organization Name </div>
                            <input type="text"  className='outline outline-1 px-2 rounded-md py-[4px] w-full text-base text-black outline-gray-300 mt-1' placeholder="Re-enter Organization Name " /> */}
                            <div className='mt-3 font-semibold text-base text-left ml-1 text-gray-600'>Create Password</div>
                            <input type="password"  className='outline outline-1 rounded-md py-[4px] px-2 w-full text-base text-black outline-gray-300 mt-1' placeholder="Create Password" />
                            <div className='mt-3 font-semibold text-base text-left ml-1 text-gray-600'>Confirm Password</div>
                            <input type="password"  className='outline outline-1 rounded-md py-[4px] px-2 w-full text-base text-black outline-gray-300 mt-1' placeholder="Re-enter Password" />
                            <div className='mt-3 font-semibold text-base text-left ml-1 text-gray-600'>Join as</div>
                            <select name="profession" className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[4px] w-full text-base text-gray-400 outline-gray-300 mt-1">
                                <option className="" value="">--SELECT--</option >
                                <option className="" value="University">University</option >
                                <option className="" value="NGO">NGO</option >
                            </select>

                           
                            <button  className='flex bg-cyan-400 text-black font-semibold w-full justify-center py-[6px] rounded-md mt-5 space-x-1 items-center'><BiLogIn className=' text-lg mt-[2px] text-bluamber-900' /> <div className='flex text-base'> Create Account</div>
                            </button>
                            </form>

                            <div className='flex justify-center text-sm text-black'>

                            <div className='mr-1'>Already have an account?</div>
                            <Link to='/login' className='font-semibold' >Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

// mongodb+srv://davindergiri:davinder@cluster0.ohricxd.mongodb.net/test