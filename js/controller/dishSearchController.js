var dishSearchController = function (view, model, app) {

    view.searchDishButton.click(function () {
        view.searchUpdate();
    });

    this.update = function () {
        ImageClick();
    }

    var ImageClick = function () {
        view.container.find(".dishBtn").click(function () {
            console.log("hej")
            model.setSelectedDishId(this.id);
            app.showDishDetailsScreen();
        })
    }
    ImageClick();
}