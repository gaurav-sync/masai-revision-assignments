


function toggler() {
    let myarray = [...arguments];
    let current = 0;
    

    return function toggle(){
        console.log(myarray[current]);

        current++;
        current = current % myarray.length;
    }
}

const toggle = toggler(1,2,3)

toggle()
// 1
toggle()
// 2
toggle()
// 3
