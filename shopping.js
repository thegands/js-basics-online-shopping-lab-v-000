var cart = []

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var itemArray = [];
    cart.forEach(function(itemHash) {
      var itemName = Object.keys(itemHash)[0]
      itemArray.push(itemName + " at $" + itemHash[itemName]);
    })
    console.log("In your cart, you have " + itemArray.join(", ") + ".");
  }
}

function removeFromCart(itemToRemove) {
  var itemInCart = false;
  cart.forEach(function(itemHash, index) {
    if (Object.keys(itemHash)[0] === itemToRemove) {
      itemInCart = true;
      cart.splice(index, 1);
    }
  })
  if (itemInCart == false) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(ccNumber) {
  if (!ccNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + ccNumber + ".");
    cart = [];
  }
}
