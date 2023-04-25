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

let oneProCat = document.querySelector(".categories .container .one-pro");
let nextCat = document.querySelectorAll(".next-cat");
let preCat = document.querySelectorAll(".pre-cat");

nextCat.forEach((ele)=>{
    ele.onclick = ()=>{



        let par =ele.parentElement.getBoundingClientRect().right;
        let last = ele.previousElementSibling.firstElementChild.lastElementChild.getBoundingClientRect().right;

        

        if(last>par)
        {
            let curTra = parseFloat(ele.previousElementSibling.firstElementChild.style.translate || 0) ;
        curTra-=oneProCat.offsetWidth+12;
        ele.previousElementSibling.firstElementChild.style.translate = curTra+"px";
        }
        
    }
})


preCat.forEach((ele)=>{
    ele.onclick = ()=>{

      let curTra = parseFloat(ele.nextElementSibling.firstElementChild.style.translate || 0) ;
        curTra+=oneProCat.offsetWidth+12;
        if(curTra <= 0)
        ele.nextElementSibling.firstElementChild.style.translate = curTra+"px";


    }
})




