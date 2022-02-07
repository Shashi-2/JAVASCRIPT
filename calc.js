//fatching the value from button in input
let a=document.getElementById("val");

//display
function display(no){
    a.value += no;
}


//clear
function Clear(){
    a.value="";
}

//to validate value
function calculate(){
    try{
        a.value = eval(a.value);
    }
    catch(err){
        alert("Invalid_Syntax")
    }
}

function del(){
    a.value = a.value.slice(0,-1);
}