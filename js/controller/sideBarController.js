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
		console.log(inputSelector);
		var nrOfPeople = inputSelector.value;
		console.log(parseInt(nrOfPeople));
		inputSelector.click(function () {
			model.setNumberOfGuests(parseInt(nrOfPeople));
		})
		

	}

	model.addObserver(this);

}