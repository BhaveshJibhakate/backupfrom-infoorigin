import React,{useState} from "react";
import ComponentB from "./ComponentB";

const ComponentA=()=>{
console.log("logging from component A");

const [count,setCount]=useState(0)
    return (<>
    <div>Hello from component A
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <ComponentB count={count}/>
    </div>
    </>)
}

export default ComponentA