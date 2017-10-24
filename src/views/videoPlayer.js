var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    console.log(this.model.attributes);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
