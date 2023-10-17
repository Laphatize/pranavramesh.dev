import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="mx-auto my-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto  my-auto max-w-3xl">


    <div
  className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  aria-hidden="true"
>
  <div
    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0e1354] to-[#1223a6] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    style={{
      clipPath:
        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    }}
  ></div>
</div>
      <div className='mt-12 bg-neutral-900 border-neutral-800 bg-opacity-50 border px-16 py-20 rounded-lg'>
<div className='flex '>     
   <h1 className='text-3xl font-semibold my-auto text-white'>Pranav Ramesh</h1>
   <div className='ml-auto '>
    <a className="text-white" href="https://github.com/laphatize">
    <span className='text-3xl fab fa-github mr-4 hover:text-gray-200'></span>
    <a href="https://twitter.com/codernav" className="text-3xl fa-brands fa-x-twitter hover:text-gray-200"></a>   
     </a>

       
     <a href="mailto:pranav@ctfguide.com" className='ml-4 fas fa-envelope text-3xl hover:text-gray-200 text-white '></a>
      <a href="./resume.pdf" class="fas fa-id-card mt-2 text-3xl hover:text-gray-200 text-white ml-4"></a>
    

  
   </div>

</div>
<p className='  mt-6 text-white text-lg'>Hi, I'm a sophomore attending Penn State. Currently, I'm the chief executive officer of <a className='text-blue-500' href="https://ctfguide.com">CTFGuide</a>.</p>

<h1 className='mt-10 text-2xl text-white font-semibold mb-4'>Work Experience</h1>
<div className="flex">
      <div className="mr-4 flex-shrink-0 self-center">
        <img
          className="h-16 w-16 border border-gray-800 bg-black text-gray-300"
          src="https://ctfguide.com/darkLogo.png"
        >
        </img>
      </div>
      <div>
        <h4 className="text-lg text-white font-semibold">CEO, CTFGuide Corporation</h4> <i className='text-white'>2020 - 2023 (Present)</i>
        <p className="mt-1 text-white">
          I am responsible for the development of the platform and the management of the company. CTFGuide is financially backed by <a className="text-blue-500" href="https://www.bullmontcapital.com/">Bullmont Capital</a>.
        </p>
      </div>
    </div>

    <div className="flex mt-4">
      <div className="mr-4 flex-shrink-0 self-center">
        <img
          className="h-16 w-16 border border-gray-800 bg-black text-gray-300"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJ16TABLRTLfDNqeXAzx0G0bFEB2NMPXzXFo2msPOWA&s"
        >
        </img>
      </div>
      <div>
        <h4 className="text-lg text-white font-semibold">Software Engineer, Knowt Inc</h4> <i className='text-white'>Feb 2023 - May 2023</i>
        <p className="mt-1 text-white">
          Knowt is an ed-tech company used by over millions of students. I helped them build KnowtAI, which would ultimately enable the company to raise $2M. I left to focus on building CTFGuide.
        </p>
      </div>
    </div>

    <div className="flex mt-4">
      <div className="mr-4 flex-shrink-0 self-center">
        <img
          className="h-16 w-16 border border-gray-800 bg-black text-gray-300"
          src="https://media.licdn.com/dms/image/C560BAQEFv0lqpE-gsQ/company-logo_100_100/0/1519855919313?e=1704931200&v=beta&t=-PRHsggXy-w-dH1QjnUyTw4tOapxDpnX8WzsIwRFuKU"
        >
        </img>
      </div>
      <div>
        <h4 className="text-lg text-white font-semibold">Software Engineering Intern, Pennsylvania State University</h4> <i className='text-white'>Sep 2022 - Dec 2022</i>
        <p className="mt-1 text-white">
        Launched a member management system for Penn State Launchbox locations.

        </p>
      </div>
    </div>


</div>
    </div>
    </div>


  );
}

export default App;
