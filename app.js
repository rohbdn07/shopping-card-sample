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
  var removeCartItems = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItems.length; i++) {
    var button = removeCartItems[i];
    button.addEventListener("click", removeCartRow);
  }
}
function removeCartRow(event) {
  var bottonClicked = event.target;
  bottonClicked.parentElement.parentElement.remove();
}

function addToCart(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("card-title")[0].innerText;
  var price = shopItem.getElementsByClassName("price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("card-img-top")[0].src;
  console.log(title, price, imageSrc);
  addItemToCart(title, price, imageSrc);
}
function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");

  var cartItems = document.getElementsByClassName("cart-item")[0];
  // var cartItemNames = cartItem.getElementsByClassName("cart-item-title");
  // for(var i=0; i<cartItemNames.length; i++){
  //   if
  // }
  var cartRowContents = `
      <div class="cart-item">
        <img
        class="cart-item-image"
        src="${imageSrc}"
        class="card-img-top"
        alt="image"
        />
        <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price"> ${price}</span>
      <div class="cart-quantity">
        <input class="cart-quantity-input" type="number" value="1" />
        <button class="btn btn-danger" type="button">REMOVE</button>
      </div>
      `;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
}
