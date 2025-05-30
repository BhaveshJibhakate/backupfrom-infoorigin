import React, { useEffect } from "react";
import {useState} from "react"

const Counter=()=>{
 const [count,setCount]=useState(0)
 const [isactive,setisactive]=useState(false)
 useEffect(()=>{console.log("component mounted");
 },[isactive]) //it accept two parameter one is function and one is dependency array

 const styleobject={ color:"red",
     backgroundColor:"aqua"}
 return(
    <>
    <input type="text" required></input>
    <h2 style={isactive? styleobject : null}>this is the value of Count :{count}</h2>
    <button onClick={()=>{setCount(count+1)}}>Click me</button>
    <button onClick={()=>{setisactive(!isactive)}}>you want css</button>
    </>
 );
}

export default Counter;