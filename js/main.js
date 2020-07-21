(function () {
	"use strict";
	window.addEventListener(
		"load",
		function () {
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var formOne = document.getElementsByClassName("needs-validation-1");
			// Loop over them and prevent submission
			var validation = Array.prototype.filter.call(formOne, function (formOne) {
				document.getElementById("next").addEventListener(
					"click",
					function (event) {
						if (formOne.checkValidity() === false) {
							event.preventDefault();
							event.stopPropagation();
						} else {
							window.scrollTo(0, 0);
							document.getElementById("next").innerHTML = "yeet";
							event.preventDefault();
							event.stopPropagation();
							document.getElementById("form-1").style.display = "none";
							document.getElementById("form-2").style.display = "block";
						}
						formOne.classList.add("was-validated");
					},
					false
				);
			});
			var formTwo = document.getElementsByClassName("needs-validation-2");
			// Loop over them and prevent submission
			var validation = Array.prototype.filter.call(formTwo, function (form) {
				form.addEventListener(
					"submit",
					function (event) {
						if (form.checkValidity() === false) {
							event.preventDefault();
							event.stopPropagation();
						} else {
							event.preventDefault();
							event.stopPropagation();
							document.getElementById("form-popup").style.display = "block";
						}
						form.classList.add("was-validated");
					},
					false
				);
			});
		},
		false
	);
})();
