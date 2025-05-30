function example()  {
 return fetch("https://jsonplaceholder.typicode.com/users");
}

example().then((data)=>{  return data.json();
}).then((parseddata)=>{console.log(parseddata);
}).catch((error)=>{console.log(error);
})
