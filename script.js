function add(a, b){
    return a+b;
}

function sub(a, b){
   return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function remainder(a, b){
    return a%b;
}

function operate(operator, num1, num2){
    num1=+num1;
    num2=+num2;
    const display=document.querySelector(".display");
    if(num2===0 && operator==="/"){
        display.innerText="Pls don't";
        return;
    }
      
    let result;
    switch(operator){
        case "+": result=add(num1, num2);
                break;
        case "-": result=sub(num1, num2);
                break;
        case "*": result=multiply(num1, num2);
                break;
        case "/": result=divide(num1, num2);
                break;
        case "%": result=remainder(num1, num2);
                break;
        default : console.log("Wrong operator");
                break;
    }
    if(!Number.isInteger(result))
      result=result.toFixed(3);
    result=result.toString();
    display.innerText=result;
    n1=result;
    n2="";
    operator="";
}

function input(e){
   console.log(e);
   if(e.target.classList.value!=="result"){
    const input=document.querySelector(".display");
    if(e.target.classList.value==="operator"){
     if(n1!=="" && operator!=="" && n2!==""){
        operate(operator, n1, n2);
     }
     operator=e.target.id;
    }
    else if(n1!=="" && operator!==""){
        if(n2==="")
          display(e, true);
        n2=input.innerText;
    }
    else{
        n1=input.innerText;
    }
  }
    
}

function reset(e){
    const display=document.querySelector(".display");
    display.innerText="";
    n1="";
    n2="";
    operator="";
}

function backspace(e){
    const display=document.querySelector(".display");
    display.innerText=display.innerText.slice(0,display.innerText.length-1);
}

function display(e, n2=false){
    const display=document.querySelector(".display");
    if(n2){
        display.innerText="";
    }
    if(display.innerText.includes(".")){
        const disableDecimal=document.getElementById(".");
        disableDecimal.disabled=true;
    }
    else if(!display.innerText.includes(".")){
        const disableDecimal=document.getElementById(".");
        disableDecimal.disabled=false;
    }
    if(e.target.classList.value==="number"){
        display.innerText+=e.target.id;
    }
   
    
}

let n1="";
let n2="";
let operator="";

const buttons=document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", (e) => {display(e); input(e)}));
const result=document.querySelector(".result");
result.addEventListener("click", (e) => operate(operator, n1, n2));
const clear=document.querySelector(".clear");
clear.addEventListener("click", reset);
const remove=document.querySelector(".delete");
remove.addEventListener("click", backspace);






