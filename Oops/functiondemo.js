function Product(n,p)
{
    this.name=n;
    this.price=p;
    // assume -> return this
    // return {name: "Mukul", age: 23};
}

let p1 = new Product("iphone 11", 50000);
console.log(p1);

const p2 = Product("nfdsknf", 35455);
console.log(p2); // undefined