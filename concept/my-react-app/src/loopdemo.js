let array=[{name:"bhavesh",age:18,city:"bhandara"},{name:"nitin",age:20,city:"gondia"},{name:"yogesh",age:24,city:"pune"}]
array.forEach((item,index)=>{
   console.log("hi bhavesh");
   console.log("printing value of array",item)
   
})
function fun(){
    console.log("we are inside fun");
    return "halwa"
    
}
let btnref=document.getElementById('btn')

btnref.addEventListener('click',()=>{
    let inputValue=parseInt(document.getElementById('vala').value)
    if(inputValue<10) {
          fun()
        console.log("we are inside if block")
        return;
    }
    else if(inputValue=10){
         console.log("we are in the else if block")
    }

})


