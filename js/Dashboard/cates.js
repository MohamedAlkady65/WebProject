let editBtns;
let cancelBtns ;
let deleteBtns ;
let popUpEditCate = document.getElementById("pop-up-edit-cate");
let popUpDeleteCate = document.getElementById("pop-up-delete-cate");
let popUpAlertCate = document.getElementById("pop-up-alert");
let overlay = document.querySelector(".overlay");


let tableData= document.querySelector(".content .parent .table .table-body");
fetch("../../php/cates_subcates.php", {
    method: "POST", async:false} ).then(response => response.json()).then(data => {

    tableData.innerHTML="";

    data.forEach((ele)=>{
        tableData.innerHTML+=`                     
        <div class="row" data-cateid=${ele['cat_id']}>
        <div class="body-cell">#${ele['cat_id']}</div>
        <div class="body-cell">
            <span class="cat-name">${ele['cat_name']}</span>
            <input type="text" class="edit-input" >
        </div>
        <div class="body-cell">
            <span class="edit-btn btn">Edit</span>
            <span class="fin-edit-btn btn">Edit</span>
            <span class="delete-btn btn">Delete</span>
            <span class="cancel-btn btn">Cancel</span>
        </div>
    </div>

        `
    })

    let editBtns = document.querySelectorAll(".content .parent .table .body-cell .edit-btn");
let cancelBtns = document.querySelectorAll(".content .parent .table .body-cell .cancel-btn");
let deleteBtns = document.querySelectorAll(".content .parent .table .body-cell .delete-btn");

editBtns.forEach((ele) => {
    ele.onclick = () => {
        editBtns.forEach((ele) => {
            ele.parentElement.parentElement.classList.remove("edit-now");
            ele.parentElement.previousElementSibling.querySelector("input").value = "";
        })
        ele.parentElement.parentElement.classList.add("edit-now");
        let inputEle = ele.parentElement.previousElementSibling.querySelector("input");
        let nameEle = ele.parentElement.previousElementSibling.querySelector(".cat-name");

        inputEle.value = nameEle.innerText;
    }
})


cancelBtns.forEach((ele) => {
ele.onclick = () => {
    ele.parentElement.parentElement.classList.remove("edit-now");
    let inputEle = ele.parentElement.previousElementSibling.querySelector("input");
    inputEle.value = "";
}
});

deleteBtns.forEach((ele) => {
ele.onclick = (e) => {
    popUpDeleteCate.classList.add("active");
    overlay.classList.add("active");
    popUpDeleteCate.dataset.cateid = e.target.parentElement.parentElement.dataset.cateid;
}
});




document.addEventListener("click", (e) => {
    if (e.target.classList.contains("fin-edit-btn")) {

        popUpEditCate.classList.add("active");
        overlay.classList.add("active");

        popUpEditCate.dataset.cateid =  e.target.parentElement.parentElement.dataset.cateid;
        popUpEditCate.dataset.catename = e.target.parentElement.previousElementSibling.querySelector("input").value;

    }
}
);




















///////////////////////////////////////////

})
.catch(error => {
    console.error('Error fetching data:', error);
});





popUpEditCate.querySelector(".ok-btn").onclick = () => {

    fetch("../../php/dash_board/edit_cate.php", {
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `cate_id=${popUpEditCate.dataset.cateid}&cate_name=${popUpEditCate.dataset.catename}` } )

        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });

    location.reload();
};





popUpDeleteCate.querySelector(".ok-btn").onclick = () => {
    
    fetch("../../php/dash_board/delete_cate.php", {
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `cate_id=${popUpDeleteCate.dataset.cateid}` } )

        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    
        location.reload();
};


popUpDeleteCate.querySelector(".cancel-btn").onclick = () =>location.reload();

popUpEditCate.querySelector(".cancel-btn").onclick = () =>blocation.reload();








popUpAlertCate.querySelector("input").onclick=()=>{
    popUpAlertCate.classList.remove("active");
    overlay.classList.remove("active");
}


//////////////////////////////////////

let addCateForm = document.getElementById("form-add-cate");
let inputCateName = document.getElementById("input-cate-name");

addCateForm.onsubmit = () => {



    if(inputCateName.value=="")
    {
        popUpAlertCate.classList.add("active");
        overlay.classList.add("active");
        popUpAlertCate.querySelector("p").innerText="Please Fill Category Name";
        return false;

    }


        



}
