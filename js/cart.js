let incrBtns = document.querySelectorAll(".incrBtn");
let decrBtns = document.querySelectorAll(".decrBtn");
let delBtns = document.querySelectorAll(".del-btn");


incrBtns.forEach((ele) => {
    ele.onclick = ()=>{
        let countNum = ele.previousElementSibling;
        let price = + ele.parentElement.parentElement.previousElementSibling.lastElementChild.lastElementChild.lastElementChild.innerText;
        let totPrice = ele.parentElement.nextElementSibling.lastElementChild;
        countNum.innerText= +countNum.innerText +1;
        totPrice.innerText = price * +countNum.innerText;
    }
});


decrBtns.forEach((ele) => {
    ele.onclick = ()=>{
        if(ele.nextElementSibling.innerText > 1)
        {
            let countNum = ele.nextElementSibling;
            let price = + ele.parentElement.parentElement.previousElementSibling.lastElementChild.lastElementChild.lastElementChild.innerText;
            let totPrice = ele.parentElement.nextElementSibling.lastElementChild;
        countNum.innerText= +countNum.innerText - 1;
        totPrice.innerText = price  * +countNum.innerText;
        }
    }
});
delBtns.forEach((ele) => {
    ele.onclick = ()=>{
        ele.parentElement.parentElement.remove();
    }
});



