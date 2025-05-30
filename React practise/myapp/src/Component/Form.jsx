import React, { useEffect, useState } from "react";
let usernameMap = new Map();

const Form = () => {
   const [inputdata, setInputData] = useState({
      name: "", email: "", password: ""
   });

   const [flag, setflag] = useState(false);

   // useEffect(()=>{},[flag])

   function handledata(e) {
      setInputData({ ...inputdata, [e.target.name]: e.target.value })
   }

   function handlesubmit(e) {
      e.preventDefault();
      if (!inputdata.name || !inputdata.email || !inputdata.password) {
         alert("All fields are mandatory")
      } else {
         usernameMap.set('username',inputdata.name);
         setflag(true);
         setInputData(() => {
            return {
               name: "", email: "", password: ""
            }
         })
         setTimeout(() => {
            setflag(false);
         }, 5000)
      }
   }
   return (
      <>
         {flag && (<pre><h1>hello {usernameMap.get('username')} you are successfully registred</h1></pre>)}
         <form className="container" onSubmit={handlesubmit}>
            <div className="header">
               <h1>Registration Form</h1>
            </div>
            <div>
               <input type="text" placeholder="enter your name" name="name" value={inputdata.name} onChange={handledata} />
            </div>
            <div>
               <input type="text" placeholder="enter your email" name="email" value={inputdata.email} onChange={handledata} />
            </div>
            <div>
               <input type="password" placeholder="enter your password" name="password" value={inputdata.password} onChange={handledata} />
            </div>
            <div>
               <button type="submit">Submit</button>
            </div>

         </form>
         
      </>
   );

}
export default Form;