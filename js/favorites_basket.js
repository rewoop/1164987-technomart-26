var basket = document.querySelector(".basket");
var favorites = document.querySelector(".favorites");

var addBasket = document.querySelectorAll(".buy-btn");
var addFavorites = document.querySelectorAll(".to-fav-btn");

for (var i = 0; i < addBasket.length; i++) {
  addBasket[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    basket.classList.add("basket-catalog");
  });
}
for (var i = 0; i < addFavorites.length; i++) {
  addFavorites[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    favorites.classList.add("favorites-catalog");
  });
}
