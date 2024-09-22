// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';        // for notification 
// import { v4 as uuidv4 } from 'uuid';       //uuid to generate 
// import 'react-toastify/dist/ReactToastify.css';
// import { useRef, useState, useEffect } from 'react';

// function Manager() {
//   const ref = useRef()
//   const pass_ref = useRef()
//   const [form, setform] = useState({ site: "", username: "", password: "" })     // form ek object hai 
//   const [passwordArray, setpasswordArray] = useState([]);
//   //   jb  website load hoye to agar password ek bhi  hai to  password ko json.parse kardo yaani ki text form me 
//   //nhi hai to iska matlab  khaali hai array  

//   useEffect(() => {
//     let passwords = localStorage.getItem("passwords")

//     if (passwords) {
//       setpasswordArray(JSON.parse(passwords))
//       console.log(passwords);


//     }

//   }, [])


//   const show_password = () => {

//     if (ref.current.src.includes("icons/eye_cross.png")) {
//       ref.current.src = "icons/open_eye.png";              //eye open then type = text matlan password dekhega 
//       pass_ref.current.type = "text";


//       //agar aankh band hai to khol do ar khuli hai to band kardo
//     }
//     else {
//       ref.current.src = "icons/eye_cross.png";              //eye band hai to type = password means nhi dikhega 
//       pass_ref.current.type = "password";

//     }


//   }

//   // save password
//   const save_password = () => {

//   if(form.site.length >=3 && form.username.length >=3 && form.password.length >=3 ){
    
//     setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);    //wo array jo ham har ek baar display karenge 
//     localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
    

//   } 
//   else{
//     alert("incorrect format");

//   }
  


//   }
//   // deleet password 

//   const delete_password = (id) => {
//   let c= confirm("Do you really want to delete password ");
    
//    if(c){
//     // console.log("deleting passwor with id " + id);
//     setpasswordArray(passwordArray.filter(item => item.id !== id));       //filter function returns the array that meets the condition 
//     //local storage me save karo fir 
//     localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
 

//    }


//   }
//   // edit password

//   const edit_password = (id) => {
//     // console.log("editing password  with  id " + id);
//     setform(passwordArray.filter(i => i.id === id)[0]);
//     setpasswordArray(passwordArray.filter(item => item.id !== id))
    



//   }


//   // 
//   const handle_change = (e) => {
//     setform({ ...form, [e.target.name]: e.target.value });     //site = site name username = name ; password = password 

//   }

//   // copy text function 

//   const copy_text = (text) => {

//     // alert(" copied ");
  



//     navigator.clipboard.writeText(text);     //ye copy kar leta hai 


//   }


//   // 
//   return (
//     // for notification 

//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       // transition="Bounce"
//       />
//       {/* Same as */}
//       <ToastContainer />




//       <div className='w-full min-h-[77vh]'>
//         <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_120%)]"></div>

//         <div className=" py-5 px-4 container   ">
//           <div className=' flex   h-20    gap-4  items-center  text-xl'>
//             <input className=' box-1  w-full h-10 rounded-xl border border-gray-400  p-2 font-serif  ' type='text' name='site' placeholder='Enter web URL  ' id='site' value={form.site} onChange={handle_change}></input>



//             <div className=' flex gap-5 justify-end items-center ml-44 text-l'>
//               <input className=' h-10 rounded-xl w-48  border border-gray-400 p-2 font-serif' type='text' name='username' placeholder=' Username' id='username' value={form.username} onChange={handle_change} ></input>


//               <div className="relative">
//                 <input ref={pass_ref} className=' h-10 rounded-xl w-48 border border-gray-400 font-serif p-2' type='password' name='password' placeholder='Password' id='password' value={form.password} onChange={handle_change} ></input>
//                 <span className='absolute  right-[1px] top-[4px] cursor-pointer' onClick={show_password}>

//                   <img ref={ref} className='p-1' width={30} src='icons/eye_cross.png' alt="eye" />

//                 </span>

//               </div>

//             </div>
//             <button className='font-bold  size-auto flex p-1 bg-slate-300 rounded-2xl text-lg hover:bg-slate-200 ' onClick={save_password}>

//               Add<lord-icon
//                 src="https://cdn.lordicon.com/jgnvfzqg.json"
//                 trigger="hover"
//               >
//               </lord-icon>
//             </button>


//           </div>
//         </div>
//         {/* passwords table   from tailwinf css */}

//         <div className="passwords">
//           <h2 className=' text-2xl py-4 ml-60  font-bold'>Your passwords</h2>

//           {passwordArray.length === 0 && <div className='ml-60 '> no passwords to show </div>}

//           {passwordArray.length != 0 && <table className="table  w-2/3 ml-60 rounded-md overflow-hidden">
//             <thead className=' bg-cyan-800 text-white  '>
//               <tr>
//                 <th className='py-2'>Site</th>
//                 <th className='py-2' >Username</th>
//                 <th className='py-2'>Password</th>
//                 <th className='py-2 w-3'>Actions</th>
//               </tr>
//             </thead>



//             {/* ye display karega  password aerray ko */}

