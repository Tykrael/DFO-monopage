define([
	'jquery',
	'text!templates/footer.html',
	],function($,template){
	Vfooter = Backbone.View.extend({
		events:{},
		initialize: function(){
    		$(this.el).removeData().unbind();
    		this.template = _.template(template);
    		this.render();
    	},
		render: function(){
			var self = this;
			var cTpl = self.template({model:this.model});
			$(self.el).html(cTpl);
			return this;
		}
	});
	return Vfooter;
});