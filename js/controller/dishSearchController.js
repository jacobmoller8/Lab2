var dishSearchController = function (view, model, app) {

    view.searchDishButton.click(function () {
        view.searchUpdate();
    });

    this.update = function () {
        ImageClick();
    }

    var ImageClick = function () {
        view.container.find(".dishBtn").click(function () {
            console.log("test");
            model.setSelectedDishId(this.id);
            app.showDishDetailsScreen();
        })
    }
    ImageClick();
    model.addObserver(this);
}