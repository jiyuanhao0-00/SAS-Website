/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

	Custom JavaScript for FIT1050 Assignment 3.

	Features:
	1. Join activity recommendation form.
	2. Image gallery.
*/

document.addEventListener("DOMContentLoaded", function () {
	const interestForm = document.querySelector("#interest-form");
	const interestSelect = document.querySelector("#interest-select");
	const activityResult = document.querySelector("#activity-result");

	if (interestForm && interestSelect && activityResult) {
		interestForm.addEventListener("submit", function (event) {
			event.preventDefault();

			const recommendations = {
				events: "Recommended activity: join our next art party and social night.",
				careers: "Recommended activity: attend our creative career panel.",
				publishing: "Recommended activity: contribute to the next Splinter publication.",
				support: "Recommended activity: join a student-designed academic support workshop."
			};

			const selectedInterest = interestSelect.value;

			if (selectedInterest === "") {
				activityResult.textContent = "Please choose an activity first.";
			} else {
				activityResult.textContent = recommendations[selectedInterest];
			}
		});
	}

	const galleryImage = document.querySelector("#gallery-image");
	const prevButton = document.querySelector(".gallery-prev");
	const nextButton = document.querySelector(".gallery-next");
	const galleryDots = document.querySelectorAll(".gallery-dots button");

	const galleryImages = [
		{
			src: "images/gallery-1.png",
			alt: "Image of students collaborating in an arts workshop"
		},
		{
			src: "images/gallery-2.png",
			alt: "Image of students presenting creative work"
		},
		{
			src: "images/gallery-3.png",
			alt: "Image of students presenting creative work"
		},
		{
			src: "images/gallery-4.png",
			alt: "Image of students attending a social arts event"
		}
	];

	let currentGalleryIndex = 0;

	function updateGallery(index) {
		if (!galleryImage) {
			return;
		}

		currentGalleryIndex = index;

		if (currentGalleryIndex < 0) {
			currentGalleryIndex = galleryImages.length - 1;
		}

		if (currentGalleryIndex >= galleryImages.length) {
			currentGalleryIndex = 0;
		}

		galleryImage.style.opacity = "0";

		window.setTimeout(function () {
			galleryImage.src = galleryImages[currentGalleryIndex].src;
			galleryImage.alt = galleryImages[currentGalleryIndex].alt;
			galleryImage.style.opacity = "1";
		}, 160);

		galleryDots.forEach(function (dot, dotIndex) {
			if (dotIndex === currentGalleryIndex) {
				dot.classList.add("current");
			} else {
				dot.classList.remove("current");
			}
		});
	}

	if (galleryImage && prevButton && nextButton && galleryDots.length > 0) {
		prevButton.addEventListener("click", function () {
			updateGallery(currentGalleryIndex - 1);
		});

		nextButton.addEventListener("click", function () {
			updateGallery(currentGalleryIndex + 1);
		});

		galleryDots.forEach(function (dot, index) {
			dot.addEventListener("click", function () {
				updateGallery(index);
			});
		});
	}
});