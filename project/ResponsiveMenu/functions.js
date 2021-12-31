$(document).ready(function () {
	$('.menu-toggle').click(function () {
		//This one show me the menu bar in mobile view.
		$('nav').toggleClass('active');
		//This one help me in the animation in mobile view.
		$('nav').toggleClass('animated fadeInDown');
	});
	//In this function .siblings() event/method help me dropdown automatically close when we select another.
	$('ul li').click(function () {
		$(this).siblings().removeClass('active');

		//in this function $(this).toggleClass('active'); help me active or seen/show me dropdown list items.
		$(this).toggleClass('active');
	});
});
// this function is used for menu toggle tranform in x.
function myFunction(x) {
	x.classList.toggle('change');
}

const Nav = () => {
	let data = `<div class="logo"><a href="#" target="_blank" rel="noopener noreferrer">navbar</a></div>
			<nav id="sidebar"> <ul class="animated fadeInDown" id="collapse"><form>
				<input class="form-dis" type="search" placeholder="Search"></form><li><a href="#"
                target="_blank" rel="noopener noreferrer">Home</a></li><li><a href="#" target="_blank" 
                rel="noopener noreferrer">Link</a></li> <li class="sub-menu"> <a href="#">Dropdown</a>
				<ul class="animated slideInRight"> <li><a href="#" target="_blank" rel="noopener noreferrer">
                Link 1</a></li> <li><a href="#" target="_blank" rel="noopener noreferrer">Link 2</a></li>
				<li><a href="#" target="_blank" rel="noopener noreferrer">Link 3</a></li></ul> </li>
				<li class="sub-menu" id="no-border"><a href="#" target="_blank" rel="noopener noreferrer">
                example@gmail.com</a> <ul class="animated slideInDown"> <li><a href="#" target="_blank" 
                rel="noopener noreferrer">Logout</a></li> </ul> </li> </ul></nav><div class="menu-toggle" 
                onclick="myFunction(this)"><span style="font-size: 30px; color: #fff;">&#9776;</span></div>`;
	document.querySelector('header').innerHTML = data;
};
Nav();
