$(function () {
	//We instantiate our model
	var model = new DinnerModel();

	// And create the instance of ExampleView

	var homeView = new homeView($('#homeView'), model);
	var homeController = new homeController(homeView, model, this);

	var DinnerOverviewView = new dinnerOverviewView($('#dinner_overview'), model);
	var DinnerOverviewController = new dinnerOverviewController(DinnerOverviewView, model, this);

	var dishSearchView = new dishSearchView($('#select_dish'), model);
	var dishSearchController = new dishSearchController(dishSearchView, model, this);

	var sideBarView = new sideBarView($('sideBarView'), model);
	var sideBarController = new sideBarController(sideBarView, model, this);

	var mobileNavbarView = new mobileNavbarView($('#navBarView'), model);
	var mobileNavbarController = new mobileNavbarController(mobileNavbarView, model, this);

	var DinnerPrintoutView = new dinnerPrintoutView($('#dinner_printout'), model);
	var DinnerPrintoutController = new dinnerPrintoutController(DinnerPrintoutView, model, this);

	var DishDetailsView = new dishDetailsView($('#dishDetailsView'), model);
	var DishDetailsController = new dishDetailsController(DishDetailsView, model, this);


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