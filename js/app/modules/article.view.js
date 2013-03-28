define([
	'jquery',
	'text!templates/article.html',
	],function($,template){
	Varticle = Backbone.View.extend({
		events:{},
		itemTitle : undefined,
		initialize: function(idata){
    		$(this.el).removeData().unbind();
			var self = this;
			this.itemTitle = idata.query;
			this.template = template;
			this.collection = contents = contents || new Ccontents();
			if(!this.collection.length){
				this.collection.on('reset',function(){
					self.render();
				})
			}else{
				self.render();
			}

		},
		render: function(){
			var self = this;
			_.each(this.collection.where({title:this.itemTitle}),function(data){
				$(self.el).html(_.template(self.template,{model:data}));
			})

			return this;
		}
	});
	return Varticle;
});