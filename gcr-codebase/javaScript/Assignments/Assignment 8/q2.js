// Q2 Online Food Ordering
const menu=[{name:"Burger",price:120},{name:"Pizza",price:250},{name:"Pasta",price:180},{name:"Sandwich",price:100}];
function calculateBill(orderItems) {
  const prices=orderItems.map(name=>{
    const item=menu.find(m=>m.name.toLowerCase()===name.toLowerCase());
    if(!item) throw new Error(`"${name}" is not available on the menu.`);
    return item.price;
  });
  return prices.reduce((total,price)=>total+price,0);
}
try { const order=["Burger","Pizza","Pasta"]; console.log("Order:",order,"Total: Rs.",calculateBill(order)); }
catch(e) { console.error("Order failed:",e.message); }
try { console.log(calculateBill(["Burger","Sushi"])); }
catch(e) { console.error("Invalid order:",e.message); }
