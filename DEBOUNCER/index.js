var input = document.getElementById("input");
var inputdebounce = document.getElementById("inputdebounce");
var defaultText = document.getElementById("default");
var debounceText = document.getElementById("debounce");


function def(){
    var text = input.value;
    defaultText.textContent = text;
}

var id;
function debounce(){
    if(id)
    clearTimeout(id);
   id = setTimeout(()=>{
        var text = inputdebounce.value;
        debounceText.textContent = text;
        
    },1000)
}