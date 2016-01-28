define(['underscore','jquery','backbone','text!templates/exemples/home.item.html'],function(_,$,Backbone,template){
	VitemHomeEx = Backbone.View.extend({
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
	return VitemHomeEx;
});