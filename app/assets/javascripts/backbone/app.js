//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

  var App = {
    getIndex: function() {
      var main_page = new IndexView();
      main_page.render();
    },

    init: function() {
      this.getIndex();
    }

  };

  App.init();
