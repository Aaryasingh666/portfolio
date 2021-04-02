// in this function i store the item  in localStorage this fuction is called in cartnumbers function
let setItems = (product) => {
let cartitems = localStorage.getItem('productsincart');
cartitems = JSON.parse(cartitems);
if(cartitems != null){
if(cartitems[product.tag] == undefined){
cartitems = {
...cartitems,
[product.tag]:product
} }
cartitems[product.tag].incart += 1;
}
else{
product.incart = 1;

cartitems = {
[product.tag]:product
} } 
localStorage.setItem("productsincart",JSON.stringify(cartitems));
}