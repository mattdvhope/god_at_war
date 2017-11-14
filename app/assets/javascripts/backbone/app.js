//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

console.log("in init");


var App = {

  getFrontMainPage: function() {
    getFrontMainPage(); // in 'app_methods' folder
  },

  init: function() {
    this.getFrontMainPage();
console.log("in init");
  }

};

App.init();