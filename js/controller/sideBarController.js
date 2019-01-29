var sideBarController = function (view, model, app) {
	this.update = function () {
		confirmBtnClick();
		numberOfGuestsClicked();
	}

	var confirmBtnClick = function () {
		view.container.find("#sideBarConfirmBtn").click(function () {
			app.showDinnerOverviewScreen();
		})
	}

	var numberOfGuestsClicked = function(){
		var inputSelector = view.container.find("#peopleSelector");
		inputSelector.click(function () {
			var nrOfPeople = inputSelector[0].value;
			model.setNumberOfGuests(parseInt(nrOfPeople));
		})
		

	}
	confirmBtnClick();
	numberOfGuestsClicked();


}