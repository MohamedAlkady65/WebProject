let popUpEditCate = document.getElementById("pop-up-edit-cate");
let popUpDeleteCate = document.getElementById("pop-up-delete-cate");
let overlay = document.querySelector(".overlay");

let editBtns = document.querySelectorAll(".content .parent .table .body-cell .edit-btn");
editBtns.forEach((ele)=>{
    ele.onclick=()=>{
        editBtns.forEach((ele)=>{
            ele.parentElement.parentElement.classList.remove("edit-now");
            ele.parentElement.previousElementSibling.querySelector("input").value="";
        })
        ele.parentElement.parentElement.classList.add("edit-now");
        let inputEle = ele.parentElement.previousElementSibling.querySelector("input");
        let nameEle = ele.parentElement.previousElementSibling.querySelector(".cat-name");

        inputEle.value=nameEle.innerText;
    }
})

let cancelBtns = document.querySelectorAll(".content .parent .table .body-cell .cancel-btn");

cancelBtns.forEach((ele)=>{
    ele.onclick=()=>{
        ele.parentElement.parentElement.classList.remove("edit-now");
        let inputEle = ele.parentElement.previousElementSibling.querySelector("input");
        inputEle.value="";
    }
});


document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fin-edit-btn")){

    popUpEditCate.classList.add("active");
    overlay.classList.add("active");

    popUpEditCate.dataset.cateid=1;
    popUpEditCate.dataset.catename=e.target.parentElement.previousElementSibling.querySelector("input").value;

    }
}
);



popUpEditCate.querySelector(".ok-btn").onclick=()=>{
    closePopUp(popUpEditCate,"cateid","catename");
    editBtns.forEach((ele)=>{
        ele.parentElement.parentElement.classList.remove("edit-now");
        ele.parentElement.previousElementSibling.querySelector("input").value="";
    })
};


popUpEditCate.querySelector(".cancel-btn").onclick=()=>{
    closePopUp(popUpEditCate,"cateid","catename");
    editBtns.forEach((ele)=>{
        ele.parentElement.parentElement.classList.remove("edit-now");
        ele.parentElement.previousElementSibling.querySelector("input").value="";
    })
};


let deleteBtns = document.querySelectorAll(".content .parent .table .body-cell .delete-btn");


deleteBtns.forEach((ele)=>{
    ele.onclick=()=>{
        popUpDeleteCate.classList.add("active");
        overlay.classList.add("active");
        popUpDeleteCate.dataset.cateid=12;
    }
});

popUpDeleteCate.querySelector(".ok-btn").onclick=()=>{
    closePopUp(popUpDeleteCate,"cateid");
};


popUpDeleteCate.querySelector(".cancel-btn").onclick=()=>{
    closePopUp(popUpDeleteCate,"cateid");
};

function closePopUp(popUpEle,...attrs)
{
    popUpEle.classList.remove("active");
    overlay.classList.remove("active");

    attrs.forEach((ele)=>{
        popUpEle.removeAttribute(`data-${ele}`)
    })


}
