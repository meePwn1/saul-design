"use strict";

window.addEventListener("load", windowLoad);

function windowLoad() {
	document.addEventListener("click", documentActions);
}

function documentActions(e) {
	const target = e.target;

	// Scroll To...
	if (target.hasAttribute('data-goto')) {
		const gotoElement = document.querySelector(`${target.dataset.goto}`);
		const headerHeight = document.querySelector('.header').offsetHeight;

		if (gotoElement) {
			window.scrollTo({
				top: gotoElement.offsetTop - headerHeight,
				behavior: "smooth"
			})
		}
	}
	e.preventDefault();

	// Work filter
	if (target.classList.contains('filter-works__type') && !target.classList.contains('active')) {
		const activeElement = document.querySelector('.filter-works__type.active');
		const elements = document.querySelectorAll('.filter-works__item');
		const elementType = target.dataset.workType;

		activeElement.classList.remove('active');
		target.classList.add('active');

		elements.forEach(element => {
			!elementType || element.dataset.workType === elementType ?
				element.hidden = false : element.hidden = true;
		})
	}
}