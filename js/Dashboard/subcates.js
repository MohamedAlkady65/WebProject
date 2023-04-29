
let popUpEditCate = document.getElementById("pop-up-edit-cate");
let popUpDeleteCate = document.getElementById("pop-up-delete-cate");
let popUpAlertCate = document.getElementById("pop-up-alert");
let overlay = document.querySelector(".overlay");

let editBtns ;
let cancelBtns ;
let deleteBtns ;

let selectCate = document.getElementById("select-cate");


let tableData = document.querySelector(".content .parent .table .table-body");
fetch("../../php/cates_subcates.php", {
    method: "POST", async: false
}).then(response => response.json()).then(cates => {

    selectCate.innerHTML="";

    cates.forEach((cat) => {
        selectCate.innerHTML += `<option value="${cat['cat_id']}">${cat['cat_name']}</option>`
    })

    fetch("../../php/subcates.php", {
        method: "POST", async: false
    }).then(response => response.json()).then(subCates => {

        tableData.innerHTML = "";

        subCates.forEach((ele) => {

            let opts = "";

            cates.forEach((cat) => {
                opts += `<option ${cat['cat_id'] == ele['cat_id'] ? "selected" : ""} value="${cat['cat_id']}">${cat['cat_name']}</option>`
            })

            tableData.innerHTML +=
                `                 
                <div class="row" data-subcateid=${ele['subcat_id']}>
                <div class="body-cell">#${ele['subcat_id']}</div>
                <div class="body-cell">
                    <span class="cat-name">${ele['subcat_name']}</span>
                    <input type="text" class="edit-input" >
                </div>
                <div class="body-cell">
                    <span class="cat-name">${ele['cat_name']}</span>
                    <select name="" id="" class="edit-input">
                        ${opts}
                    </select>
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




        editBtns = document.querySelectorAll(".content .parent .table .body-cell .edit-btn");
        cancelBtns = document.querySelectorAll(".content .parent .table .body-cell .cancel-btn");
        deleteBtns = document.querySelectorAll(".content .parent .table .body-cell .delete-btn");






        editBtns.forEach((ele) => {
            ele.onclick = () => {
                editBtns.forEach((ele) => {
                    ele.parentElement.parentElement.classList.remove("edit-now");
                    ele.parentElement.previousElementSibling.previousElementSibling.querySelector("input").value = "";
                })
                ele.parentElement.parentElement.classList.add("edit-now");
                let inputEle = ele.parentElement.previousElementSibling.previousElementSibling.querySelector("input");
                let nameEle = ele.parentElement.previousElementSibling.previousElementSibling.querySelector(".cat-name");
        
                inputEle.value = nameEle.innerText;
            }
        })
        
        
        cancelBtns.forEach((ele) => {
            ele.onclick = () => {
                ele.parentElement.parentElement.classList.remove("edit-now");
                let inputEle = ele.parentElement.previousElementSibling.previousElementSibling.querySelector("input");
                inputEle.value = "";
            }
        });
        
        
        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("fin-edit-btn")) {
        
                popUpEditCate.classList.add("active");
                overlay.classList.add("active");
        
                popUpEditCate.dataset.subcateid = e.target.parentElement.parentElement.dataset.subcateid;
                popUpEditCate.dataset.cateid = e.target.parentElement.previousElementSibling.querySelector("select").value;
                popUpEditCate.dataset.subcatename = e.target.parentElement.previousElementSibling.previousElementSibling.querySelector("input").value;
        
        
            }
        }
        );
        
        deleteBtns.forEach((ele) => {
            ele.onclick = (e) => {
                popUpDeleteCate.classList.add("active");
                overlay.classList.add("active");
                popUpDeleteCate.dataset.subcateid = e.target.parentElement.parentElement.dataset.subcateid;
            }
        });
        
        








        ///////////////////////////////////////////

    })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

})
    .catch(error => {
        console.error('Error fetching data:', error);
    });


























popUpEditCate.querySelector(".ok-btn").onclick = () => {
    fetch("../../php/dash_board/edit_subcate.php", {
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `subcate_id=${popUpEditCate.dataset.subcateid}&newname=${popUpEditCate.dataset.subcatename}&cate_id=${popUpEditCate.dataset.cateid}` } )

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

    
    fetch("../../php/dash_board/delete_subcate.php", {
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `subcate_id=${popUpDeleteCate.dataset.subcateid}` } )

        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    
        location.reload();

};



popUpEditCate.querySelector(".cancel-btn").onclick = () => location.reload();


popUpDeleteCate.querySelector(".cancel-btn").onclick = () => location.reload();





///////////////////////////////////////////

let addCateForm = document.getElementById("form-add-subcate");
let inputCateName = document.getElementById("input-subcate-name");


addCateForm.onsubmit = (e) => {

    if(inputCateName.value=="")
    {
        popUpAlertCate.classList.add("active");
        overlay.classList.add("active");
        popUpAlertCate.querySelector("p").innerText="Please Fill Sub-Category Name";
        return false;

    }


}



popUpAlertCate.querySelector("input").onclick = () => {
    popUpAlertCate.classList.remove("active");
    overlay.classList.remove("active");
}
