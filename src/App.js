import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

<div className="mx-auto my-auto px-1 sm:px-0 lg:px-4 md:px-0 ">
<div className="mx-auto my-auto px-10">


<div class="flex h-screen">
  <div class="m-auto">
    <div>
      <div className='  mt-9   px-4 py-8 rounded-lg sm:px-16 sm:py-14' >
        <div className=''>
          <h1 className='animate__animated animate__backInDown md:text-9xl md:text-9xl sm:text-6xl text-6xl cedar font-semibold my-auto  text-center  silly'>Pranav Ramesh</h1>
          <div className='animate__animated animate__fadeInUpBig animate__slow mt-4 mx-auto text-center'>
            <a className=" sillyb text-xl" href="https://github.com/laphatize">
              github
            </a>
            <a href="mailto:pranavramesh2022@gmail.com" className=' sillyb  text-xl   ml-4 '>email</a>
            <a href="https://www.linkedin.com/in/pranavramesh2/" className="sillyb text-xl   ml-4">linkedin</a>
          </div>
        </div>
    
      </div>

    </div>
   </div>


</div>

      </div>
    </div>

  );
}

export default App;
