var input = document.getElementById("input");
var inputthrottle = document.getElementById("inputthrottle");
var defaultText = document.getElementById("default");
var throttleText = document.getElementById("throttle");
var inputdebounce = document.getElementById("inputdebounce");
var debouncetext = document.getElementById("debouncetext");



function def(){
    var text = input.value;
    defaultText.textContent = text;
}


function updater(){
    var text = inputthrottle.value;
    throttleText.textContent = text;
}

inputthrottle.addEventListener("input",throttle(updater, 1000))


function throttle(updater, limit){
    
    var flag = true;

    return function updated(){
        
            if(flag){
                flag = false;
                setTimeout(()=>{
                    updater();
                    flag=true;
            },limit)
        }
    }

  
}


var did;
function debounceforinput(){
    if(did)
    clearTimeout(did);

   did = setTimeout(()=>{
        let text = inputdebounce.value;
        debouncetext.textContent = text;
    },1000)
}








var trackid;
let throttledcount = 0;
function trackthrottle(){

    if(!trackid){
   trackid = setTimeout(()=>{
        throttledcount++;
        document.getElementById("throttletrack").textContent = throttledcount;
        trackid=false;
    },150)
}
}

let count = 0;
function trackIt(){
    count++;

    document.getElementById("defaulttrack").textContent = count;

    trackthrottle();
    debouncefortrack();
}






var debounceid;
let debouncecount = 0;
function debouncefortrack(){
    if(debounceid)
    clearTimeout(debounceid);

   debounceid = setTimeout(()=>{
        debouncecount++;
        document.getElementById("debouncetrack").textContent = debouncecount;
        
    },200)
}