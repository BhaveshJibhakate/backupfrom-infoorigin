import React from "react";

const ComponentB=()=>{
   console.log("logging from component B")
    return (<>
    <div>Hello from component B</div>
    </>)
}

export default React.memo(ComponentB)

    
