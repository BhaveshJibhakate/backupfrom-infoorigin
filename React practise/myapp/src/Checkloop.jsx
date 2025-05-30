import React from "react";

const Checkloop=()=>{
    let array=[{id:1,name:"bhavesh",age:26,city:"bhandara"},{id:2,name:"digesh",age:25,city:"gondia"},
        {id:3,name:"yogesh",age:45,city:"nagpur"}]

        array.forEach(element => {
            console.log(element.name);
            
        });

        return (<>
        {array.map((item)=>{
            console.log("i am map");
            
            return <ul key={item.id}><li>{item.name}</li></ul>})}
        </>)
}

export default Checkloop;