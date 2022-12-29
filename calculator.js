var num=document.getElementById("inputbox")
let symbol
var outnum=document.getElementById("outputbox")
function takenumber(symbol){
    num.textContent+=symbol
} 

function equalto(){
    outnum.textContent=eval(num.textContent)
}

function backspace(){
    let str=num.textContent
    num.textContent=str.slice(0,-1)  //takes the starting index and the ending index of the string and
}                                    // returns the string in between these indices.
