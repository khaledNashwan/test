let menu_j = document.querySelector("#list");
let openButton = document.querySelector("#ham-menu");
let alink = document.querySelector(".link");


 openButton.addEventListener("click", () => {
   menu_j.classList.toggle("active");
   openButton.classList.toggle("fa-times");
 });

 alink.forEach((alink) => {
   alink.addEventListener("click", () => {
     menu_j.classList.remove("active");
     openButton.classList.toggle("fa-times");
   });
 });
