var dinnerOverviewController = function (view, model, app) {
	view.printRecipeButton.click(function () {
		app.showDinnerPrintoutScreen();
	});
	view.goBackButton.click(function () {
		app.showSelectDishScreen();
	});
}