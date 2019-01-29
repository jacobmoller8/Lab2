var dishDetailsController = function (view, model, app) {
	console.log("dishDetails Controller Loaded!");

	view.onload = console.log("view file loaded, här hade jag velat lägga till knappfunktionen");
	//view.backToSearchBtn.click(clickEvt);


	var clickEvt = function () {
		view.container.find(".dishBtn").click(function () {
			model.setSelectedDishId(this.id);
			app.showDishDetailsScreen();
		})
		console.log("clicked!");
		app.showSelectDishScreen();
	}


}