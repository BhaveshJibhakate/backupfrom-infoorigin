import React, { useMemo, useState } from "react";
 

const UseMemodemo=()=>{
 const [add,setadd]=useState(1);
 const [sub,setsub]=useState(100)
 const multiplication=useMemo( function multiply(){
    console.log("multiply method getting called");
    return add*10   
 },[add])

    return(
        <>
        <h4>{multiplication}</h4>
        <h3>This is add value {add}</h3>
        <h3>This is substract value {sub}</h3>
        <button onClick={()=>setadd(add+1)}>ADD</button>
        <button onClick={()=>setsub(sub-1)}>SUBSTRACT</button>
        </>
    );

}
export default UseMemodemo;