var car = documet.querySelector(".btn-contact");
var option = document.querySelector(".option");
var tampil = false;

car.addEventListener("click", function () {
   tampil = !tampil;
   if (tampil) {
      option.style.display = "block";
   } else {
      option.style.display = "none";
   }
});
