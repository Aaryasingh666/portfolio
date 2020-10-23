
//cart item display on cart page with this function
let displaycart = () => {
        let cartitems = localStorage.getItem('productsincart');
        cartitems = JSON.parse(cartitems);
        // console.log("run",cartitems);
        let productcontainer = document.querySelector('.products');
        let productcost = localStorage.getItem("totalcost");
        // console.log("run products div here",productcontainer);
        // console.log(cartitems);
        if (cartitems && productcontainer) {
            // console.log("runing if statment.");
            productcontainer.innerHTML = '';
            Object.values(cartitems).map(item => {
                productcontainer.innerHTML += `
                <div class ="product">
                	<i class="fa fa-times" aria-hidden="true"></i>
                	<img src ="img/${item.tag}.jpg">
                	<span>${item.name}</span>
                	<div class="price align">$${item.price},00</div>
                <div class="quantity align">
                	<button>
                		<i class="fa fa-minus-square-o fa-fw" aria-hidden="true"></i>
                	</button>
                	<span>${item.incart}</span>
                	<button>
                		<i class="fa fa-plus-square-o fa-fw" aria-hidden="true"></i>
                	</button>
                </div>
                <div class="total align">$${item.incart * item.price},00</div>
                </div>
                 `;
            });
            productcontainer.innerHTML += `
					<div class="basketTotalContainer">
						<h4 class="basketTotalTitle">Basket Total</h4>
						<h4 class="basketTotal">$${productcost},00</h4>
					</div> `;
        }
    }
    //here we call the displaycart(); fucntion
displaycart();