export const cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 6,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
];

export const addToCart = (button) => {
  const { productId } = button.dataset;
  const quantity = Number(
    document.querySelector(`.js-quantity-selecter-${productId}`).value
  );
  let Matching_item;

  Matching_item = cart.find((item) => item.productId === productId);

  if (!Matching_item) {
    cart.push({ productId, quantity });
  } else {
    Matching_item.quantity += quantity;
  }

  showAddedmessage(productId);
};

let timeOutIds = {};
const showAddedmessage = (productId) => {
  const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
  addedMessage.classList.add("added-to-cart-visible");
  clearTimeout(timeOutIds[productId]);
  timeOutIds[productId] = setTimeout(
    () => addedMessage.classList.remove("added-to-cart-visible"),
    2000
  );
};

// testing git
