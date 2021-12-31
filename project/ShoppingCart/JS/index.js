import {preload,NavBar,BtnCount,searchProducts,onLoadCartNumber,} from './modules/CartLibrary.js';

window.onload = () => {	preload(); NavBar('index.html', '#productGrid', 'cart.html'); BtnCount(); searchProducts(); onLoadCartNumber();};