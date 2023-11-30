let count = 0;
let countEl = document.getElementById('count-el');

function increment(){
    count += 1;
    countEl.textContent = count;

}

increment();


let saveEl = document.getElementById("save-el");


function save(){

    let entries = count + " - ";
    saveEl.textContent += entries;

    countEl.textContent = 0;
    count = count*0;
}

save();






