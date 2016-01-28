define(['text!templates/exemples/footer.html'],function(template){
	VfooterEx = Backbone.View.extend({
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
	return VfooterEx;
});