let tableBody = document.getElementById("products-table-body");
let filterCate = document.getElementById("filter-select-cate");
let filterSubCate = document.getElementById("filter-select-subcate");
let srchBtn = document.getElementById("srch-btn-input");
let srchBox = document.getElementById("srch-box-input");





fillFilterCates();

fillFilterSubCates("all")

fillTable("all", "all");



filterCate.oninput = () => {
    filterSubCate.value = "all";
    fillFilterSubCates(filterCate.value);
    fillTable(filterCate.value, filterSubCate.value);
}


filterSubCate.oninput = () => {
    fillTable(filterCate.value, filterSubCate.value);
}

srchBtn.onclick=()=>{
    FillBySearch(srchBox.value);
    filterCate.value="all";
    filterSubCate.value="all";
};


function fillFilterCates(){
    fetch("../../php/cates_subcates.php", {
        method: "POST", async: false
    }).then(response => response.json()).then(catesSubCates => {
    
        filterCate.innerHTML = `<option value='all'>All</option>`
    
        catesSubCates.forEach((ele) => {
            filterCate.innerHTML += `<option value='${ele['cat_id']}'>${ele['cat_name']}</option>`
        });
    
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
}


function fillFilterSubCates(cat_id) {

    fetch(`../../php/dash_board/subcates_filter.php?cat_id=${cat_id}`, {
        method: "GET", async: false
    }).then(response => response.json()).then(subCates => {

        filterSubCate.innerHTML = `<option value='all'>All</option>`
        subCates.forEach((ele) => {
            filterSubCate.innerHTML += `<option value='${ele['subcat_id']}'>${ele['subcat_name']}</option>`
        })
    })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

}

function FillBySearch(pro_name)
{
    tableBody.innerHTML = "";
    fetch(`../../php/dash_board/search_products.php?pro_name=${pro_name}`, {
        method: "GET", async: false,
    }).then(response => response.json()).then(pros => {

        pros.forEach((ele) => {
            tableBody.innerHTML += `
               <div class="row" data-proid="${ele['pro_id']}">
               <div class="body-cell">#${ele['pro_id']}</div>
               <div class="body-cell">${ele['pro_name']}</div>
               <div class="body-cell">${ele['cat_name']}</div>
               <div class="body-cell">${ele['subcat_name']}</div>
               <div class="body-cell">${ele['price']}</div>
               <div class="body-cell">${ele['stock']}</div>
               <div class="body-cell">${ele['num_sales']}</div>
               <div class="body-cell">
                   <span class="edit-btn btn">Edit</span>
                   <span class="fin-edit-btn btn">Edit</span>
                   <span class="delete-btn btn">Delete</span>
                   <span class="cancel-btn btn">Cancel</span>
               </div>
           </div>
               `
        })
    })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function fillTable(cat_id, subcat_id) {

    tableBody.innerHTML = "";
    fetch("../../php/dash_board/getproducts.php", {
        method: "POST", async: false,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "cat_id": cat_id, "subcat_id": subcat_id })
    }).then(response => response.json()).then(pros => {

        pros.forEach((ele) => {
            tableBody.innerHTML += `
               <div class="row" data-proid="${ele['pro_id']}">
               <div class="body-cell">#${ele['pro_id']}</div>
               <div class="body-cell">${ele['pro_name']}</div>
               <div class="body-cell">${ele['cat_name']}</div>
               <div class="body-cell">${ele['subcat_name']}</div>
               <div class="body-cell">${ele['price']}</div>
               <div class="body-cell">${ele['stock']}</div>
               <div class="body-cell">${ele['num_sales']}</div>
               <div class="body-cell">
                   <span class="edit-btn btn">Edit</span>
                   <span class="fin-edit-btn btn">Edit</span>
                   <span class="delete-btn btn">Delete</span>
                   <span class="cancel-btn btn">Cancel</span>
               </div>
           </div>
               `
        })
    })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}




























///////////////////////////////////////////////////////////////////////////////////////////////////////

let addFilterCate = document.getElementById("add-filter-select-cate");
let addFilterSubCate = document.getElementById("add-filter-select-subcate");


fillAddFilterCates();
fillAddFilterSubCates("all");

function fillAddFilterCates(){
    fetch("../../php/cates_subcates.php", {
        method: "POST", async: false
    }).then(response => response.json()).then(catesSubCates => {
    
        addFilterCate.innerHTML = "<option value='all'  selected  >Category : All</option>";
    
        catesSubCates.forEach((ele) => {
            addFilterCate.innerHTML += `<option value='${ele['cat_id']}'>${ele['cat_name']}</option>`
        });
    
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
}


function fillAddFilterSubCates(cat_id) {

    fetch(`../../php/dash_board/subcates_filter.php?cat_id=${cat_id}`, {
        method: "GET", async: false
    }).then(response => response.json()).then(subCates => {

        addFilterSubCate.innerHTML = "<option value='' disabled selected hidden >Sub Category</option>";
        subCates.forEach((ele) => {
            addFilterSubCate.innerHTML += `<option value='${ele['subcat_id']}'>${ele['subcat_name']}</option>`
        })
    })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

}




addFilterCate.oninput = () => {
    addFilterSubCate.value = "";
    fillAddFilterSubCates(addFilterCate.value);
}


















let uploadImgs = document.getElementById("imgsToUpload");
let previewImgs = document.querySelector("form.add-pro .down .add-img .show-imgs");

uploadImgs.oninput = () => {
    let imgsArr = uploadImgs.files;
    previewImgs.innerHTML = "";

    for (let key of Object.keys(imgsArr)) {
        previewImgs.innerHTML += `
        <div class="one">
        <input type="radio" name="defaultImg" value="${key}" id="${key}-pro-img">
        <label class="img" for="${key}-pro-img">
            <img src="${URL.createObjectURL(imgsArr[key])}" alt="">
        </label>
        <div></div>
    </div>
        `
    }

}
let feaNameInput = document.getElementById("fea-name-input");
let feaValueInput = document.getElementById("fea-value-input");
let previewFea = document.getElementById("preview-fea");

document.getElementById("add-fea").onclick = () => {
    previewFea.innerHTML += `
    <div class="row">
    <div class="body-cell fea-name">${feaNameInput.value}</div>
    <div class="body-cell fea-value">${feaValueInput.value}</div>
    <div class="body-cell">
        <span class="fa-solid fa-circle-xmark del-btn"></span>
    </div>
</div>
    `
    feaNameInput.value = feaValueInput.value = "";
}

let addProForm = document.querySelector("form.add-pro");



addProForm.onsubmit = (e) => {
    refreshFeaturesValue();

    e.preventDefault();

    fetch('../../php/dash_board/add_product.php', {
        method: 'POST',
        body: new FormData(addProForm)
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);

        })
        .catch(error => {
            console.error(error);
        });

    return false;
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")) {
        e.target.parentElement.parentElement.remove();
    }
})


let feaValues = document.getElementById("fea-values");
function refreshFeaturesValue() {
    let feaNameFields = document.querySelectorAll("form.add-pro .down .spec .table .body-cell.fea-name");
    let feaValueFields = document.querySelectorAll("form.add-pro .down .spec .table .body-cell.fea-value");

    let result = [];

    feaNameFields.forEach((ele, ind) => {
        result.push([feaNameFields[ind].innerText, feaValueFields[ind].innerText]);
    })

    feaValues.value = JSON.stringify(result);
    console.log(feaValues.value)

}