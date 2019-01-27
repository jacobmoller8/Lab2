$(function () {
	//We instantiate our model
	var model = new DinnerModel();

	// And create the instance of ExampleView

	var homeView = new homeView($('#homeView'), model);
	var homeController = new homeController(homeView, model, this);

	var DinnerOverviewView = new dinnerOverviewView($('#dinner_overview'), model);
	var DinnerOverviewController = new dinnerOverviewController(DinnerOverviewView, model, this);

	var SelectDishView = new selectDishView($('#select_dish'), model);
	var SelectDishController = new selectDishController(SelectDishView, model, this);

	var DinnerPrintoutView = new dinnerPrintoutView($('#dinner_printout'), model);
	var DinnerPrintoutController = new dinnerPrintoutController(DinnerPrintoutView, model, this);

	var DishDetailsView = new dishDetailsView($('#dishDetailsView'), model);
	var DishDetailsController = new dishDetailsController(DishDetailsView, model, this);

	var SelectDishAgainView = new selectDishAgainView($('#select_dish_view'), model);
	var SelectDishAgainController = new selectDishAgainController(SelectDishAgainView, model, this);

	var hideAllViews = function(){
        homeView.hide();
        DinnerOverviewView.hide();
        SelectDishView.hide();
		DinnerPrintoutView.hide();
		DishDetailsView.hide();
        SelectDishAgainView.hide();
    }

	// TODO: 
	// - VI MÅSTE LÄGGA TILL show() OCH hide() FUNKTIONER TILL VARJE VIEW
	// - SKRIVA OM VIEWS:en OVAN, FÖLJANDE VIEWS HAR VI:
	//		- Mobile Navbar
	// 		- Home View
	//		- Side Bar View
	//		- Dish search View
	//		- Dish details View
	//		- Dinner Overview View
	//		- Dinner Printout View

	// VARJE SCREEN ÄR EN SIDA FRÅN PROTOTYPEN
	this.showHomeScreen = function(){
		// I VARJE SCREEN SKA VI VISA DE "VIEWS" SOM ÄR AKTUELLA
        hideAllViews();
        homeView.show();
    }

	this.showSelectDishScreen = function(){
		hideAllViews();
	}

	this.showDishDetailsScreen = function(){
		hideAllViews();
	}

	this.showDinnerOverviewScreen = function(){
		hideAllViews();
	}

	this.showDinnerPrintoutScreen = function(){
		hideAllViews();
	}


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});