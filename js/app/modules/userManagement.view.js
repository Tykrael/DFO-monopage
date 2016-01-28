define(['text!templates/article.html'],function(template){
	VuserManagement = Backbone.View.extend({
		events:{},
		itemTitle : undefined,
		initialize: function(idata){
    		$(this.el).removeData().unbind();
			var self = this;
			this.itemTitle = idata.query;
			this.template = _.template(template);
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
				var cTpl = self.template({model: data});
				$(self.el).html(cTpl);
			})

			return this;
		}
	});
	return VuserManagement;
});