
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




