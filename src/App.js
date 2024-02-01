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
  <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0e1354] to-[#1223a6] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
  </div>

  <div className='grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-x-10 '>
    <div>
      <div className='animate-bounce  mt-9 bg-neutral-900 border-neutral-800 bg-opacity-50 border px-4 py-8 rounded-lg sm:px-16 sm:py-14' style={{ animation: "floatUpDown 3s infinite alternate" }}>
        <div className='flex flex-col sm:flex-row'>
          <h1 className='text-2xl sm:text-3xl font-semibold my-auto text-white text-center sm:text-left'>Pranav Ramesh</h1>
          <div className='mt-4 sm:mt-0 sm:ml-auto flex justify-center sm:justify-start'>
            <a className="text-white" href="https://github.com/laphatize">
              <span className='text-2xl sm:text-3xl fab fa-github mr-4 hover:text-gray-200'></span>
            </a>
            <a href="mailto:pranavramesh2022@gmail.com" className=' fas fa-envelope text-2xl sm:text-3xl hover:text-gray-200 text-white '></a>
            <a href="./resume.pdf" className="hidden fas fa-id-card text-2xl sm:text-3xl hover:text-gray-200 text-white ml-4"></a>
            <a href="https://www.linkedin.com/in/pranavramesh2/" className="fab fa-linkedin text-2xl sm:text-3xl hover:text-gray-200 text-white ml-4"></a>
          </div>
        </div>
        <p className='mt-6 text-white text-base sm:text-lg sm:text-left'>
          I'm currently the CEO of CTFGuide, where we are creating AI powered education tools for cybersecurity. We're backed by Bullmont Capital and have received several grants from Penn State.
       
   
          {!isMobile && (
               <>
               <br /><br />
               At CTFGuide, I am often working on solutions that require experience with: Kubernetes, Node.js, Next.js, TailwindCSS, Python, Java, PostgreSQL, Prisma, Google Cloud, GKE, Vercel, AWS, Typescript, Bash, and much more!
               <br /><br />
               I am also a sophomore at Penn State, where I am studying Human Centered Design & Development. I'm involved with events like HackPSU and have participated in many of the entrepreneurship programs Penn State has to offer.
               <br /><br />
               I previously worked for Knowt, another AI ed-tech company, where I used React.js to create paid features for their platform. I also interned at the Penn State Brandywine Launchbox to create an inventory management system for their makerspace using Next.js, Firebase, and MongoDB.
             </>
          )
        }
          {isMobile && !showMore && <span>...</span>}
          {(isMobile && showMore) && (
            <>
              <br /><br />
              At CTFGuide, I am often working on solutions that require experience with: Kubernetes, Node.js, Next.js, TailwindCSS, Python, Java, PostgreSQL, Prisma, Google Cloud, GKE, Vercel, AWS, Typescript, Bash, and much more!
              <br /><br />
              I am also a sophomore at Penn State, where I am studying Human Centered Design & Development. I'm involved with events like HackPSU and have participated in many of the entrepreneurship programs Penn State has to offer.
              <br /><br />
              I previously worked for Knowt, another AI ed-tech company, where I used React.js to create paid features for their platform. I also interned at the Penn State Brandywine Launchbox to create an inventory management system for their makespace using Next.js, Firebase, and MongoDB.
            </>
          )}
        </p>
        {isMobile && (
          <button 
            className="text-blue-500 underline" 
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
      <br></br> <br></br>

    </div>
        <div>
        <h1 className='text-2xl sm:text-2xl text-white font-semibold mb-2 text-center sm:text-left  mt-10'>Work Experience</h1>
        {/* CTFGuide Experience */}
  <div className="flex flex-col sm:flex-row mb-4 hover:bg-neutral-800 p-4 hover:bg-opacity-75 hover:shadow-xl hover:cursor-pointer" onClick={() => {window.location.href = 'https://ctfguide.com'}}>
    <div className="flex-shrink-0 mb-2 sm:mb-0 sm:mr-4">
      <img className="h-16 w-16 border border-gray-800 bg-black" src="https://ctfguide.com/darkLogo.png" alt="CTFGuide Logo"></img>
    </div>
    <div>
      <h4 className="text-lg text-white font-semibold">CEO, CTFGuide Corporation</h4> 
      <i className='text-white'>Dec 2022 - Present</i>
      <p className="mt-1 text-white">
        Leading CTFGuide with a focus on innovation in AI-powered education for cybersecurity. Secured $200K in funding and spearheading a talented technical team.
      </p>
    </div>
  </div>

  {/* Knowt Experience */}
  <div className="flex flex-col sm:flex-row mb-4 p-4 hover:bg-neutral-800  hover:bg-opacity-75 hover:shadow-xl hover:cursor-pointer" onClick={() => {window.location.href = 'https://knowt.com'}}>
    <div className="flex-shrink-0 mb-2 sm:mb-0 sm:mr-4">
      <img className="h-16 w-16 border border-gray-800 bg-black" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJ16TABLRTLfDNqeXAzx0G0bFEB2NMPXzXFo2msPOWA&s" alt="Knowt Logo"></img>
    </div>
    <div>
      <h4 className="text-lg text-white font-semibold">Software Engineer, Knowt Inc</h4> 
      <i className='text-white'>Feb 2023 - May 2023</i>
      <p className="mt-1 text-white">
        At Knowt, I was instrumental in developing customization flows for user profiles, contributing to the company's growth and enhancing user engagement.
      </p>
    </div>
  </div>

  {/* Penn State University Experience */}
  <div className="flex flex-col sm:flex-row p-4">
    <div className="flex-shrink-0 mb-2 sm:mb-0 sm:mr-4">
      <img className="h-16 w-16 border border-gray-800 bg-black" src="https://m.media-amazon.com/images/I/51B3GNEDEoL.jpg" alt="Penn State Logo"></img>
    </div>
    <div>
      <h4 className="text-lg text-white font-semibold">Software Engineer Intern, Penn State University</h4> 
      <i className='text-white'>Sep 2022 - Dec 2022</i>
      <p className="mt-1 text-white">
        Contributed to designing an innovative inventory management system, enhancing operational effectiveness at the university.
      </p>
    </div>
  </div>

  <h1 className='text-2xl sm:text-2xl text-white font-semibold mb-2 text-center sm:text-left  mt-10'>Education</h1>
    <p className='text-white'>

<span className='font-semibold text-lg'>Penn State College of Information Sciences and Technology</span><br></br>

Bachelor of Science - BS, Human Centered Design & Development <br></br>
<i className='text-white'>May 2026</i>

<br></br><br></br>
<span className='text-blue-600'>Activities and societies:</span> Computing Club, Entrepreneurship Club, and Summer Founders Program 2023


    </p>
<br></br>
        </div>


</div>

      </div>
    </div>

  );
}

export default App;
