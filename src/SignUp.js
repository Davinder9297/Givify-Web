import { BiLogIn } from 'react-icons/bi'
import {Link} from 'react-router-dom'

export default function Signup() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [confirm, setconfirm] = useState('')
    const [organizationname, setorganizationname] = useState('')
    const [type, settype] = useState('')
const submit=(e)=>{
e.preventDefault();
const data={username,password,confirm,organizationname,type};
console.log(data)
}
    return (<>
        <div className=' w-full'>
            <div className=" h-[60%] w-[40%] mx-auto rounded-lg shadow-xl shadow-gray-400  xsm:w-[85%]">
                <div className={`justify-around bg-cover h-full flex bgimg  mt-10 mb-10`}>
                    <div className="flex-col text-black rounded-tr-lg rounded-br-lg h-[100%] py-2 px-3 w-[80%] text-xs space-y-1 xsm:w-[100%] xsm:rounded-lg">
                        <div className="font-mono mt-3 font-semibold text-2xl tracking-wide text-center">Sign Up</div>

                        <form action="" method="post" className=''>
                            <div className='text-base font-semibold text-left ml-1 mt-3 text-gray-600'>Enter Organization Name </div>
                            <input type="text"  className='outline outline-1 px-2 rounded-md py-[6px] w-full text-base text-black outline-gray-300 mt-1' placeholder="Enter Organization Name " />
                            {/* <div className='text-base mt-4 font-semibold text-left ml-1'>Re-enter Organization Name </div>
                            <input type="text"  className='outline outline-1 px-2 rounded-md py-[6px] w-full text-base text-black outline-gray-300 mt-1' placeholder="Re-enter Organization Name " /> */}
                            <div className='mt-4 font-semibold text-base text-left ml-1 text-gray-600'>Create Password</div>
                            <input type="password"  className='outline outline-1 rounded-md py-[6px] px-2 w-full text-base text-black outline-gray-300 mt-1' placeholder="Create Password" />
                            <div className='mt-4 font-semibold text-base text-left ml-1 text-gray-600'>Confirm Password</div>
                            <input type="password"  className='outline outline-1 rounded-md py-[6px] px-2 w-full text-base text-black outline-gray-300 mt-1' placeholder="Re-enter Password" />
                            <div className='mt-4 font-semibold text-base text-left ml-1 text-gray-600'>Join as</div>
                            <select name="profession" className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-400 outline-gray-300 mt-1">
                                <option className="" value="">--SELECT--</option >
                                <option className="" value="University">University</option >
                                <option className="" value="NGO">NGO</option >
                            </select>

                           
                            <button  className='flex bg-cyan-400 text-black font-semibold w-full justify-center py-[6px] rounded-md mt-6 space-x-1 items-center'><BiLogIn className=' text-lg mt-[2px] text-bluamber-900' /> <div className='flex text-base'> Create Account</div>
                            </button>

                            <div className='flex justify-center mt-5 text-sm text-black'>

                            <div className='mr-1'>Already have an account?</div>
                            <Link to='/login' className='font-semibold' >Login</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}