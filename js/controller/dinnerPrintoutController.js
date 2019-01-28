var dinnerPrintoutController = function (view, model, app) {

    view.goBackButton.click(function () {
        app.showSelectDishScreen();
    });
}