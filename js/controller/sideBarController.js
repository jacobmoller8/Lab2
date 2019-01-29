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
		// This row ensures that the DOM value keeps in sync with the model value
		inputSelector[0].value = model.getNumberOfGuests();
	}
	confirmBtnClick();
	numberOfGuestsClicked();


}