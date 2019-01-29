var sideBarController = function (view, model, app) {

	this.update = function () {
		confirmBtnClick();
	}

	var confirmBtnClick = function () {
		view.container.find("#sideBarConfirmBtn").click(function () {
			app.showDinnerOverviewScreen();
		})
	}

	model.addObserver(this);

}