import React from "react";
import { useSelector } from "react-redux";

const ShowAll=()=>{

    const alluser=useSelector((store)=>store.user_list)

    return (
        <>
        <div style={{width:"400px",border:"solid 1px red"}}>
        <h2>List of All User</h2>
        {alluser.map((item)=>(<div key={item.id}>{item.name}</div>))}
        </div>
        </>
    );
}

export default ShowAll;