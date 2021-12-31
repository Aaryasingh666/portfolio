import {preload,NavBar,displayCart,onLoadCartNumber,Footer} from './modules/CartLibrary.js';

window.onload = () => {preload(); NavBar("index.html","index.html","#"); onLoadCartNumber(); displayCart(); Footer(); };