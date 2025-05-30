import React, { useState } from "react";
import "./loginpagestyle.css"

const Digesh=()=>{
const [state,setstate]=useState(false);

function handleclick(){
    setstate(!state)
}
return(
    <>
    <form className={state ? "formcss" : ""}>
        <label>Enter Your Name</label>
        <input type="text" placeholder="Enter name"/>
        <label>Enter your Age</label>
        <input type="number" placeholder="enter age"/>
        <button type="button" onClick={handleclick}>Click</button>
    </form>
    </>
);

}
export default Digesh;

