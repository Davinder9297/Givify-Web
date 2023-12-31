import React from 'react';
import FloatingText from './FloatingText';
import Footer from './Footer';
import Events from './Events';
import { FaQuestionCircle } from 'react-icons/fa';
import Statistics from './Statistics';
import OurServices from './OurServices';
import Faq from './Faq';
export default function Videoadded() {
    return (

        <div className='w-[100%] min-h-[60vh] h-[60vh] relative z-10 xsm:'>
            <video className='' autoPlay={true} muted loop>
                {/* <source src="https://www.kapwing.com/videos/6523ad13f66e2f63957aefd7" type="video/mp4"/> */}
                <source src="/mainvideo.mp4" type="video/mp4" />

            </video>
            {/* <img width='100%' height='20%' src="/mainvideo.gif" alt="" /> */}
            <div className='floattextclass absolute italic top-32 z-10 w-[75%] mx-auto flex justify-self-center left-40 text-white xsm:top-5 xsm:text-4xl xsm:left-12'>
                <FloatingText text="An Initiative by Everyone... for Everyone..." className='' delay={200} infinite />
            </div>
            <div className='w-[100%] z-0 mt-5 font-p text-4xl xsm:!text-xl xsm:!mt-4'>
                <div>Different Services Provided by Us</div>
            </div>

            <div className='w-[100%] mt-2 xsm:!mt-0'>
                <OurServices />
                <div className='w-[100%] z-0 mt-5 font-p text-4xl mb-3 xsm:text-xl'>Our Events</div>
                <Events />
                <Statistics />
                {/* <div className="flex-col w-full h-auto p-3 xsm:w-[100%]">
                    <div className="flex justify-center w-[100%] z-0 mt-4 font-p text-center text-4xl">
                        <div className='w-full xsm:text-2xl '>FAQs </div>
                        <FaQuestionCircle size={40} className='ml-4 mt-1 text-xl text-center mb-0 flex' />
                    </div>
                    <div className=''><Faq /></div>
                </div> */}
                <div className='xsm:block xsm:bottom-0'><Footer /></div>
                
            </div>
        </div>
    )
}