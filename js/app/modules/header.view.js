define([
	'jquery',
	'text!templates/header.html',
	],function($,template){
	Vheader = Backbone.View.extend({
		events:{},
		initialize: function(){
    		$(this.el).removeData().unbind();
			this.template = template;
			this.render();
		},
		render: function(){
			var self = this;
			$(self.el).append(_.template(this.template,{model:this.model}));
			return this;
		}
	});
	return Vheader;
});