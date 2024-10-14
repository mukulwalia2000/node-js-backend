class Product{
    discount =10 // data member
    constructor(n,p){
        // constructor function to create new real life instances called as object
        // When we create an object this constructor is the first function that gets called
        this.name = n;   // data member
        this.price=p;
    }

    // member function
    displayProduct(){
        // this is a member function
        console.log(this.name,this.price, this.discount);
    }

    buyProduct(){
        // this is a member function
    }
}

//let iphone = new Product("iphone 15","50000");
let iphone = new Product("iphone 15","50000");
let macbook = new Product("Mackbook air", 100000);
iphone.displayProduct();

// console.log(iphone, macbook);
// console.log(typeof macbook);