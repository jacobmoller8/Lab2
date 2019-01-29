var dishSearchController = function (view, model, app) {

    view.searchDishButton.click(function () {
        view.searchUpdate();
    });

    this.update = function () {
        dishClick();
    }

    var dishClick = function () {
        view.container.find(".dishBtn").click(function () {
            console.log("test");
            model.setSelectedDishId(this.id);
            app.showDishDetailsScreen();
        })
    }
    dishClick();
    model.addObserver(this);
}