
let writeRevBtn = document.getElementById("writeRevBtn")
let popReview = document.getElementById("pop-review")
let overlay = document.querySelector(".overlay");
let closePop = document.querySelector(".pop-up .close-btn");
let revTextBox = document.querySelector(".rev-textbox");


let incrBtn = document.getElementById("incrBtn");
let decrBtn = document.getElementById("decrBtn");
let counterNumber = document.getElementById("counterNumber")
incrBtn.onclick = ()=>{
    counterNumber.innerText= +counterNumber.innerText +1;
}
decrBtn.onclick = ()=>{
    if(counterNumber.innerText>1)
    counterNumber.innerText= +counterNumber.innerText -1;
}

writeRevBtn.onclick =()=>{
    popReview.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("poped")
    revTextBox.value="";

}

closePop.onclick =()=>{
    popReview.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("poped");
    revTextBox.value="";

}