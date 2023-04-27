let viewBtns = document.querySelectorAll(".view-btn");
let popView = document.getElementById("pop-view")
let overlay = document.querySelector(".overlay");
let closePop = document.querySelector(".pop-up .close-btn");


viewBtns.forEach((ele)=>{
    ele.onclick =()=>{
        popView.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("poped");
    }
})


closePop.onclick =()=>{
    popView.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("poped");
}