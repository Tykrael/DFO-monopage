define([
	'text!templates/nav.html',
	'text!templates/nav.item.html','underscore','jquery','backbone','Mnav','Cnav'
	],function(template,templateItem){
	Vnav = Backbone.View.extend({
		events:{},
		initialize: function(){
    		$(this.el).removeData().unbind();
			var self = this;
			this.template = _.template(template);
			this.collection = new Cnav();
			_.each(this.model.attributes.content,function(data,k){
				self.collection.addNavItem(data)
			})
			this.render();
		},
		render: function(){
			var self = this;
			var cTpl = self.template({model:self.model});
			$(self.el).append(cTpl);
			_.each(this.collection.models,function(data,k){
				var itemTpl = _.template(templateItem);
				var cItemTpl = itemTpl({model:data});
				$('nav ol').append(cItemTpl);
			})
			return this;
		}
	});
	return Vnav;
});