var dishSearchController = function (view, model, app) {

    view.searchDishButton.click(function () {
        view.searchUpdate();
    });

    this.updateDishes = function () {
        ImageClick();
    }
    var ImageClick = function () {
        view.container.find(".dishBtn").click(function () {
            model.setSelectedDishId(this.id);
            app.showDishDetailsScreen();
        })
    }
    ImageClick();

    view.onload = function () {
        console.log("REACHED!");
        view.dishesBody.addEventListener("click", function (evt) {
            if (evt.target && evt.target.class == "dishBtn") {
                console.log(evt);
            }
        });
    }


}