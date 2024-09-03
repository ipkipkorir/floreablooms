/***********************************************
Responsive navigation
************************************************/
function openNav() {
	var show_nav_bar = document.getElementById("nav-bar");
	show_nav_bar.style.display = "flex";
			
	var hide_icon_menu = document.getElementById("icon-menu");
	hide_icon_menu.style.display = "none";
}

function closeNav() {
	var hide_nav_bar = document.getElementById("nav-bar");
	hide_nav_bar.style.display = "none";

	var show_icon_menu = document.getElementById("icon-menu");
	show_icon_menu.style.display = "flex";
}
document.querySelector(".icon-menu").addEventListener("click", openNav);
document.querySelector(".close-menu").addEventListener("click", closeNav);



/**************************************
Slideshow animation
**************************************/
/**Select all images and hold them in a constant variable **/
/**Set the delay time and the slide-div counter**/
const slide_show_div = document.querySelectorAll('.banner .slideshow')
const next_slide_delay = 4000;
let current_slide_counter = 0;

/**Display the slides one at a time**/
slide_show_div[current_slide_counter].classList.add('active');//.style.display = block;

setInterval(nextSlide, next_slide_delay);

function nextSlide() {
	slide_show_div[current_slide_counter].classList.remove('active');//style.display = none;
	current_slide_counter = (current_slide_counter + 1) % slide_show_div.length;
	slide_show_div[current_slide_counter].classList.add('active');//style.display = block;
}