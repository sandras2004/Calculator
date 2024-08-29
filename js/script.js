function Sum(){
    var fnumber=parseInt(document.getElementById('num1').value)
    var snumber=parseInt(document.getElementById('num2').value)
    alert(fnumber+snumber)
}
function Difference(){
    var fnumber=parseInt(document.getElementById('num1').value)
    var snumber=parseInt(document.getElementById('num2').value)
    alert(fnumber-snumber)
}
function Multiplication(){
    var fnumber=parseInt(document.getElementById('num1').value)
    var snumber=parseInt(document.getElementById('num2').value)
    alert(fnumber*snumber)
}
function Division(){
    var fnumber=parseInt(document.getElementById('num1').value)
    var snumber=parseInt(document.getElementById('num2').value)
    if(snumber===0){
        alert('Divisible by zero is not possible')
    }
    else{
        alert(fnumber/snumber)
    }
    
}
