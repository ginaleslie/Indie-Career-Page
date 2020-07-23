// let darkmode = localStorage.getItem('darkMode')
// const darkModeToggle = document.querySelector('#dark-mode-toggle')

// const enableDarkMode = () => {
//   document.body.classList.add('darkmode')
//   localStorage.setItem('darkMode', 'enabled')
// }

// const disableDarkMode = () => {
//   document.body.classList.remove('darkmode')
//   localStorage.setItem('darkMode', null)
// }

// if (darkmode === 'enabled') {
//   enableDarkMode()
// }

// darkModeToggle.addEventListener('click', () => {
//   darkmode = localStorage.getItem('darkMode')

//   if (darkmode !== 'enabled') {
//     enableDarkMode()
//   } else {
//     disableDarkMode()
//   }
// })
const themeStylesheet = document.getElementById("theme");
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
	themeStylesheet.href = storedTheme;
}
const themeToggle = document.getElementById("theme-toggle");

function theme() {
	// if it's light -> go dark
	if (themeStylesheet.href.includes("light")) {
		themeStylesheet.href = "../css/dark-theme.css" || "./css/dark-theme.css";
		themeToggle.innerText = "Switch to light mode";
	} else {
		// if it's dark -> go light
		themeStylesheet.href = "../css/light-theme.css" || "./css/light-theme.css";
		themeToggle.innerText = "Switch to dark mode";
	}
	localStorage.setItem("theme", themeStylesheet.href);

	false;
}
themeToggle.addEventListener("click", theme);
