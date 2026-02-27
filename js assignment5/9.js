class Product {
  constructor({ name, price, category = "General" }) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getDetails = () => {
    return `Product: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
  };

  applyDiscount(discount = 0) {
    this.price = this.price - discount;
  }
}

let productData = {
  name: "Laptop",
  price: 50000
};

let extraData = {
  category: "Electronics"
};

let newProduct = new Product({ ...productData, ...extraData });

console.log(newProduct.getDetails());

newProduct.applyDiscount(5000);

console.log(newProduct.getDetails());