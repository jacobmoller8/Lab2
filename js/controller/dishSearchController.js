var dishSearchController = function (view, model, app) {

    view.searchDishButton.click(function () {
        view.searchUpdate();
    });
    view.onload=function(){
        console.log("REACHED!");
        view.dishesBody.addEventListener("click", function(evt){
            if(evt.target && evt.target.class == "dishBtn") {
                console.log(evt);
            }
        });
      }


}