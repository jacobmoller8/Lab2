var sideBarView = function (container, model) {

    var dishSummary = container.find(".dinnerSummary");
    var topBarSummary = container.find("#topBarSum");
    var row_start = '<div class="row">';
    var row_end = '</div>';

    var menu = model.getFullMenu();
    var allSelectedDishes = [];

    for (dish in menu) {
        allSelectedDishes.push(model.getDish(menu[dish]))
    }

    var selectedDishesPrint = "";
    var price = "";

    for (p in allSelectedDishes) {
        price = model.getDishPrice(allSelectedDishes[p]);
        selectedDishesPrint += '<p class="sideDishName col-6" id="selectedDishName">' + allSelectedDishes[p].name + '</p>' +
            '<p class="sideCost col-6" id="selectedDishCost">' + price + '</p>'
    }

    var totalSum = '<p class="sideSum offset-6 col-6" id="menuSum"> SEK ' + model.getTotalMenuPrice() + '</p>';
    var topTotalSum = '<h5 id="topBarSumText"> SEK ' + model.getTotalMenuPrice() + '</h5>';

    topBarSummary.html(row_start + topTotalSum + row_end);
    dishSummary.html(row_start + selectedDishesPrint + totalSum + row_end);

}