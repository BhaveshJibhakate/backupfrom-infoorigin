import React, { useRef, useState } from "react";

const ReferenceDemo=()=>{
    const [value,setValue]=useState("")
       const inputref=useRef(null)
        
      const handleclick=()=>{
        const length=inputref.current.clientWidth;
        console.log(length);
        console.log(inputref.current.scrollWidth);
        
        
      }

    return (<>
    <input ref={inputref} type="text" id="input1" onChange={handleclick}/>
    </>)
}

export default ReferenceDemo