// Code from Seminar 2 page on canvas

var GeneralController = function() {
    var views = {};
    var screens = {};
    
    var hideAll = function(){
        for(var key in views){
            views[key].hide();
        }
    }
    
    this.addView = function(view){
        views.push(view);
    }

    this.addScreen = function(name, views) {
        screen[name] = views;
    }

    this.showScreen = function(name) {
        hideAll();
        for(var key in screens[name]){
            screens[name][key].show();
        }
    }
}