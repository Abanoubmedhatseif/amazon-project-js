
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
      
      <div class="product-rating-stars link-primary">
      ${product.rating.stars}
      </div>
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

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary " data-product-name="${product.name}">
      Add to Cart
    </button>
  </div>`
})

productsContainer.innerHTML = html;





// ----------------  making add to cart interactive  ----------------

const addToCart = (button) => {
    const productName = button.dataset.productName;
    let found = false;

    cart.forEach((item) => {
        if (item['product-name'] === productName) {
            item.quantity += 1;
            found = true;
        }
    });

    if (!found) {
        cart.push({
            "product-name": productName,
            quantity: 1
        });
    }
    
    console.log(cart);
};


const addToCartButton = document.querySelectorAll('.add-to-cart-button')

addToCartButton.forEach((button)=> {
    button.addEventListener('click', function(){
        addToCart(button)
    }
)})



