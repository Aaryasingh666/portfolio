'use strict';
// preloader function start
const preload = () => {
	let loader = document.getElementById('preloader');
	loader.style.display = 'none';
};

const NavBar = (logo, menu, cart) => {
	let navTag = document.querySelector('.navbar'),
		innerData = '';

	innerData += `<div class="container-fluid text-uppercase p-2"><a ref=${logo} target="_blank" rel="noopener noreferrer"
	class="navbar-brand font-weight-bold text-info">shopping-cart</a><input id="search" placeholder="Search" 
	class="mr-2" type="text"/><button id="searchBtn" type="search" class="btn btn-sm btn-primary">Search</button>
	<button class="navbar-toggler" data-toggle="collapse" data-target="#target"><span class="navbar-toggler-icon">
	</span></button> <div class="collapse navbar-collapse" id="target"><ul class="navbar-nav ml-auto text-center">
	 <li class="nav-item"> <a href=${menu} target="_blank" rel="noopener noreferrer" class="nav-link text-white">
	 home</a></li> <li class="nav-item"><a href=${cart} class="nav-link text-white"  target="_blank" rel="noopener noreferrer"><i class="fa fa-shopping-cart">
	 <span class="badge badge-info text-white"></span></i></a></li></ul></div></div>`;
	navTag.innerHTML = innerData;
};

const productCard = () => {
	let productGrid = document.getElementById('productGrid'),
		data = `<div class="row">`;
	let src, H1, price;
	src = ['img/watch.jpg', 'img/bag.jpg', 'img/jean.jpg', 'img/wallet.jpg'];
	H1 = ['watch', 'bag', 'jean', 'wallet'];
	price = [15, 20, 20, 15];
	// 1st Grid.
	for (
		let s = 0, hTxt = 0, rs = 0;
		s < src.length, hTxt < H1.length, rs < price.length;
		s++, hTxt++, rs++
	) {
		data += `<div class="col-lg-3 col-md-3"><div class="pCard"><img src=${src[s]} alt=${H1[hTxt]}>
        <h1>${H1[hTxt]}</h1><p class="price">$${price[rs]}:00</p><p>Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Adipisci, harum.</p>
        <button class="add_cart">Add to Cart</button></div></div>`;
	}
	// 2nd Grid.
	for (
		let s = 0, hTxt = 0, rs = 0;
		s < src.length, hTxt < H1.length, rs < price.length;
		s++, hTxt++, rs++
	) {
		data += `<div class="col-lg-3 col-md-3"><div class="pCard"><img src=${src[s]} alt=${H1[hTxt]}>
        <h1>${H1[hTxt]}</h1><p class="price">$${price[rs]}:00</p><p>Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Adipisci, harum.</p>
        <button class="add_cart">Add to Cart</button></div></div>`;
	}
	data += '</div>';
	// footer here
	data += `<footer> <div class="social-icons">
        <a href="https://www.fiverr.com/aaryasingh666/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook fa-fw"></i></a>
	    <a href="https://instagram.com/saarya666" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram fa-fw"></i></a></div>
        <p> Thanks for visit please get in touch via fiverr &amp; instagram i'll respond you soon </p>
        <div class="copyright"><p> &copy;&nbsp; MyResume. All Rights Reserved Designed by
        <a href="https://www.fiverr.com/aaryasingh666/" target="_blank" rel="noopener noreferrer" class="pl-2 fa-fw"> aarya</a></p></div></footer>`;
	productGrid.innerHTML = data;
};

// create an array object & save some information like product name price etc.
let products = [
	{ name: 'watch', tag: 'watch', price: 15, inCart: 0 },
	{ name: 'bag', tag: 'bag', price: 20, inCart: 0 },
	{ name: 'jean', tag: 'jean', price: 20, inCart: 0 },
	{ name: 'wallet', tag: 'wallet', price: 15, inCart: 0 },
	{ name: 'watch', tag: 'watch', price: 15, inCart: 0 },
	{ name: 'bag', tag: 'bag', price: 20, inCart: 0 },
	{ name: 'jean', tag: 'jean', price: 20, inCart: 0 },
	{ name: 'wallet', tag: 'wallet', price: 15, inCart: 0 },
];

