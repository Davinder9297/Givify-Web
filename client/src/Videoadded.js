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

        <div className='w-[100%] min-h-[60vh] h-[60vh] relative z-10 '>
            <video className='' autoPlay={true} muted loop>
                {/* <source src="https://www.kapwing.com/videos/6523ad13f66e2f63957aefd7" type="video/mp4"/> */}
                <source src="/mainvideo.mp4" type="video/mp4" />

            </video>
            {/* <img width='100%' height='20%' src="/mainvideo.gif" alt="" /> */}
            <div className='floattextclass absolute italic top-32 z-10 w-[75%] mx-auto flex justify-self-center left-40 text-white'>
                <FloatingText text="An Initiative by Everyone... for Everyone..." className='' delay={200} infinite />
            </div>
                <div className='w-[100%] z-0 mt-5 font-p text-4xl'>
                    Different Services Provided by Us
            </div>

            <div className='w-[100%] mt-2'>
                <OurServices />
                <div className='w-[100%] z-0 mt-5 font-p text-4xl mb-3'>Our Events</div>
                <Events />
                <Statistics />
                {/* <div className="flex-col w-[470px] min-h-[260px] h-auto p-3 xsm:w-[100%]">
            <div className="flex ">
                <div className='text-xl font-bold w-[90%] xsm:text-2xl'>FAQs </div>
                <FaQuestionCircle className='ml-1 mt-1 text-xl w-[10%] h-8 flex' />
            </div>
            <div className='text-sm mt-1 xsm:text-xs'>FREQUENTLY ASKED QUESTIONS</div>
            <div className=''><img className='w-40 ml-3' src="hr.png" alt="" /></div>
            <div className="accordion">
                </div> */}
            {/* </div> */}
                {/* <Faq title={title} content={content}/> */}
                <Footer />
            </div>
        </div>
    )
}