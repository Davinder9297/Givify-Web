import { BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import { MdEmail } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'
// import { MdAccessTimeFilled } from 'react-icons/md'

export default function Footer() {
    return (<>
        <div className=" flex justify-around mt-2 relative bgimg bg-no-repeat bg-cover py-3 bottom-0 xsm:block w-full xsm:!py-1">
            <div className="flex-col">
                <div className='flex justify-center'>
                    <img className='h-32 xsm:h-20' src="/logo.png" alt="" />
                </div>
                {/* <div className='text-center font-semibold'> Givify</div> */}
                <div className="flex justify-around text-2xl mt-1 xsm:w-[50%] xsm:mx-auto xsm:mt-0">
                    <button className='text-xl xsm:h-6'><BsFacebook /></button>
                    <button className='text-2xl xsm:h-6'><RiInstagramFill /></button>
                    <button className='text-2xl xsm:h-6'><BsYoutube /></button>
                    <button className='text-xl xsm:h-6'><BsLinkedin /></button>
                </div>
            </div>
            <div className='flex justify-between w-[30%] xsm:p-5 xsm:!mt-0 xsm:w-full'>
                <div className='flex-col xsm:hidden'>
                    <div className='font-semibold text-lg pr-1'>Quick links</div>
                    <ul className='text-sm space-y-1 mt-1'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Gallery</li>
                        {/* <li>Our Partners</li> */}
                        <li>Join Us</li>
                    </ul>
                </div>
                <div className='flex-col w-[60%] xsm:w-full xsm:block'>
                    <div className='font-semibold text-lg xsm:m-auto '>Address</div>
                    <div className='text-sm space-y-1 mt-1 ml-16 xsm:ml-0 xsm:w-full'>
                        <div className='flex'> <div className='text-lg mt-[2px] mr-1 xsm:!text-sm'><MdLocationPin className='text-black' /></div> <div className='ml-3'>S.A.S Nagar, Punjab</div></div>
                        <div className='flex'><IoMdCall className='h-6 text-black' /><div className='ml-5'>8283929792</div></div>
                        <div className='flex'><MdEmail className='h-6 text-black' /><div className='ml-5'> givify@gmail.com</div></div>
                        {/* <div className='flex'><MdAccessTimeFilled className='h-8 text-black'/><div className='ml-2'> Monday to Friday (9:00am-5:00pm) </div></div> */}
                    </div>
                </div>
            </div>
        </div>
    </>)
}