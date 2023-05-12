
let oneProCat = document.querySelector(".categories .container .one-pro");
let nextCat = document.querySelectorAll(".next-cat");
let preCat = document.querySelectorAll(".pre-cat");

nextCat.forEach((ele) => {
    ele.onclick = () => {

        let par = ele.parentElement.getBoundingClientRect().right;
        let last = ele.previousElementSibling.firstElementChild.lastElementChild.getBoundingClientRect().right;



        if (last > par) {
            let curTra = parseFloat(ele.previousElementSibling.firstElementChild.style.translate || 0);
            curTra -= oneProCat.offsetWidth + 12;
            ele.previousElementSibling.firstElementChild.style.translate = curTra + "px";
        }

    }
})

preCat.forEach((ele) => {
    ele.onclick = () => {

        let curTra = parseFloat(ele.nextElementSibling.firstElementChild.style.translate || 0);
        curTra += oneProCat.offsetWidth + 12;
        if (curTra <= 0)
            ele.nextElementSibling.firstElementChild.style.translate = curTra + "px";


    }
})

let popularContent = document.querySelector(".popular .container .products");

fetch(`../php/popular_home.php`, {
    method: "GET",
})
    .then((response) => response.json())
    .then((data) => {


        popularContent.innerHTML = "";

        data.forEach((ele) => {
            popularContent.innerHTML += `
            <div class="one-pro">
            <a href="product.html?pro_id=${ele['pro_id']}" class="img">
              <img src="../Uploads/products_images/${ele['path']}" alt="Product Image">
            </a>
            <div class="name-line">
              <a href="product.html?pro_id=${ele['pro_id']}" class="name">${ele['pro_name']}</a>
              ${+ele['stock'] == 0 ?
                    "<div class='stock out'>Out Of Stock</div>" :
                    +ele['stock'] <= 3 ?
                        `<div class='stock rem'>${data['stock']} piece${data['stock'] == 1 ? "" : "s"} Left</div>` :
                        +ele['stock'] > 3 ?
                            "<div class='stock in'>In Stock</div>" : ""
                }
            </div>
            <div class="desc">
              <p>${ele['disc']}</p>
            </div>
            <div class="price-line">
              <span class="curr">$</span>
              <span class="price">${ele['price']}</span>
            </div>
            <div class="add">
              <div class="add-cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="text"> Add to Cart</span>
              </div>
            </div>
          </div>
  
            `;

        });

    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });




let categoriesContent = document.querySelector(".categories .container");

fetch(`../php/get_cates_home.php`, {
    method: "GET",
})
    .then((response) => response.json())
    .then((data) => {

        console.log(data);

        categoriesContent.innerHTML = "";

        data.forEach((ele) => {

            let productsData ="";

            ele['products'].forEach((ele)=>{
                productsData+= `
                <div class="one-pro">
                <a href="product.html?pro_id=${ele['pro_id']}" class="img">
                  <img src="../Uploads/products_images/${ele['path']}" alt="Product Image">
                </a>
                <div class="name-line">
                  <a href="product.html?pro_id=${ele['pro_id']}" class="name">${ele['pro_name']}</a>
                  ${+ele['stock'] == 0 ?
                        "<div class='stock out'>Out Of Stock</div>" :
                        +ele['stock'] <= 3 ?
                            `<div class='stock rem'>${ele['stock']} piece${ele['stock'] == 1 ? "" : "s"} Left</div>` :
                            +ele['stock'] > 3 ?
                                "<div class='stock in'>In Stock</div>" : ""
                    }
                </div>
                <div class="desc">
                  <p>${ele['disc']}</p>
                </div>
                <div class="price-line">
                  <span class="curr">$</span>
                  <span class="price">${ele['price']}</span>
                </div>
                <div class="add">
                  <div class="add-cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="text"> Add to Cart</span>
                  </div>
                </div>
              </div>
      
                `;
                
            })


            categoriesContent.innerHTML += `
            
        
        <div class="cat">

        <div class="cat-header">
          <h3>${ele['cat_name']}</h3>
          <a href="#" class="fa-sharp fa-regular fa-angles-right">See More</a>
        </div>

        <div class="parent">

          <i class="fas fa-regular fa-angle-left  pre-cat"></i>

          <div class="slider">

            <div class="main">
            ${productsData}
            </div>

          </div>

          <i class="fas fa-regular fa-angle-right next-cat"></i>
        </div>



      </div>
    </div>



            `;

        });

    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });




