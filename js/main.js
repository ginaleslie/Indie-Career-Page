$(function () {
	const dysToggle = document.getElementById("dys-toggle");

	bodyId = document.getElementById("changeFont");
	// navId = document.getElementById("changeFontNav");
	// bold = document.getElementById("bold");
	// regular = document.getElementById("regular");

	dysToggle.addEventListener("click", dys);
	function dys() {
		showDys = !showDys;

		if (showDys === true) {
			bodyId.style.fontFamily = "OpenDyslexic";
			// navId.style.fontFamily = "OpenDyslexic";
			// bold.style.fontFamily = "OpenDyslexic";
			// regular.style.fontFamily = "OpenDyslexic";
			dysToggle.innerText = "Disable font";
		} else {
			// navId.style.fontFamily = "Roboto";
			bodyId.style.fontFamily = "Roboto";
			// bold.style.fontFamily = "robotomedium";
			// regular.style.fontFamily = "robotoregular";
			dysToggle.innerText = "Enable font";
		}

		localStorage.setItem("font", bodyId.style.fontFamily);
		// localStorage.setItem("fontNav", navId.style.fontFamily);
		// localStorage.setItem("fontBoldOne", bold.style.fontFamily);
		// localStorage.setItem("fontRegOne", regular.style.fontFamily);
		localStorage.setItem("fontText", dysToggle.innerText);
	}

	const storedFam = localStorage.getItem("font");

	if (storedFam) {
		bodyId.style.fontFamily = storedFam;
	}
	// const storedFamNav = localStorage.getItem("fontNav");
	// if (storedFamNav) {
	// 	navId.style.fontFamily = storedFamNav;
	// }

	const storedText = localStorage.getItem("fontText");
	if (storedText) {
		dysToggle.innerText = storedText;
	}
	// const storedBold = localStorage.getItem("fontBoldOne");
	// if (storedBold) {
	// 	bold.style.fontFamily = storedBold;
	// }

	const storedBool = localStorage.getItem("fontBool");
	if (storedBool) {
		showDys = storedBool;
	}
	localStorage.setItem("fontBool", showDys);
});
