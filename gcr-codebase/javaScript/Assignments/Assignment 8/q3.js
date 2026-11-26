// Q3 Product Discount System: constructor function + prototype
function Product(name,price) { this.name=name; this.price=price; }
Product.prototype.applyDiscount=function(percent) {
  if(percent<0||percent>100) throw new Error("Discount must be between 0 and 100");
  return this.price-(this.price*percent/100);
};
const products=[new Product("Laptop",50000),new Product("Headphones",3000),new Product("Keyboard",2000)];
[10,20,5].forEach((discount,i)=>console.log(products[i].name,"final price: Rs.",products[i].applyDiscount(discount)));
 // Abstraction: applyDiscount hides the calculation details from the caller.
