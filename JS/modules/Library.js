//Landing page library.

let preload = () => {
	let loader = document.querySelector('#preloader');
	loader.style.display = 'none';
}; // preloader function start.

// dynamic clock here.
const myClock = () => {
	let d = new Date();
	let t = d.toLocaleTimeString();
	document.getElementById('ti').innerHTML = t;
};

// social icons here
const socialIcons = () => {
	let social,
		icons = '';
	social = document.querySelector('.social-icons');
	icons += `<a href="https://www.fiverr.com/aaryasingh666/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook fa-fw"></i></a>
					<a href="https://instagram.com/saarya666" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram fa-fw"></i></a>`;
	social.innerHTML = icons;
};

//About page library.

// about menu expend & collapse
const hamburg = () => {
	let toggle = document.querySelector('.toggle');
	toggle.onclick = () => {
		toggle.classList.toggle('active');
	};
};

// Dynamically add job roles.
const Job_roles = () => {
	let role,
		show = '',
		roleDes,
		roleIcon;
	role = document.getElementById('role');
	roleDes = ['web designer', 'kaithal, iN', 'freelancer'];
	roleIcon = ['fa-briefcase fa-fw', 'fa-home fa-fw', 'fa-check 	fa-fw'];

	for (
		let index = 0, In = 0;
		index < roleDes.length, In < roleIcon.length;
		index++, In++
	) {
		show += `<p><i class= "fa ${roleIcon[In]}"></i> ${roleDes[index]}</p>`;
	}
	role.innerHTML = show;
};
// Get Skills dynamically
const skill = () => {
	let skill,
		content,
		num,
		progress = '';
	content = [
		'html 5',
		'css 3',
		'bootstrap 4',
		'javascript',
		'photoShop',
		'es-6',
		'json',
		'core reactJs',
		'core php',
		'MySQL',
	];
	num = ['60%', '60%', '50%', '40%', '35%', '30%', '30%', '30%', '20%', '20%'];
	skill = document.getElementById('skill');
	progress += `<h2><i class="fa fa-certificate fa-fw"></i> skills</h2>`;
	for (let c = 0, n = 0; c < content.length, n < num.length; c++, n++) {
		progress += `<span>${content[c]}<i>${num[n]}</i></span>
        <div class="progress w-100"> <div class="progress-bar" style="width: ${num[n]}"></div></div>`;
	}
	skill.innerHTML = progress;
};
// Get Languages dynamically
const lang = () => {
	let lang,
		content,
		num,
		progress = '';
	content = ['hindi', 'english'];
	num = ['80%', '50%'];
	lang = document.getElementById('lang');
	progress += `<h2><i class="fa fa-globe fa-fw"></i> languages</h2>`;
	for (let c = 0, n = 0; c < content.length, n < num.length; c++, n++) {
		progress += `<span>${content[c]}</span>
        <div class="progress w-100"> <div class="progress-bar" style="width: ${num[n]}"></div></div>`;
	}
	lang.innerHTML = progress;
};
// Get Portfolio details dynamically
const portfolio = () => {
	let portGrid,
		task = '';
	portGrid = document.getElementById('portGrid');
	task += `<h2><i class="fa fa-suitcase fa-fw"></i> portfolio</h2><div class="row mt-4">`;

	let grids = ['<div class="col-lg-6 col-md-6 col-sm-12 col-12">'];
	// First grids.
	for (let g = 0; g < grids.length; g++) {
		task += grids[g];

		let src, content, links;

		src = ['image/modern.png', 'image/header.png', 'image/AutoMail.png'];
		content = ['modern page', 'rwd dummy site', 'Coming soon/AutoMail'];
		links = [
			'./project/ModernPage',
			'./project/OnePager/index.html',
			'https://drive.google.com/drive/folders/18qKlGyFM2o9wiVTt2-0WpxBHD_210qth',
		];

		for (
			let i = 0, c = 0, link = 0;
			i < src.length, c < content.length, link < links.length;
			i++, c++, link++
		) {
			task += `<div class="Task">
                    <img src=${src[i]} alt=${content[c]} class="image" />
                    <div class="overlay">
                        <a href=${links[link]} target="_blank" rel="noopener noreferrer">${content[c]}</a>
                    </div>
                </div>`;
		}
		task += `</div>`;
	}
	//second Grid.
	for (let g = 0; g < grids.length; g++) {
		task += grids[g];

		let src, content, links;
		src = ['image/cart.png', 'image/responsive-menu.png', 'image/SignUp.png'];
		content = ['shopping cart', 'responsive navbar', 'SignUp Form'];
		links = [
			'./project/ShoppingCart/index.html',
			'./project/ResponsiveMenu/index.html',
			'https://drive.google.com/drive/folders/1XsFX5_Sfmv3zyVOkYL4cLeNE7zJ6jK_-',
		];

		for (
			let i = 0, c = 0, link = 0;
			i < src.length, c < content.length, link < links.length;
			i++, c++, link++
		) {
			task += `<div class="Task">
                    <img src=${src[i]} alt=${content[c]} class="image" />
                    <div class="overlay">
                        <a href=${links[link]} target="_blank" rel="noopener noreferrer" >${content[c]}</a>
                    </div></div>`;
		}
		task += `</div>`;
	}
	task += `</div>`;
	portGrid.innerHTML = task;
};
// Get Education details dynamically
const education = () => {
	let course = '',
		edu,
		h3,
		h6;

	edu = document.getElementById('edu');
	h3 = ['desktop publication', 'hs-cit', 'Bachelor in arts'];
	h6 = ['2017 &ndash; 2018', '2017 &ndash; 2019', '2017 &ndash; 2018'];
	course += `<h2><i class="fa fa-certificate fa-fw"></i>education</h2>`;
	for (let txt = 0, num = 0; txt < h3.length, num < h6.length; txt++, num++) {
		course += `<div class="course">
                <h3>${h3[txt]}</h3>
                <h6><i class="fa fa-calendar fa-fw"></i>${h6[num]}</h6>
            </div>`;
	}
	edu.innerHTML = course;
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

export {
	preload,
	myClock,
	socialIcons,
	hamburg,
	Job_roles,
	skill,
	lang,
	portfolio,
	education,
	Footer,
};
