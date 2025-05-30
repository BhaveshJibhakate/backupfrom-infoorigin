import React, { useEffect, useRef, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const TooltipDemo = () => {
    let object={width:"50%",
        overflow:"hidden",
        textOverflow: "ellipsis", 
        whiteSpace:"noWrap",
        marginLeft:"100px",
        border:"1px solid"
    }
    let data2="this is text"
    let data="i am writing this data so that it can fit into the div if it don't then it should get truncated and ellipsis should be pop up"

    const [isoverflow,setisoverflow]=useState(false)
    const divRef=useRef(null)

    useEffect(()=>{
        if(divRef.current.scrollWidth > divRef.current.clientWidth) {
            setisoverflow(true)
        }
    },[data])

  return (
    <>
    <div ref={divRef} style={object} data-tooltip-id="div1" data-tooltip-content={data}><span>{data2}</span></div>
    {isoverflow && <ReactTooltip id="div1" place="right"/>}
      
    </>
  );
};

export default TooltipDemo;
