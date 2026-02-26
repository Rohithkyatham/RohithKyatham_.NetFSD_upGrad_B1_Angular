let cart = [
    { id: 1, product: "Laptop", price: 60000, qty: 1 },
    { id: 2, product: "Headphones", price: 2000, qty: 2 },
    { id: 3, product: "Mouse", price: 800, qty: 1 }
];

let totalValue = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
console.log("Total Cart Value:", totalValue);

let increaseQty = cart.map(item =>
    item.id === 2 ? { ...item, qty: item.qty + 1 } : item
);
console.log("After Increasing Quantity:", increaseQty);

let removeProduct = cart.filter(item => item.id !== 3);
console.log("After Removing Product:", removeProduct);

let discountItems = cart.map(item =>
    item.price > 10000
        ? { ...item, price: item.price * 0.9 }
        : item
);
console.log("After 10% Discount:", discountItems);

let sortedCart = [...cart].sort((a, b) =>
    (a.price * a.qty) - (b.price * b.qty)
);
console.log("Sorted by Total Item Price:", sortedCart);

let costlyProduct = cart.some(item => item.price > 50000);
console.log("Any Product Above 50000:", costlyProduct);

let allInStock = cart.every(item => item.qty > 0);
console.log("All Items In Stock:", allInStock);

let invoice = cart.map(item =>
    item.product + " x " + item.qty + " = ₹" + (item.price * item.qty)
).join("\n");
console.log("Invoice:\n" + invoice);

let mostExpensive = cart.reduce((max, item) =>
    item.price > max.price ? item : max
);
console.log("Most Expensive Product:", mostExpensive);

let gst = totalValue * 0.18;
console.log("GST (18%):", gst);

let finalAmount = totalValue + gst;
console.log("Final Amount with GST:", finalAmount);