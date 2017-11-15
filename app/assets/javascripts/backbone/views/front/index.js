var IndexView = Backbone.View.extend({

  template:  HandlebarsTemplates['front/index'],

  initialize: function() {
    this.$el.appendTo("#entire");
  },

  render: function() {
    this.$el.html(this.template());
  }

});