let editBtnInfo = document.getElementById("editBtnInfo");
let cancelBtnInfo = document.getElementById("cancelBtnInfo");
let formInfo = document.querySelector(".section .main .content.details .one .part form.info");
let editBtnEmail = document.getElementById("editBtnEmail");
let cancelBtnEmail = document.getElementById("cancelBtnEmail");
let formEmail = document.querySelector(".section .main .content.details .one .part form.email");
let inputsText = document.querySelectorAll(".section .main .content.details .one .part input[type='text']");

let inputsValues=[];

for(let i =0 ; i<=3 ;i++)
inputsValues[i]=inputsText[i].value;




editBtnInfo.onclick=()=>{
    formInfo.classList.add("edit-now");
    for(let i =0 ; i<=2 ;i++)
    inputsText[i].removeAttribute("disabled")
}
cancelBtnInfo.onclick=()=>{
    formInfo.classList.remove("edit-now");

    for(let i =0 ; i<=2 ;i++)
    {
        inputsText[i].setAttribute("disabled","")
        inputsText[i].value=inputsValues[i];

    }


}
editBtnEmail.onclick=()=>{
    formEmail.classList.add("edit-now");
    inputsText[3].removeAttribute("disabled")
}
cancelBtnEmail.onclick=()=>{
    formEmail.classList.remove("edit-now");

    inputsText[3].setAttribute("disabled","")
    inputsText[3].value=inputsValues[3];
}