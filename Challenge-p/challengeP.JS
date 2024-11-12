
// script.js

//Only change below JS, not the HTML

//Function to update order details
function populateOrderData(orderKey) {
const order = document.querySelector(`dl[data-key="${orderKey}"]`);

// Update the text content of the respective elements
order.querySelector('.biscuits .count').textContent = order.dataset.biscuits;
order.querySelector('.donuts .count').textContent = order.dataset.donuts;
order.querySelector('.pancakes .count').textContent = order.dataset.pancakes;
//orderElement.querySelector('.status dd').textContent = deliveredStatus;

// Update status based on delivery status
order.querySelector('.status dd').textContent = order.dataset.delivered === "true" ? "Delivered" : "Pending";
}

// Populate data for each order
populateOrderData('order1');
populateOrderData('order2');
populateOrderData('order3');
