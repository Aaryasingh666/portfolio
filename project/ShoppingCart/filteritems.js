// in this function your product items will be filter when you search in search box
const searchproducts = () => {
    const filter = document.getElementById('MyInput').value.toUpperCase();
    const card = document.getElementsByClassName('pcard');
    for (let i = 0; i < card.length; i++) {
        let a = card[i].getElementsByTagName('h1')[0];
        let textValue = a.textContent || a.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = '';
        } else {
            card[i].style.display = 'none';
        }
    }
}
let loader = document.getElementById('preloader');
// preloader function start
let preload = () => loader.style.display = 'none';


//open link with function method.
let fiverr = () => open("https://www.fiverr.com/aaryasingh666?up_rollout=true");
let insta = () => open("https://instagram.com/saarya666?igshid=ompxytvg2tqi");