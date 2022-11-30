

let pageNO = 1;
let checkappend = true;

const getdata = ()=>{
    if(pageNO*10 >= 5000){
        pageNO = 1;
    }

    let url = `https://jsonplaceholder.typicode.com/photos?_page=${pageNO}&_limit=10`
    
    fetch(url).then((res)=>res.json()).then((res)=>{
        appenddata(res);
    })
}

const appenddata = (data)=>{
    let subparent = document.getElementById("subparent");

    data.map((elem)=>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.url;
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

