import React, { useEffect, useState } from "react";

const EffectDemo=()=>{
    const [count,setCount]=useState(0)

    useEffect(()=>{
        
        console.log("we are testing behaviour of useEffect");
        
    },[])


    return (<>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>click me</button>
    </>)
}

export default EffectDemo