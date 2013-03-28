define([
	'jquery',
	'text!templates/footer.html',
	],function($,template){
	Vfooter = Backbone.View.extend({
		events:{},
		initialize: function(){
    		$(this.el).removeData().unbind();
    		this.template = template;
    		this.render();
    	},
		render: function(){
			var self = this;
			$(self.el).html(_.template(this.template,{model:this.model}));
			return this;
		}
	});
	return Vfooter;
});