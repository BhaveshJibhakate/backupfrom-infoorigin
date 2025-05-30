import React,{useState} from "react";

const Statebehav=()=>{

const [count,setCount]=useState()
function handleclick(){

   setCount(count+1)
}
    return (
    <>
    <div>The value of count is:{count}</div>
    <button onClick={handleclick}>Increment</button>
    
    </>);
}