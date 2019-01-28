var dishSearchView = function (container, model) {

    this.searchDishButton = container.find('#searchDishButton');
    var dishSpan = container.find("#dishesSpan");
    var allStarterDishes = model.getAllDishes("starter");
    var allMainDishes = model.getAllDishes("main dish");
    var allDesertDishes = model.getAllDishes("dessert");

    var getDishesHTML = function (allDishes) {

        var row_start = "<div class=" + 'row justify-content-start' + ">";
        var dishesToPrint = getDishHTML(allDishes);
        var row_end = "</div>";
        dishSpan.html(row_start + dishesToPrint + row_end);
    }

    var getDishHTML = function (allDishes) {
        var dishesToPrint = "";
        for (var i = 0; i < allDishes.length; i++) {
            var dish = allDishes[i];
            dishesToPrint += '<div class="container-fluid col-12 col-lg-3 col-md-3 col-sm-4 imgCont">' +
                '<img src="images/' + dish.image + '" width="100%" class="img-fluid foodPic" alt="Responsive image"/>' +
                '<button class="btn btn-secondary dishBtn">' + dish.name + '</button>' + '</div>'
        }
        return dishesToPrint;
    }

    this.searchUpdate = function () {
        var filterValue = document.getElementById('filterInput').value;
        var typeSelector = document.getElementById('typeSelect');
        var typeValue = typeSelector[typeSelector.selectedIndex].value;

        if (typeValue == "all") {
            var allDishes = allStarterDishes.concat(allMainDishes).concat(allDesertDishes);
        } else {
            var allDishes = model.getAllDishes(String(typeValue), String(filterValue));
        }
        getDishesHTML(allDishes);
    }

    //var allDishes = allStarterDishes.concat(allMainDishes).concat(allDesertDishes);

    var allDishes = model.getAllDishes("starter");

    getDishesHTML(allDishes);


    this.show = function () {
        container.show();
    };
    this.hide = function () {
        container.hide();
    };
}