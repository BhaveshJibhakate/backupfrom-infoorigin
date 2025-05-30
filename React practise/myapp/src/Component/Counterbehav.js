import React,{useState} from "react";
import { use } from "react";

const Counterbehav=()=>{
const [count,setCount]=useState(0)

function handleclick(){
    console.log("log from handleclick");
    
    setCount(count+1)
}
function testingfunction1(){
    console.log("log from testing function 1");
    
}
function testingfunction2(){
    console.log("log from testing function 2");
    
}
    return (
    <>
    <div>The value of Count is :{count}</div>
    <button onClick={handleclick}>Increment</button>
    {testingfunction1()}
    {testingfunction2()}
    </>);
}

export default Counterbehav;