//             <tbody className='bg-slate-200'>
//               {passwordArray.map((item, index) => {
//                 return <tr key={index}>
//                   <td className='text-center p-4 w-40 '><a href={item.site} target='_blank'>{item.site}</a> <img className="copy cursor-pointer" src='icons/copy.gif' onClick={() => copy_text(item.site)} ></img></td>
//                   <td className='text-center py-2 w-40 '>{item.username}<img className="copy cursor-pointer" src='icons/copy.gif' onClick={() => copy_text(item.username)} ></img></td>
//                   <td className='text-center py-2  w-40'>{item.password}<img className="copy cursor-pointer" src='icons/copy.gif' onClick={() => copy_text(item.password)} ></img></td>


//                   {/* delete  */}

//                   <td className='w-4 ' >
//                     <button className=' delete button ' onClick={() => { delete_password(item.id) }}>
//                       <script src="https://cdn.lordicon.com/lordicon.js"></script>
//                       <lord-icon
//                         style={{ "with": "24px", "height": "20px" }}
//                         src="https://cdn.lordicon.com/skkahier.json"
//                         trigger="hover"
//                         colors="primary:#242424"
//                       >
//                       </lord-icon>

//                     </button>


//                     <button className='edit' onClick={() => { edit_password(item.id) }}><img src='icons/edit-2.gif' className='edit' /></button>
//                   </td>





//                 </tr>
//               })}





//             </tbody>
//           </table>}

//         </div>



//       </div>
//     </>

//   )
// }

// export default Manager


//chat gpt 



import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';



function Manager() {
  const ref = useRef();
  const pass_ref = useRef();
  const [form, setform] = useState({ site: '', username: '', password: '' });
  const [passwordArray, setpasswordArray] = useState([]);


  useEffect(() => {
    let passwords = localStorage.getItem("passwords")

        if (passwords) {
          setpasswordArray(JSON.parse(passwords))
          console.log(passwords);
      
    
        }

      
  }, []);

  const show_password = () => {
    if (ref.current.src.includes('icons/eye_cross.png')) {
      ref.current.src = 'icons/open_eye.png';
      pass_ref.current.type = 'text';
    } else {
      ref.current.src = 'icons/eye_cross.png';
      pass_ref.current.type = 'password';
    }
  };

  const save_password = async () => {


    if (form.site.length >= 3 && form.username.length >= 3 && form.password.length >= 3) {


      const newPassword = { ...form, id:uuidv4() };


      setpasswordArray([...passwordArray, newPassword]);
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
      //important   yee jaake  hit karega post api ko server pr  ar daat mongo db me chala jaega 

      // let req = await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })
      
      //yha par post request se data behejenge 




    } else {
      alert('Incorrect format');
    }
  };

  const delete_password = async(id) => {
    let confirmDelete = confirm('Do you really want to delete the password?');
    if (confirmDelete) {

        
      setpasswordArray(passwordArray.filter(item => item.id !== id));

      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
       
    }
  
 
    
  };

  const edit_password = (id) => {
    setform(passwordArray.filter(i => i.id === id)[0]);
   setpasswordArray(passwordArray.filter(item => item.id !== id))
   
 
  };

  const handle_change = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copy_text = (text) => {

    navigator.clipboard.writeText(text);
  };

  return (
    <>




      <div className="container mx-auto px-4 py-5 min-h-[65vh] ">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            className="box-1 w-full md:w-1/3 h-10 rounded-xl border border-gray-400 p-2 font-serif"
            type="text"
            name="site"
            placeholder="Enter web URL"
            value={form.site}
            onChange={handle_change}
          />

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              className="h-10 rounded-xl w-full md:w-48 border border-gray-400 p-2 font-serif"
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handle_change}
            />

            <div className="relative">
              <input
                ref={pass_ref}
                className="h-10 rounded-xl w-full md:w-48 border border-gray-400 font-serif p-2"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handle_change}
              />
              <span className="absolute right-1 top-1 cursor-pointer" onClick={show_password}>
                <img ref={ref} className="p-1" width={30} src="icons/eye_cross.png" alt="eye" />
              </span>
            </div>
          </div>
          <button
            className="font-bold flex p-2 bg-slate-300 rounded-2xl text-lg hover:bg-slate-200"
            onClick={save_password}
          >
            Add
          </button>
        </div>

        <div className="passwords mt-6">
          <h2 className="text-2xl font-bold mb-4">Your passwords</h2>

          {passwordArray.length === 0 ? (
            <div>No passwords to show</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-cyan-800 text-white">
                  <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-slate-200">
                  {passwordArray.map((item, index) => (
                    <tr key={index} className="text-center">
                      <td className="p-4">
                        <a href={item.site} target="_blank" rel="noopener noreferrer">
                          {item.site}
                        </a>
                        <img
                          className="copy cursor-pointer"
                          src="icons/copy.gif"
                          onClick={() => copy_text(item.site)}
                          alt="copy"
                        />
                      </td>
                      <td className="py-2">
                        {item.username}
                        <img
                          className="copy cursor-pointer"
                          src="icons/copy.gif"
                          onClick={() => copy_text(item.username)}
                          alt="copy"
                        />
                      </td>
                      <td className="py-2">
                        {item.password}
                        <img
                          className="copy cursor-pointer"
                          src="icons/copy.gif"
                          onClick={() => copy_text(item.password)}
                          alt="copy"
                        />
                      </td>
                      <td className="flex justify-around py-2">
                        <button onClick={() => delete_password(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            colors="primary:#242424"
                            style={{ width: '24px', height: '20px' }}
                          ></lord-icon>
                        </button>
                        <button onClick={() => edit_password(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/wloilxuq.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#08a88a"
                            style={{ width: "40px", height: "40px" }}>
                          </lord-icon>

                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Manager;




