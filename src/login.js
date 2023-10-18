import { BiLogIn } from 'react-icons/bi'
import {Link} from 'react-router-dom'
// import Navbarres from '../components/navbarres'
// import { useState } from 'react' 

// import { ToastContainer, toast } from 'react-toastify';
// import cookie from 'js-cookie'
// import './toast.css';
// import {toast} from 'react-toastify'; 

// import 'react-toastify/dist/ReactToastify.css';
// import Cookies from 'js-cookie';
// import { useNavigate, useRoutes } from 'react-router-dom';
// toast.configure()

export default function Login() {
    // const [user, setuser] = useState()
    // const [password, setpassword] = useState()
    // const [profession, setprofession] = useState('')
    // const [spin, setspin] = useState('hidden')
    // const [show, setshow] = useState('')
    // // let router = useRoutes()
    // let navigate=useNavigate()

    // const authenticate = async (e) => {
    //     e.preventDefault();
    //     const data = { user, password, profession }
    //     if (user == "davinder" && password == "davinder" && profession == "") {
    //         // router.push('/admin')
    //         navigate('/')
            
    //     }
    //     // console.log(profession,user,password);
    //     setspin('')
    //     setshow('opacity-50')
    //     const res = await fetch('http://localhost:3000/api/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     })
    //     let response = await res.json();
    //     setspin('hidden')
    //     setshow('')
    //     if (response.error) {
    //         toast.warning('Invaild Credentials', {
    //             position: "top-right",
    //             autoClose: 1000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,

    //         });
    //         // console.log("error");
    //     }
    //     else {
    //         Cookies.set('login', user)
    //         if (profession == "Student") {
    //             // Cookies.set('rollno',)
    //             router.push('/student')
    //         }
    //         else if (profession == "Faculty") {
    //             router.push('/teacher')
    //         }
    //         else if (profession == "Club Manager") {
    //             router.push('/club_management')
    //         }
    //         else if (profession == "Librarian") {
    //             router.push('/library_management')
    //         }
    //         else if (profession == "Placement Manager") {
    //             router.push('/placement_management')
    //         }
    //         else if (profession == "Student Manager") {
    //             router.push('/student_management')
    //         }
    //         toast.success('Login successfully', {
    //             position: "top-right",
    //             autoClose: 1000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,

    //         });
    //         // setspinner('w-full flex justify-center mt-3');
    //         //   setTimeout(() => {
    //         //     let cok=cookie.get('oldpath');
    //         //     Router.push(cok);
    //         //     setspinner('hidden')
    //         //   }, 3000);
    //         cookie.set('token', response.token);
    //     }
    //     //    setuser('')
    //     //    setpassword('')
    //     //    setprofession('')
    // }

    return (<>
        <div className=' w-full h-screen'>
            {/* <Navbarres /> */}
            {/* <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}
            <div className=" h-[60%] w-[50%] mx-auto  bg-white rounded-lg shadow-xl shadow-cyan-800  xsm:w-[85%]">
                {/* <div className={`text-center  justify-center items-center h-full w-full flex absolute top-0 left-0 z-10  `}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> */}
                <div className={`justify-around  h-full  flex  mt-20`}>
                    <div className='w-[50%]  flex justify-center items-center xsm:hidden'>
                        <img src="img3.png" className='h-full' alt="" />
                    </div>
                    <div className="flex-col w-[50%] text-black bgimg rounded-tr-lg rounded-br-lg h-[100%] py-2 px-3  text-xs space-y-1 xsm:w-[100%] xsm:rounded-lg">
                        <div className="font-mono  font-semibold text-2xl tracking-wide text-center">Login</div>

                        <form action="" method="post">
                            <div className='text-base  font-semibold text-left ml-1'>User Id</div>
                            <input type="text"  className='outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-amber-800 outline-gray-300 mt-1' placeholder="Enter User Id" />
                            <div className='mt-2   font-semibold text-base text-left ml-1'>Password</div>
                            <input type="password"  className='outline outline-1 rounded-sm py-[6px] px-2 w-full text-base text-amber-800 outline-gray-300 mt-1' placeholder="Enter Password" />

                           
                            <button  className='flex bgimg bg-no-repeat bg-cover text-black font-semibold w-full justify-center py-[6px] rounded-md mt-6 space-x-1 items-center'><BiLogIn className=' text-lg mt-[2px] text-bluamber-900' /> <div className='flex text-base'> Login</div>
                            </button>
                        </form>
                        <div className='flex justify-center pt-9  text-sm'>

                            <div className='mr-1'>Don't have an account?</div>
                            <Link to='/Signup' className='font-semibold' >Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

// mongodb+srv://davindergiri:davinder@cluster0.ohricxd.mongodb.net/test