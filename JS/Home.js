import{preload,myClock,socialIcons} from './modules/Library.js';

window.onload = () => {
    preload(); setInterval(myClock, 1000); socialIcons();
};
