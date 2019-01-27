$(function () {

	var model = new DinnerModel();

	var HomeView = new homeView($('#homeView'), model);
	var HomeController = new homeController(HomeView, model, this);

	var DinnerOverviewView = new dinnerOverviewView($('#dinner_overview'), model);
	var DinnerOverviewController = new dinnerOverviewController(DinnerOverviewView, model, this);

	var DishSearchView = new dishSearchView($('#select_dish'), model);
	var DishSearchController = new dishSearchController(DishSearchView, model, this);

	var SideBarView = new sideBarView($('sideBarView'), model);
	var SideBarController = new sideBarController(SideBarView, model, this);

	var MobileNavbarView = new mobileNavbarView($('#navBarView'), model);
	var MobileNavbarController = new mobileNavbarController(MobileNavbarView, model, this);

	var DinnerPrintoutView = new dinnerPrintoutView($('#dinner_printout'), model);
	var DinnerPrintoutController = new dinnerPrintoutController(DinnerPrintoutView, model, this);

	var DishDetailsView = new dishDetailsView($('#dishDetailsView'), model);
	var DishDetailsController = new dishDetailsController(DishDetailsView, model, this);


	var hideAllViews = function () {
		HomeView.hide();
		DinnerOverviewView.hide();
		SelectDishView.hide();
		DinnerPrintoutView.hide();
		DishDetailsView.hide();
		SelectDishAgainView.hide();
	}

	// TODO: 
	// - VI MÅSTE LÄGGA TILL show() OCH hide() FUNKTIONER TILL VARJE VIEW


	// VARJE SCREEN ÄR EN SIDA FRÅN PROTOTYPEN
	this.showHomeScreen = function () {
		// I VARJE SCREEN SKA VI VISA DE "VIEWS" SOM ÄR AKTUELLA
		hideAllViews();
		HomeView.show();
	}

	this.showSelectDishScreen = function () {
		hideAllViews();
		// SKER MOBILANPASSNINGEN HÄR?
		// TYP "If (device == mobile){ mobileNavBarView.show(); }" ELLER NÅGOT I STIL MED DET?
		SideBarView.show();
		SelectDishView.show();
	}

	this.showDishDetailsScreen = function () {
		hideAllViews();
		DishDetailsView.show()
	}

	this.showDinnerOverviewScreen = function () {
		hideAllViews();
		DinnerOverviewView.show()
	}

	this.showDinnerPrintoutScreen = function () {
		hideAllViews();
		DinnerPrintoutView.show()
	}


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});