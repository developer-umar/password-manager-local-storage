// import React from 'react'


// function Navbar() {
//     return (
//         <nav>
//             <div className="navbar  bg-cyan-800  flex justify-between items-center text-white px-5 py-5 h-28">

//                 <div className="logo  text-2xl">
//                     <span className='text-4xl text-red-300 decoration-2 font-serif font-bold'>E</span >nigma<span className=' font-bold text-4xl text-red-300 decoration-2 font-serif'>V</span>ault
                  
//                    <lord-icon
//     src="https://cdn.lordicon.com/khheayfj.json"
//     trigger="hover"
//     stroke="bold"
    
//    >
// </lord-icon>
                   
//             </div>
               
//                      <a  className="hover:text-black  font-bold"href='https://github.com/' target='_blank' ><img  className= "invert  w-12 hover:invert-0 mr-12" src='icons/github-mark.png'>
//                     </img>GitHub</a>

//                            </div>
//         </nav>
//     )
// }

// export default Navbar
// chat gpt 




// chat gpt code 

import React from 'react';

function Navbar() {
  return (
    <nav className="bg-cyan-800 p-4 md:p-6 lg:p-8">
      <div className="flex justify-between items-center">
        <div className="logo text-2xl flex items-center">
          <span className="text-4xl text-red-300 font-serif font-bold">E</span>
          nigma
          <span className="text-4xl text-red-300 font-serif font-bold">V</span>ault
          <lord-icon
            src="https://cdn.lordicon.com/khheayfj.json"
            trigger="hover"
            stroke="bold"
          ></lord-icon>
        </div>

        <a
          className="hover:text-black font-bold text-sm md:text-lg"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="invert w-8 md:w-10 lg:w-12 hover:invert-0"
            src="icons/github-mark.png"
            alt="GitHub"
          />
          GitHub
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
