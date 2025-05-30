import React from "react";
import styled from 'styled-component'

const StyledSortableTree=styled(SortableTree)`

width:300px;
height:300px;
border:1px solid green;
overflow:hidden;

`
const SortableTree= ()=>{

    return (<>
    <div style={{border:"2px solid black"}}>
        we are inside div tag
        <div style={{border:"1px dotted red"}}>
            we are inside 2nd div tag
        </div>
    </div>
    </>)
}


export default StyledSortableTree