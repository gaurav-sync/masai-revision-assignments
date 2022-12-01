const Access_Key = `MnGU_LoI0DbC9Vl8-nuGqvBf3D35W9WloqUS-oh_0Hs`;
const Secret_key = `PBm8d2pjtqmU3s18S3KYcMwaHmpaVKYLy_mCMsQp2YA`;

let pageNO = 1;
let checkappend = true;

const getdata = (search)=>{
    if(pageNO >= 8000){
        pageNO = 1;
    }

    let url = `https://api.unsplash.com/photos/?page=${pageNO}&per_page=10&client_id=${Access_Key}`;

    if(search)
    url = `https://api.unsplash.com/photos/?page=${pageNO}&per_page=10&client_id=${Access_Key}&query=${search}`;
    
    
    fetch(url).then((res)=>res.json()).then((res)=>{
        appenddata(res);
    })
}

const appenddata = (data)=>{
    let subparent = document.getElementById("subparent");

    data.map((elem)=>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.urls.small;
        div.append(img);
        subparent.append(div);
    })
    checkappend = true;
}

getdata();

let loader = document.querySelector(".loader");

const showloader = ()=>{
    loader.classList.add('show');
}

const removeloader = ()=>{
    loader.classList.remove('show');
}



window.addEventListener('scroll', ()=>{
    // const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // clientHeight + scrollTop >= scrollHeight

    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight && checkappend){
        showloader();
        checkappend = false;
        pageNO++;
        setTimeout(()=>{
            removeloader();
            getdata();
        },1000)
    }
})




var id;
function debounce(){
    clearTimeout(id);
     id = setTimeout(function(){
        getsearchdata();
    }, 1000);

}

const getsearchdata = ()=>{
    
        let search = document.getElementById("searchinput").value;

        let url = `https://api.unsplash.com/photos/?page=${pageNO}&per_page=20&client_id=${Access_Key}&query=${search}`
        fetch(url).then((res)=>res.json()).then((data)=>{

            if((data.errors)){
                document.getElementById("databox").classList.remove("show");
            }else{
                document.getElementById("databox").classList.add("show");
                console.log(data);
                appendsearch(data);
            }
        })

}



const appendsearch = (data)=>{
    let databox = document.getElementById("databox");
    databox.innerHTML = null;

    data.map((elem)=>{
        let div = document.createElement("div");
        div.setAttribute("class", "datadiv");
        div.addEventListener("click", function(){
            getdata(elem.alt_description);
            databox.innerHTML = null;
            document.getElementById("databox").classList.remove("show");
        })
        let para = document.createElement("p");
        para.innerText = elem.alt_description;
        div.append(para);
        databox.append(div);
    })
}

document.getElementById("parent").addEventListener("click",()=>{
    document.getElementById("databox").innerHTML = null;
    document.getElementById("databox").classList.remove("show");
})