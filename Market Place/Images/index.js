// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

// Initialize the cart as an empty array
let cart = [];

// Add event listeners to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get product details from the clicked button's parent element
    const product = {
      name: button.parentElement.querySelector('h3').textContent,
      price: parseFloat(button.parentElement.querySelector('p').textContent.replace('$', '')),
      // Add more product information as needed
    };

    // Add the product to the cart array
    cart.push(product);

    // You can update the UI to show a message or update the cart count
    console.log('Product added to cart:', product);

    // Update the cart UI or send data to the server
    // ...
  });
});
const checkoutForm = document.querySelector('.checkout-form');

checkoutForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  
  // Prepare data for sending to the server
  const orderData = {
    name,
    address,
    cart: cart, // Your cart array from the previous step
  };
  
  // Send the order data to the server or perform necessary actions
  // ...

  // Optionally, you can reset the form after submission
  checkoutForm.reset();
});

