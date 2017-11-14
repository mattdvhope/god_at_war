var IndexView = Backbone.View.extend({

  template:  HandlebarsTemplates['front/index'],
  
  initialize: function() {
    this.$el.appendTo(".entire");
  },

  events: {
    // 'click #be-a-member-point': function (e) {
    //   var el = document.getElementById("be-a-member");
    //   el.scrollIntoView();
    // },
  },

  render: function() {
    this.$el.html(this.template({
      // window_big: this.window_width(),
      // thai_language: thai_language(),
      // schedule: this.schedule(),
      // login: this.login_button_language(),
      // register: this.register_button_language(),
      // volunteer: this.volunteer_button_language(),
      // features: this.features_language(),
      // helping_friends: this.helping_friends(),
      // christian_worldview: this.christian_worldview(),
      // cost_amount: this.cost_amount(),
      // press_enter: this.press_enter()
    }));
  }
});

