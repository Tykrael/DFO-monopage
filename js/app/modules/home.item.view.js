define(['underscore','jquery','backbone','text!templates/home.item.html'],function(_,$,Backbone,template){
	VitemHome = Backbone.View.extend({
		events:{},
		initialize: function(){
			this.template =  _.template(template);
			this.render();
		},
		render: function(){
			var self = this;
			var cTpl = self.template({model: self.model});
			$('.contentList').append(cTpl);
			return this;
		}
	});
	return VitemHome;
});