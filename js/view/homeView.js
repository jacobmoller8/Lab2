var homeView = function (container, model) {
	console.log("reached");
	var newDinnerBtn = container.getElementById("#newDinnerButton");
	var listener = function (evt) {
		alert(evt.type + ' event on "' + evt.target.innerHTML + '"');
	}

	newDinnerBtn.addEventListener("click", listener, false);

}
