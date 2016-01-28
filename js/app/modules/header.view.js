define([
	'jquery',
	'text!templates/header.html',
	],function($,template){
	Vheader = Backbone.View.extend({
		events:{},
		initialize: function(){
    		$(this.el).removeData().unbind();
			this.template = _.template(template);
			this.render();
		},
		render: function(){
			var self = this;
			var cTpl = self.template({model:self.model});
			$(self.el).append(cTpl);
			return this;
		}
	});
	return Vheader;
});