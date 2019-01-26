$(function () {
	//We instantiate our model
	var model = new DinnerModel();

	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"));

	var DinnerOverviewView = new dinnerOverviewView($('#dinner_overview'), model);
	var DinnerOverviewController = new dinnerOverviewController($(DinnerOverviewView), model);

	var SelectDishView = new selectDishView($('#select_dish'), model);
	var SelectDishController = new selectDishController($(SelectDishView), model);

	var DinnerPrintoutView = new dinnerPrintoutView($('#dinner_printout'), model);
	var DinnerPrintoutController = new dinnerPrintoutController($(DinnerPrintoutView), model);

	var DishDetailsView = new dishDetailsView($('#dish_details'), model);
	var DishDetailsController = new dishDetailsController($(DishDetailsView), model);

	var SelectDishAgainView = new selectDishAgainView($('#select_dish_view'), model);
	var SelectDishAgainController = new selectDishAgainController($(SelectDishAgainView), model);


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});