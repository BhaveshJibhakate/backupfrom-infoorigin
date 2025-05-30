import React, { useState } from "react";


const SortableTree=()=>{
 
const [state,setState]=useState("")

const handlechange=(e)=>{
    console.log("you are inside handlechange"); 
    setState(e.target.value)
}
const handleclick=(e)=>{
    console.log(e.id);
    console.log("you are inside handleclick");
    
}
    return(<>
     <div style={{width:"500px",height:"500px", border:"2px solid red", color:"green"}}>
        hello there <p>bbbbbb</p>
        <input type="text" placeholder="enter any text" value={state} onChange={handlechange} onClick={handleclick}/>
     </div>
    </>)
}

export default SortableTree