// in this function i store the item  in localStorage this function is called in cartNumbers function
const setItems = (products) => {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	if (cartItems != null) {
		if (cartItems[products.tag] == undefined) {
			cartItems = {
				...cartItems,
				[products.tag]: products,
			};
		}
		cartItems[products.tag].inCart += 1;
	} else {
		products.inCart = 1;
		cartItems = {
			[products.tag]: products,
		};
	}
	localStorage.setItem('productsInCart', JSON.stringify(cartItems));
};

// run function & calculate how many items in cart.
const cartNumbers = (products) => {
	// console.log("the product clicked is",products);
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);
	if (productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.nav-link span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.nav-link span').textContent = 1;
	}
	setItems(products);
};

// in this function have your item price total cost function.
const totalCost = (product) => {
	//console.log("The product price is",product.price);
	let productCost = localStorage.getItem('totalCost');
	//console.log("my itemCost is",productCost); //console.log("my itemCost is",typeof(productCost));
	if (productCost != null) {
		productCost = parseInt(productCost);
		localStorage.setItem('totalCost', productCost + product.price);
	} else {
		localStorage.setItem('totalCost', product.price);
	}
};

// run the for loop for calculate the number of carts button. Access all the cart buttons..
let carts = document.querySelectorAll('.add_cart');
const BtnCount = () => {
	for (let i = 0; i < carts.length; i++) {
		carts[i].addEventListener('click', () => {
			cartNumbers(products[i]);
			totalCost(products[i]);
		});
	}
};

// in this function your product items will be filter when you search in search box
const searchProducts = () => {
	let searchBtn = document.getElementById('searchBtn');
	const card = document.getElementsByClassName('pCard');
	const filter = document.getElementById('search').value.toUpperCase();

	searchBtn.addEventListener('click', () => {
		for (let i = 0; i < card.length; i++) {
			let a = card[i].getElementsByTagName('h1')[0];
			let textValue = a.textContent || a.innerHTML;
			if (textValue.toUpperCase().indexOf(filter) > -1) {
				card[i].style.display = 'block';
			} else {
				card[i].style.display = 'none';
			}
		}
	});
};

//Access all the cart buttons. cart item display on cart page with this function
const displayCart = () => {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems); // console.log("run",cartItems);
	let productContainer = document.querySelector('.products');
	let productCost = localStorage.getItem('totalCost'); // console.log("run products div here",productContainer); console.log(cartItems);
	if (cartItems && productContainer) {
		// console.log("running if statement.");
		productContainer.innerHTML = '';
		Object.values(cartItems).map((item) => {
			productContainer.innerHTML += `
            <div class ="product">
                <i class="fa fa-times" aria-hidden="true"></i><img src ="img/${
									item.tag
								}.jpg"><span>${item.name}</span>
                <div class="price align">$${
									item.price
								},00</div><div class="quantity align"><button>
                <i class="fa fa-minus-square-o fa-fw"></i></button><span>${
									item.inCart
								}</span> <button onclick = "cartNumbers(product);"> <i class="fa fa-plus-square-o fa-fw" aria-hidden="true"></i></button>
            </div> <div class="total align">$${
							item.inCart * item.price
						},00</div> </div>`;
		});
		productContainer.innerHTML += `
                <div class="basketTotalContainer">
                    <h4 class="basketTotalTitle">Total</h4>
                    <h4 class="basketTotal">$${productCost},00</h4>
                </div> `;
	}
};

// in this function you can see the cart item number after refresh the page
const onLoadCartNumber = () => {
	let productNumbers = localStorage.getItem('cartNumbers');
	if (productNumbers) {
		// access the cart icon who i inserted in header section with help of class attribute & in this class have a span tag
		document.querySelector('.nav-link span').textContent = productNumbers;
	}
};

//footer here.
const Footer = () => {
	let footer,
		data = '';
	footer = document.querySelector('footer');
	data += `
    <div class="social-icons">
        <a href="https://www.fiverr.com/aaryasingh666/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook fa-fw"></i></a>
	    <a href="https://instagram.com/saarya666" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram fa-fw"></i></a>
    </div><p> Thanks for visit please get in touch via fiverr &amp; instagram i'll respond you soon </p>
    <div class="copyright">
        <p> &copy;&nbsp; MyResume. All Rights Reserved Designed by <a href="https://www.fiverr.com/aaryasingh666/" target="_blank" rel="noopener noreferrer" class="pl-2 fa-fw"> aarya</a>
        </p>
    </div>`;
	footer.innerHTML = data;
};

export {preload,NavBar,BtnCount,searchProducts,displayCart,onLoadCartNumber,Footer,};