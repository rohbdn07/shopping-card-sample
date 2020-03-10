if (document.readyState == "loading") {
  document.addEventListener("DOMcontentLoaded", ready);
} else {
  ready();
}
function ready() {
  var addToCartButtons = document.getElementsByClassName("btn-primary");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCart);
  }
}
function addToCart(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("card-title")[0].innerText;
  var price = shopItem.getElementsByClassName("price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("card-img-top")[0].src;
  console.log(title, price, imageSrc);
}
