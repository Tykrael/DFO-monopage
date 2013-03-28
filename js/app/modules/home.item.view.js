define(['underscore','jquery','backbone','text!templates/home.item.html'],function(_,$,Backbone,template){
	VitemHome = Backbone.View.extend({
		events:{},
		initialize: function(){
			this.template = template;
			this.render();
		},
		render: function(){
			var self = this;
			$('.contentList').append(_.template(this.template,{model:this.model}));
			return this;
		}
	});
	return VitemHome;
});