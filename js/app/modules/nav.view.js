define([
	'text!templates/nav.html',
	'text!templates/nav.item.html','underscore','jquery','backbone','Mnav','Cnav'
	],function(template,templateItem){
	Vnav = Backbone.View.extend({
		events:{},
		initialize: function(){
    		$(this.el).removeData().unbind();
			var self = this;
			this.template = template;
			this.collection = new Cnav();
			_.each(this.model.attributes.content,function(data,k){
				self.collection.addNavItem(data)
			})
			this.render();
		},
		render: function(){
			var self = this;
			$(self.el).append(_.template(this.template,{model:this.model}));
			_.each(this.collection.models,function(data,k){
				$('nav ol').append(_.template(templateItem,{model:data}))
			})
			return this;
		}
	});
	return Vnav;
});