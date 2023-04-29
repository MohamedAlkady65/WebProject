let uploadImgs = document.getElementById("imgsToUpload");
let previewImgs = document.querySelector("form.add-pro .down .add-img .show-imgs");


uploadImgs.oninput=()=>{
    let imgsArr = uploadImgs.files;
    previewImgs.innerHTML="";

    for(let key of Object.keys(imgsArr))
    {
        previewImgs.innerHTML+=`
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
let previewFea= document.getElementById("preview-fea");

document.getElementById("add-fea").onclick=()=>{
    previewFea.innerHTML+=`
    <div class="row">
    <div class="body-cell fea-name">${feaNameInput.value}</div>
    <div class="body-cell fea-value">${feaValueInput.value}</div>
    <div class="body-cell">
        <span class="fa-solid fa-circle-xmark del-btn"></span>
    </div>
</div>
    `
    feaNameInput.value = feaValueInput.value="";
}

let addProForm = document.querySelector("form.add-pro");



addProForm.onsubmit=(e)=>{
    refreshFeaturesValue();

}

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("del-btn"))
    {
        e.target.parentElement.parentElement.remove();
    }
})


let feaValues =document.getElementById("fea-values");
function refreshFeaturesValue(){
    let feaNameFields = document.querySelectorAll("form.add-pro .down .spec .table .body-cell.fea-name");
    let feaValueFields = document.querySelectorAll("form.add-pro .down .spec .table .body-cell.fea-value");

    let result=[];

    feaNameFields.forEach((ele,ind)=>{
        result.push([feaNameFields[ind].innerText,feaValueFields[ind].innerText]);
    })

    feaValues.value=JSON.stringify(result);
    console.log(feaValues.value)
    
}