
// -------------------  populating products data  ----------------------

const productsContainer = document.querySelector('.js-products-grid');

let html = ``;

products.forEach((product) => {
    html += `<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
    ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars*10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="js-quantity-selecter-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart js-added-to-cart-${product.id}">
      
    </div>

    <button class="add-to-cart-button button-primary " data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>`
})

productsContainer.innerHTML = html;





// ----------------  making add to cart interactive  ----------------

const addToCart = (button) => {
    const {productId} = button.dataset;
    const quantity = Number(document.querySelector(`.js-quantity-selecter-${productId}`).value)
    let Matching_item;


    Matching_item = cart.find(item => item.productId === productId)

    if (!Matching_item){
      cart.push({productId,quantity});
    } else { 
      Matching_item.quantity += quantity 
    }
    

    updateCartQuantity()
    
    
    showAddedmessage(productId)

};


const updateCartQuantity = ()=> {
  let cartQuantity=0;
  cart.forEach((product)=> {
      cartQuantity += product.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}


let timeOutIds = {};
const showAddedmessage = (productId)=> {
const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
addedMessage.innerHTML=`<img src="images/icons/checkmark.png"> Added`
clearTimeout(timeOutIds[productId])
timeOutIds[productId] = setTimeout(() => addedMessage.innerHTML=``, 2000);   
}


const addToCartButton = document.querySelectorAll('.add-to-cart-button')
addToCartButton.forEach((button)=> {
    button.addEventListener('click', function(){
        addToCart(button)
        console.log(cart);
    }
)});










