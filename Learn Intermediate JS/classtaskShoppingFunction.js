class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const storeItems = [
  new Item("Apple", 1.5),   // item number 0
  new Item("Bread", 2.0),   // item number 1
  new Item("Milk", 3.0)     // item number 2
];


// calculateTotal([0, 2], [3, 1]); 
// Item 0 → Apple → $1.50 × 3 = $4.50
// Item 2 → Milk → $3.00 × 1 = $3.00
// Output = 7.5


function calculateTotal(items, quantities) {
  if (items.length !== quantities.length) {
    console.log("Please specify a quantity for each listed item");
    return -1;
  }

  let grandTotal = 0;

  for (let i = 0; i < items.length; i++) {
    const itemIndex = items[i];
    const item = storeItems[itemIndex];

    if (!item) {
      console.log(`This item ${itemIndex} does not exist.`);
      return -1;
    }

    grandTotal += item.price * quantities[i];
  }

  return grandTotal;
}

console.log(calculateTotal([1, 2], [1, 5])); 

