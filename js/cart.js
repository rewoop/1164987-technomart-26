var cartLink = document.querySelectorAll(".buy-btn");
var cartPopup = document.querySelector(".added-to-cart-popup");
var cartClose = cartPopup.querySelector(".popup-close-btn");
var cartClose_2 = cartPopup.querySelector(".added-to-cart-footer a");
var cartClose_3 = cartPopup.querySelector(".added-to-cart-footer button");

for (var i = 0; i < cartLink.length; i++){
cartLink[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-show-cart");
});
}
cartClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   cartPopup.classList.remove("modal-show-cart");
 })
 cartClose_2.addEventListener("click", function (evt) {
    cartPopup.classList.remove("modal-show-cart");
  })
  cartClose_3.addEventListener("click", function (evt) {
     evt.preventDefault();
     cartPopup.classList.remove("modal-show-cart");
   })

 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     if (cartPopup.classList.contains("modal-show-cart")) {
       cartPopup.classList.remove("modal-show-cart");
     }
   }
 });
