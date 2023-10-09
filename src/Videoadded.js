import React from 'react';
export default function Videoadded()
{
    return(
        <div className='w-[100%] border-2 border-solid border-red-800 min-h-[60vh] '>
            <video autoPlay={true} muted loop>
  {/* <source src="https://www.kapwing.com/videos/6523ad13f66e2f63957aefd7" type="video/mp4"/> */}
  <source src="/mainvideo.mp4" type="video/mp4"/>

</video>
{/* <img width='100%' height='20%' src="/mainvideo.gif" alt="" /> */}
        </div>
    )
}