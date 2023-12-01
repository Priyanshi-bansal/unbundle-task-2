const summaryItems = document.getElementById("summary-items");
const summaryTotal = document.getElementById('total-price');
const summaryButton = document.getElementById("summary-button");
const chocolateOptions = document.getElementById('chocolate-options');
const selectedChocolates = document.getElementById('selected-chocolates');

let totalPrice = 0;
let totalQuant;

function updateSummary() {
  
  const products = document.getElementsByClassName("chocolate-item");

  let items = 0;
  let total = 0;

  for (let product of products) {
    let name = product.dataset.name;
    let price = parseInt(product.dataset.price);
    let quantity = parseInt(product.querySelector("input").value);

    items += quantity;
    total += price * quantity;
  }
  totalQuant = items;
  if(totalQuant > 8){
      alert("The total number of items in the custom pack should not exceed 8")
      return;
  }
  summaryItems.innerHTML = "";

  for (let product of products) {
    let name = product.dataset.name;
    let quantity = parseInt(product.querySelector("input").value);

    if (quantity > 0) {
      let summaryItem = document.createElement("li");

      summaryItem.innerHTML = `<span>${name}</span> x ${quantity}`;

      summaryItems.appendChild(summaryItem);
    }
  }

  summaryTotal.innerHTML = `Total: $${total}`;

  if (items == 8) {
    summaryButton.disabled = false;
  } else {
    summaryButton.disabled = true;
  }
}

function placeOrder() {
  alert("Your order has been placed successfully!");
}
// Event delegation for chocolate selection
// chocolateOptions.addEventListener('click', (event) => {
//   const chocolateItem = event.target;
//   if (chocolateItem.classList.contains('chocolate-item')) {
//     const chocolateId = chocolateItem.getAttribute('data-id');
//     const chocolatePrice = parseFloat(chocolateItem.getAttribute('data-price'));

//     // Check if the total number of items is less than or equal to 8
//     if (selectedChocolates.children.length < 8) {
//       // Add selected chocolate to the list
//       const selectedChocolate = document.createElement('div');
//       selectedChocolate.innerHTML = `Chocolate ${chocolateId} - $${chocolatePrice.toFixed(2)}`;
//       selectedChocolates.appendChild(selectedChocolate);

//       // Update total price
//       totalPrice += chocolatePrice;
//       totalPriceElement.textContent = totalPrice.toFixed(2);
//     } else {
//       alert('You can only select up to 8 chocolates.');
//     }
//   }
// });
