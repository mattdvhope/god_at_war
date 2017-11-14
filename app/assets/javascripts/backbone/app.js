//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./called
//= require_tree ./views
//= require_tree ./routers
//= require_tree ./app_methods

var App = {

  getFrontMainPage: function() {
    getFrontMainPage(); // in 'app_methods' folder
  },

  init: function() {
    this.getFrontMainPage();
  }

};

App.init();