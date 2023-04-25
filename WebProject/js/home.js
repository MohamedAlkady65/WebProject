let catBtn=document.querySelector(".cat-link");
let catList=document.querySelector(".cat-link .cat-list");
let menuBtn=document.querySelector(".menu-btn");
let menuList=document.querySelector(".header .down");





menuBtn.onclick =()=>{
    menuList.classList.toggle("active");
}
catBtn.onclick =()=>{
    catList.classList.toggle("active");
}

document.onclick=(e)=>{
    if(!e.target.classList.contains("cat-link")&&!e.target.classList.contains("cat-link-text"))
    {
        catList.classList.remove("active");
    }
}

