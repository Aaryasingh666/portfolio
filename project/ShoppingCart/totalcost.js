// in this function have your item price total total cost fuction already call in main.js file in for loop
let totalcost = (product) => {
//console.log("The product price is",product.price);
let productcost = localStorage.getItem("totalcost");
//console.log("my itemcost is",productcost);
//console.log("my itemcost is",typeof(productcost));
if(productcost !=null){
productcost = parseInt(productcost);
localStorage.setItem("totalcost",productcost + product.price);
}
else{
localStorage.setItem("totalcost",product.price);
} }