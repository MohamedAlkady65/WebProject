const forms=document.querySelectorAll('.form'),
    links=document.querySelectorAll('.link');



links.forEach(link => {
link.addEventListener("click", e=>{
e.preventDefault();
forms[0].classList.toggle("active");
forms[1].classList.toggle("active");



})


});    