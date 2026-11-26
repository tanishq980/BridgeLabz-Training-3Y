// Q6 E-Commerce Inventory System
const products=[
 {id:1,name:"Laptop",category:"Electronics",price:50000,stock:4},
 {id:2,name:"Phone",category:"Electronics",price:20000,stock:12},
 {id:3,name:"Notebook",category:"Stationery",price:80,stock:3},
 {id:4,name:"Pen Pack",category:"Stationery",price:50,stock:25},
 {id:5,name:"Chair",category:"Furniture",price:2500,stock:6},
 {id:6,name:"Desk",category:"Furniture",price:6000,stock:2}
];
const getLowStockProducts=(list,limit=5)=>list.filter(p=>p.stock<limit);
const sortProductsByPrice=list=>[...list].sort((a,b)=>a.price-b.price);
const calculateTotalInventoryValue=list=>list.reduce((sum,p)=>sum+p.price*p.stock,0);
const groupByCategory=list=>list.reduce((groups,p)=>{(groups[p.category]??=[]).push(p);return groups;},{});
console.log("Low stock:",getLowStockProducts(products));
console.log("Sorted by price:",sortProductsByPrice(products));
console.log("Inventory value: Rs.",calculateTotalInventoryValue(products));
console.log("Grouped:",groupByCategory(products));
