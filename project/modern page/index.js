    let toggle = document.querySelector('.toggle');
    let anchor = document.querySelector('.nav-link');
    toggle.onclick = () => {
        toggle.classList.toggle('active');
    }
    anchor.onclick = () => {
        anchor.classList.toggle('active');
    }