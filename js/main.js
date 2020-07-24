const dysToggle = document.getElementById("dys-toggle");

bodyId = document.getElementById("changeFont");
var showDys;
dysToggle.addEventListener("click", dys);
function dys() {
	showDys = !showDys;

	if (showDys === true) {
		bodyId.style.fontFamily = "OpenDyslexic";

		dysToggle.innerText = "Disable font";
	} else {
		bodyId.style.fontFamily = "Roboto";

		dysToggle.innerText = "Enable font";
	}

	localStorage.setItem("font", bodyId.style.fontFamily);

	localStorage.setItem("fontText", dysToggle.innerText);
}

const storedFam = localStorage.getItem("font");

if (storedFam) {
	bodyId.style.fontFamily = storedFam;
}

const storedText = localStorage.getItem("fontText");
if (storedText) {
	dysToggle.innerText = storedText;
}

const storedBool = localStorage.getItem("fontBool");
if (storedBool) {
	showDys = storedBool;
}
localStorage.setItem("fontBool", showDys);
