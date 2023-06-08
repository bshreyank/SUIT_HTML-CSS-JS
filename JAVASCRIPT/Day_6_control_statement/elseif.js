var shopAmount = parseInt(prompt("Enter the shop amount:"));

var discountPercentage;
if (shopAmount > 30000) {
  discountPercentage = 30;
} else if (shopAmount > 20000) {
  discountPercentage = 20;
} else if (shopAmount > 15000) {
  discountPercentage = 15;
} else if (shopAmount > 10000) {
  discountPercentage = 10;
} else if (shopAmount > 5000) {
  discountPercentage = 5;
} else {
  discountPercentage = 0;
}

var discountAmount = (shopAmount * discountPercentage) / 100;

alert("Shop Amount: $" + shopAmount.toFixed(2) + "\nDiscount: " + discountPercentage + "%\nDiscount Amount: $" + discountAmount.toFixed(2));
