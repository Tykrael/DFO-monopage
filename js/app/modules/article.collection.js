define(['underscore','jquery','backbone'],function(_,$,Backbone){
	Carticle = Backbone.Collection.extend({
		model : Marticle,
		initialize : function(){
		}
	});
	return Carticle;
});