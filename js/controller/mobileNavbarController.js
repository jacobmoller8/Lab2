var mobileNavbarController = function (view, model, app) {
    this.update = function () {
		confirmBtnClick();
		numberOfGuestsClicked();
	}

	var confirmBtnClick = function () {
		view.container.find("#navBarConfirmBtn").click(function () {
			app.showDinnerOverviewScreen();
		})
	}

	var numberOfGuestsClicked = function(){
		var inputSelector = view.container.find("#mobilePeopleSelector");
		inputSelector.click(function () {
			var nrOfPeople = inputSelector[0].value;
			model.setNumberOfGuests(parseInt(nrOfPeople));
		})
		

	}
	confirmBtnClick();
	numberOfGuestsClicked();


}