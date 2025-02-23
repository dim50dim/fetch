

function Product(name,price) {
    this.name = name,
    this.price = price,

    this.displayProduct = function () {
        console.log(`Product : ${this.name}`);
        console.log(`Price : ${this.price.toFixed(2)}`);
        
    }
    this.calculateTotal = function () {
        return this.price + (this.price * salesTax);
    }
}