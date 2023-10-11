import React from 'react';
import FloatingText from './FloatingText';
import Footer from './Footer';
import Events from './Events';
import Statistics from './Statistics';
import OurServices from './OurServices';
export default function Videoadded() {
    return (

        <div className='w-[100%] min-h-[60vh] h-[60vh] relative z-10 '>
            <video className='opacity-80' autoPlay={true} muted loop>
                {/* <source src="https://www.kapwing.com/videos/6523ad13f66e2f63957aefd7" type="video/mp4"/> */}
                <source src="/mainvideo.mp4" type="video/mp4" />

            </video>
            {/* <img width='100%' height='20%' src="/mainvideo.gif" alt="" /> */}
            <div className='floattextclass absolute italic top-32 z-10 w-[75%] mx-auto flex justify-self-center left-40'>
                <FloatingText text="An Initiative by Everyone... for Everyone..." delay={200} infinite />
            </div>
                <div className='w-[100%] z-0 mt-5 font-p text-4xl'>
                    Different Services Provided by Us
            </div>

            <div className='w-[100%] mt-5'>
                <OurServices />
                <Events />
                <Statistics />
                <Footer />
            </div>
        </div>
    )
}