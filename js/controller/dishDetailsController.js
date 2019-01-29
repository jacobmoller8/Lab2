var dishDetailsController = function (view, model, app) {
	var viewLoad = view.loadView;
	console.log("reached stage 1");

    this.update = function () {
		console.log("reached stage 2")
		viewLoad.onload = clickEvt();
		
	}

	var clickEvt = function () {
		console.log("reached stage 3");
		var backToSearchButton = view.container.find("#backToSearchBtn");
        backToSearchButton.click(function () {
            app.showSelectDishScreen()})
		};

	clickEvt();
	
    }

	/* 
	var clickEvt = function () {
		view.container.find("#backToSearchBtn").click(function () {
			model.setSelectedDishId(this.id);
			app.showDishDetailsScreen();
		})
		console.log("clicked!");
		app.showSelectDishScreen();
	}
	*/

