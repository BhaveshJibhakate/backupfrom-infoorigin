

document.getElementById("btn").addEventListener("click", () => {

    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const span1 = document.getElementById("span1");

    validateinput(input1,input2);

    function validateinput(input1,input2) {

        let value1 = parseInt(input1);
        let value2 = parseInt(input2);
        if (value1 == "" || value2 == "" || isNaN(value1) || isNaN(value2)) {
            span1.innerText = "Please enter valid input"
            return;
        } else {
            span1.innerText = calculate(value1, value2)
        }
    }
})
function calculate(value1, value2) {

    return value1 + value2;
    
    
}

