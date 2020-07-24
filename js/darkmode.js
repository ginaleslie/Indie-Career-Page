let darkmode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
	document.body.classList.add("darkmode");
	localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
	document.body.classList.remove("darkmode");
	localStorage.setItem("darkMode", null);
};

if (darkmode === "enabled") {
	enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
	darkmode = localStorage.getItem("darkMode");

	if (darkmode !== "enabled") {
		enableDarkMode();
		darkModeToggle.innerHTML = "Enable dark mode";
	} else {
		disableDarkMode();
		darkModeToggle.innerHTML = "Disable dark mode";
	}
});
