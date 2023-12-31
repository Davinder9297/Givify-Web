import {GiFoodTruck,GiDress} from 'react-icons/gi'
import {BiBookReader} from 'react-icons/bi';
import {FaHouseMedicalFlag} from 'react-icons/fa6';
import {BsCloudSun,BsCarFrontFill} from 'react-icons/bs';
import {PiDog} from 'react-icons/pi';
export default function OurServices(){
    return(<>
    <div className="h-auto w-full flex-col mt-3 mb-10 xsm:!mt-0">
<div className="flex justify-center"><img src="hr.png" alt="" /></div>
<div className="flex-col  h-auto  w-full ">
  <div className="flex mt-3 justify-evenly">
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md xsm:w-16 xsm:h-16 xsm:!p-0 xsm:text-sm"><button ><GiFoodTruck className='m-auto mt-2 xsm:h-10' size={70}/><div className='mt-2 xsm:!mt-5'>Food</div></button></div>
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md xsm:w-16 xsm:h-16 xsm:!p-0 xsm:text-sm"><button ><BiBookReader className='m-auto mt-2 xsm:h-10' size={70}/><div className='mt-2 xsm:!mt-5'>Education</div></button></div>
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md xsm:w-16 xsm:h-16 xsm:!p-0 xsm:text-sm"><button ><GiDress className='m-auto mt-2 xsm:h-10' size={70}/><div className='mt-2 xsm:!mt-5'>Cloths</div></button></div>
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md xsm:w-16 xsm:h-16 xsm:!p-0 xsm:text-sm"><button ><FaHouseMedicalFlag className='m-auto mt-2 xsm:h-10' size={70}/><div className='mt-2 xsm:!mt-5'>Medical</div></button></div>
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md xsm:w-16 xsm:h-16 xsm:!p-0 xsm:text-sm"><button ><BsCloudSun className='m-auto mt-2 xsm:h-10' size={70}/><div className='mt-2 xsm:!mt-5'>Nature</div></button></div>
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md xsm:w-16 xsm:h-16 xsm:!p-0 xsm:text-sm  xsm:hidden"><button ><PiDog className='m-auto mt-2 xsm:h-10' size={70}/><div className='mt-2 xsm:!mt-5'>Animal</div></button></div>
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md xsm:w-16 xsm:h-16 xsm:!p-0 xsm:text-sm  xsm:hidden"><button ><BsCarFrontFill className='m-auto mt-2 xsm:h-10' size={70}/><div className='mt-2 xsm:!mt-5'>Drives</div></button></div>
   </div>
</div>
     </div> 
    </>)
 }