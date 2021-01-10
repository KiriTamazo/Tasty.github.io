const openBtn = document.getElementById("openBtn");
const closeBtn = "bx-x";
/* =============Show Menu ============= */
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId);
	const nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show-menu");
			// openBtn.classList.toggle(closeBtn)
			if (nav.classList.contains("show-menu")) {
				openBtn.classList.add(closeBtn);
			} else {
				openBtn.classList.remove(closeBtn);
			}
		});
	}
};
showMenu("nav-toggle", "nav-menu");

/* =============Remove Menu ============= */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show-menu");
	openBtn.classList.remove(closeBtn);
};
navLink.forEach((x) => x.addEventListener("click", linkAction));

/* =============Remove Menu ============= */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		const sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(`.nav__menu a[href *=${sectionId}]`)
				.classList.add("active-link");
		} else {
			document
				.querySelector(`.nav__menu a[href *=${sectionId}]`)
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);

/* =============Change header background ============= */
const scrollHeader = () => {
	const nav = document.getElementById("header");

	if (this.scrollY >= 200) {
		nav.classList.add("scroll-header");
	} else {
		nav.classList.remove("scroll-header");
	}
};
window.addEventListener("scroll", scrollHeader);
/* =============Show scroll top ============= */
const scrollTop = () => {
	const scrolltop = document.getElementById("scroll-top");

	if (this.scrollY >= 560) {
		scrolltop.classList.add("scroll-top");
	} else {
		scrolltop.classList.remove("scroll-top");
	}
};
window.addEventListener("scroll", scrollTop);

/* =============Dark light Theme============= */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
		darkTheme
	);
	themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});

/* =============Scroll Reveal Animation ============= */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})