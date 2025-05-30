import { useCallback, useState } from "react";
import React from "react";
import Bhavesh2 from "./Bhavesh2";

const Bhavesh=()=>{
const [count,setCount]=useState(0)

   const fun=useCallback(()=>{
        console.log("we are inside fun function");     
   },[])

    console.log("log from component  Bhavesh");
    
    return (<>
    <div>
        <div></div>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <Bhavesh2 fun={fun}/>
    </div>
    </>)
}
export default Bhavesh