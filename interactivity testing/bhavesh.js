let object1={
    name:"bhavesh",
    age:56,
    occupation:"software engineer",
    city:"bhandara"
};

let object2={
    name:"bhavesh",
    age:56,
    occupation:"software engineer",
    city:"bhandara"
};

let object3={
    name:"bhavesh",
    age:56,
    occupation:"software engineer",
    city:"bhandara"
};
 
let array=[object1,object2,object3]

let by=array.map((key)=>{
  key.name=key.name+"hahaha";
  console.log(key.name);
  return {...key,name:"confused"}
  
})
console.log(array);
console.log(by);



