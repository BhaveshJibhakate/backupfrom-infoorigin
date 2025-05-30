import React from "react";
import Draggable from "react-draggable";

const Ddemo=()=>{

    let styleobject = {
        width: "50px", height: "50px",
        borderRadius: "50px", backgroundColor: "blue",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "fixed",
        bottom:"50px",
        right:"50px",
        
    }   
     return (
           <div style={{ width: "100vw",height:"100vh", backgroundColor:"aqua",overflow:"hidden" }}>
            <Draggable bounds="parent">
                <div style={styleobject}>
                    <b style={{ color: "white" }}>+</b>
                </div>
            </Draggable>
             </div>
        
    )
}
export default Ddemo