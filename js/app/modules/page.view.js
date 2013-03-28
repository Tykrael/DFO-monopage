define([
	'jquery',
	'text!templates/page.html',
	],function($,template){
	Vpage = Backbone.View.extend({
		events:{},
		initialize: function(idata){
			var self = this;
    		$(this.el).removeData().unbind();
			this.template = template;

			this.collection = pages = pages || new Cpage();
			this.collection.getPageData(idata.query);
			this.collection.on('add',function(model){
				self.model = model;
				self.render();

			})
			//this.render();
		},
		render: function(){
			var self = this;
			$(self.el).html(_.template(this.template,{model:this.model}));
			return this;
		}
	});
	return Vpage;
});