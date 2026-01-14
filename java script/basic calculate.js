// Plus operation
function plus() {
    const numOne = parseFloat(document.getElementById("input1").value);
    const numTwo = parseFloat(document.getElementById("input2").value);

    // Show result
    
    if(isNaN(numOne)||isNaN(numTwo)){
      alert("Please fill number");
    }else{
        document.getElementById("result").value = numOne + numTwo;
    }
}
// Plus operation ends
// Minus Opeartion
function minus() {
    const numOne = parseFloat(document.getElementById("input1").value);
    const numTwo = parseFloat(document.getElementById("input2").value);

    // Show result

    if(isNaN(numOne)||isNaN(numTwo)){
        
        alert("Please fill number");
    }else{
        document.getElementById("result").value = numOne - numTwo;
    }
}
// Minus operation ends
// Multiplication operation
function mul(){
    const numOne = parseFloat(document.getElementById("input1").value);
    const numTwo = parseFloat(document.getElementById("input2").value);
    // Show result
    
    if(isNaN(numOne)||isNaN(numTwo)){
        
        alert("Please fill number");
    }else{
        document.getElementById("result").value = numOne * numTwo;
    }
}
// Multiplication operation ends
// Division operation starts
function div(){
    const numOne = parseFloat(document.getElementById("input1").value);
    const numTwo = parseFloat(document.getElementById("input2").value);
    // Show result
    if(isNaN(numOne)||isNaN(numTwo)){
        
        alert("Please fill number");
    }else{
        document.getElementById("result").value = numOne / numTwo;
    }
}
// Divion operation ends
// Modular operation starts
function mod(){
    const numOne = parseFloat(document.getElementById("input1").value);
    const numTwo = parseFloat(document.getElementById("input2").value);
    // Show result
    if(isNaN(numOne)||isNaN(numTwo)){
        
        alert("Please fill number");
    }else{
        document.getElementById("result").value = numOne % numTwo;
    }
}
// Modular operation ends
// Power function
function pow(){
    const numOne = parseFloat(document.getElementById("input1").value);
    const numTwo = parseFloat(document.getElementById("input2").value);
    // Show result
    if(isNaN(numOne)||isNaN(numTwo)){
        
        alert("Please fill number");
    }else{
        document.getElementById("result").value = numOne**numTwo;
    }
}
// Power function ends
// Square of a number
function sqr(){
    const numOne = parseFloat(document.getElementById("input1").value);
    
    // Show result
    if(isNaN(numOne)){
       
        alert("Please fill number");
    }else{
        document.getElementById("result").value = numOne**2;
    }
}
// Square ends
// Inverse 
function inv(){
    const numOne = parseFloat(document.getElementById("input1").value);
    
    // Show result
    if(isNaN(numOne)){
       
        alert("Please fill number");
    }else{
        document.getElementById("result").value = 1/numOne;
    }
}
// Inverse ends
// Reset function
function reset(){
   document.getElementById("input1").value = "";
   document.getElementById("input2").value = "";
   document.getElementById("result").value = "";
}