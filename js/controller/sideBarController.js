var sideBarController = function (view, model, app) {
	
	this.update = function () {
		confirmBtnClick();
		numberOfGuestsClicked();
		removeDishClick();
	}

	var confirmBtnClick = function () {
		view.container.find("#sideBarConfirmBtn").click(function () {
			app.showDinnerOverviewScreen();
		})
	}

	var numberOfGuestsClicked = function(){
		var inputSelector = view.container.find("#peopleSelector");
		// The off() function is important, otherwise it got bound to the button everytime it got clicked and the event fired exponentially
		inputSelector.off().click(function () {
			var nrOfPeople = inputSelector[0].value;
			model.setNumberOfGuests(parseInt(nrOfPeople));
		})
		// This row ensures that the DOM value keeps in sync with the model value
		inputSelector[0].value = model.getNumberOfGuests();
	}

	var removeDishClick = function () {
        view.container.find(".sideBarDishItem").click(function () {
			console.log(this.id);
            model.removeDishFromMenu(parseInt(this.id));
		})
	}
	model.addObserver(this);
	removeDishClick();
	confirmBtnClick();
	numberOfGuestsClicked();


}