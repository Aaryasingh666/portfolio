// in this function i store the item  in localStorage this fuction is called in cartnumbers function
let setItems = (products) => {
let cartitems = localStorage.getItem('productsincart');
cartitems = JSON.parse(cartitems);
if(cartitems != null){
if(cartitems[products.tag] == undefined){
cartitems = {
...cartitems,
[products.tag]:products
} }
cartitems[products.tag].incart += 1;
}
else{
products.incart = 1;

cartitems = {
[products.tag]:products
} } 
localStorage.setItem("productsincart",JSON.stringify(cartitems));
}