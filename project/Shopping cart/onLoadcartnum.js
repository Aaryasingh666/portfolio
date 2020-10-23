// in this function you can see the cart item number after refresh the page
let onLoadCartNumber = () =>{
let productnumbers = localStorage.getItem('cartnumbers');
if(productnumbers){
// access the cart icon who i inserted in header section with help of class attribute & in this class have a tag span
document.querySelector('.nav-link span').textContent = productnumbers;
}
}
//here we call the onLoadCartNumber(); function
onLoadCartNumber();