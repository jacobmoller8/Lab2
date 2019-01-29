var dishDetailsController = function (view, model, app) {
	console.log("dishDetails Controller Loaded!");

	view.onload = console.log("view file loaded, här hade jag velat lägga till knappfunktionen");
	//view.backToSearchBtn.click(clickEvt);
	

	var clickEvt = function(){
		console.log("clicked!");
		app.showSelectDishScreen();
	}


}