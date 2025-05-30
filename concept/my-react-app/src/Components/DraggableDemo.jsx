import React from "react";
import Draggable from "react-draggable";


const Ddemo = () => {
    let styleobject = {
        width: "50px", height: "50px",
        borderRadius: "50px", backgroundColor: "blue",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "absolute"
       
    }
    return (
        <Draggable>
         <div> I am draggable</div>
       </Draggable>
    )
}


export default Ddemo