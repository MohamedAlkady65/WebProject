document.querySelector("nav .shop").onclick =()=>{
    document.querySelector("nav .cat").classList.toggle("active");
}
document.querySelector("nav .menu").onclick =()=>{
    document.querySelector("nav .btns").classList.toggle("active");
    document.querySelector(".cart").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active")
}

document.onclick=(e)=>{
    if(e.target!=document.querySelector("nav .shop")&&!e.target.classList.contains("cat-item"))
    document.querySelector("nav .cat").classList.remove("active");
}

document.querySelector("nav .cart-icon").onclick =()=>{
    document.querySelector(".cart").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
    document.querySelector("nav .btns").classList.remove("active");

}

document.querySelector(".cart .close").onclick =()=>{
    document.querySelector(".cart").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active")
}

