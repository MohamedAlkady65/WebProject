
let writeRevBtn = document.getElementById("writeRevBtn")
let popReview = document.getElementById("pop-review")
let overlay = document.querySelector(".overlay");
let closePop = document.querySelector(".pop-up .close-btn");
let revTextBox = document.querySelector(".rev-textbox");

let incrBtn = document.getElementById("incrBtn");
let decrBtn = document.getElementById("decrBtn");
let counterNumber = document.getElementById("counterNumber")
incrBtn.onclick = ()=>{
    counterNumber.innerText= +counterNumber.innerText +1;
}
decrBtn.onclick = ()=>{
    if(counterNumber.innerText>1)
    counterNumber.innerText= +counterNumber.innerText -1;
}

writeRevBtn.onclick =()=>{
    popReview.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("poped")
    revTextBox.value="";

}

closePop.onclick =()=>{
    popReview.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("poped");
    revTextBox.value="";

}


document.addEventListener('click',(e)=>{
    if(e.target.classList.contains("sub-img-btn")||e.target.parentElement.classList.contains("sub-img-btn"))
    {
        let imgBtn = e.target.classList.contains("sub-img-btn") ? e.target :e.target.parentElement; 
        let imgNum = e.target.classList.contains("sub-img-btn") ? e.target.dataset.imgnum :e.target.parentElement.dataset.imgnum; 

        let subImgs = document.querySelectorAll(".product-show  .sub-imgs .img")
        let mainImgs = document.querySelectorAll(".product-show   .main-img img")

        subImgs.forEach((ele)=>{
            ele.classList.remove("active")
        })

        mainImgs.forEach((ele)=>{
            ele.classList.remove("active")
        })
        imgBtn.classList.add("active");

        document.querySelector(".product-show   .main-img").querySelector(imgNum).classList.add("active")


    }
})

const urlParams = new URLSearchParams(window.location.search);
let pro_id = urlParams.get('pro_id');

let proNameTit = document.querySelector(".product-show  .title.pro-name") ;
let proName = document.querySelector(".product-show  .main .info .pro-name") ;
let proPrice = document.querySelector(".product-show  .main .info .price") ;
let proStock = document.querySelector(".product-show  .main .info .stock") ;
let proDisc = document.querySelector(".description p") ;

fetch(`../php/product.php?pro_id=${pro_id}`, {
    method: "GET",
})
    .then((response) => response.json())
    .then((data) => {

        console.log(data);

        proNameTit.innerText = proName.innerText = data['pro_name'];
        proPrice.innerText = data['price'];

        if(data['stock']==0)
        {
            proStock.innerText="Out Of Stock";
            proStock.classList.add("out");
        }
        else if(data['stock']<=3)
        {
            proStock.innerText=`${data['stock']} piece${data['stock']==1?"":"s"} Left`;
            proStock.classList.add("rem");

        }
        else if(data['stock']>3)
        {
            proStock.innerText="In Stock";
            proStock.classList.add("in");

        }

        let mainImgsCont = document.querySelector(".product-show   .main-img");
        let subImgsCont = document.querySelector(".product-show  .sub-imgs");

        mainImgsCont.innerHTML="";
        subImgsCont.innerHTML="";

        data['imgs'].forEach((ele,ind)=>{
            mainImgsCont.innerHTML+=`<img src="../Uploads/products_images/${ele['path']}" class="img-${ind} ${ele['is_default']=="1"?"active":""}" alt="Product_image">`;

            subImgsCont.innerHTML+=`
            <div class="img ${ele['is_default']=="1"?"active":""} sub-img-btn" data-imgnum=".img-${ind}">
            <img src="../Uploads/products_images/${ele['path']}" alt="Pro_img">
            </div>`;
        });

        proDisc.innerText=data["disc"];

        let specTable = document.querySelector(".specif table tbody");
        specTable.innerHTML="";
        data["spec"].forEach((ele)=>{
            specTable.innerHTML+=`
            <tr>
            <td class="feature">${ele[0]}</td>
            <td class="value">${ele[1]}</td>
        </tr>
            `
        });

        let reviewContent = document.querySelector(".reviews .content");
        reviewContent.innerHTML="";

        data['reviews'].forEach((ele)=>{
            reviewContent.innerHTML+=`
            <div class="rev">
            <div class="img">
                <img src="../images/user.png" alt="">
            </div>
            <div class="rev-text">
                <h3 class="name">${ele['name']}</h3>
                <p class="text">${ele['rev_text']}</p>
            </div>
        </div>
            `
        })

    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

