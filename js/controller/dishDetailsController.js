var dishDetailsController = function (view, model, app) {

	this.update = function () {
		backButtonClick();

	}
	var backButtonClick = function () {
		view.container.find("#backToSearchBtn").click(function () {
			app.showSelectDishScreen();
		})
	}
	model.addObserver(this);
}


