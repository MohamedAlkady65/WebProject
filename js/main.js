let shopBtn=document.querySelector("nav .shop");
let catList=document.querySelector("nav .cat");
let menuBtn=document.querySelector("nav .menu");
let navList=document.querySelector("nav .list");
let cart=document.querySelector(".cart");
let overlay=document.querySelector(".overlay");
let cartIcon=document.querySelector("nav .cart-icon");
let closeCart=document.querySelector(".cart .close");




shopBtn.onclick =()=>{
    catList.classList.toggle("active");
}
menuBtn.onclick =()=>{
    navList.classList.toggle("active");
    cart.classList.remove("active");
    overlay.classList.remove("active")
}
document.onclick=(e)=>{
    if(e.target!=document.querySelector("nav .shop")&&!e.target.classList.contains("cat-item"))
    catList.classList.remove("active");
}
cartIcon.onclick =()=>{
    cart.classList.toggle("active");
    overlay.classList.toggle("active");
    navList.classList.remove("active");
}
closeCart.onclick =()=>{
    cart.classList.remove("active");
    overlay.classList.remove("active")
}

