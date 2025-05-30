import React, { useEffect,useMemo,useState } from "react";


const TestUseEffect=()=>{

    const[count,setCount]=useState(0)
    const [name,setName]=useState("")
    useEffect(()=>{
       console.log("useeffect working")
    })
    const someheavyCalculation=useMemo(()=>{
        let result=0;
        for (let i=0;i<1000;i++) {
            console.log("we are inside for loop");
             result=result+i;
        }
        return result;
    },[name])
    
    const handlename=()=>{
        setName("bhavesh")
    }
     return (<>
    <div style={{textAlign:"center"}}>
    <div>{count}   {name}</div>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    <div>{someheavyCalculation}</div>
    <button onClick={handlename}>Name change</button>
    </div>
    </>)

}

export default TestUseEffect