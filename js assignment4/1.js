let books = [
    { id: 1, title: "JavaScript Basics", price: 450, stock: 10 },
    { id: 2, title: "React Guide", price: 650, stock: 5 },
    { id: 3, title: "Node.js Mastery", price: 550, stock: 8 },
    { id: 4, title: "CSS Complete", price: 300, stock: 12 }
];

let titles = books.map(b => b.title);
console.log("All Titles:", titles);

let totalValue = books.reduce((sum, b) => sum + (b.price * b.stock), 0);
console.log("Total Inventory Value:", totalValue);

let above500 = books.filter(b => b.price > 500);
console.log("Books Above 500:", above500);

let increasedPrice = books.map(b => ({
    id: b.id,
    title: b.title,
    price: b.price * 1.05,
    stock: b.stock
}));
console.log("Price Increased by 5%:", increasedPrice);

let sortedBooks = [...books].sort((a, b) => a.price - b.price);
console.log("Sorted by Price:", sortedBooks);

let removeId = 2;
let afterRemove = books.filter(b => b.id !== removeId);
console.log("After Removing ID 2:", afterRemove);

let outOfStock = books.some(b => b.stock === 0);
console.log("Any Out of Stock:", outOfStock);

let grouped = {
    low: books.filter(b => b.price <= 400),
    medium: books.filter(b => b.price > 400 && b.price <= 600),
    high: books.filter(b => b.price > 600)
};
console.log("Grouped by Price Range:", grouped);

let discount = books.map(b => 
    b.price > 600 
    ? { ...b, price: b.price * 0.9 } 
    : b
);
console.log("Discounted Books:", discount);

let invoice = books.map(b => b.title + " - ₹" + b.price).join("\n");
console.log("Invoice:\n" + invoice);