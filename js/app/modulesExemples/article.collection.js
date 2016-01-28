define(['underscore','jquery','backbone'],function(_,$,Backbone){
	CarticleEx = Backbone.Collection.extend({
		model : MarticleEx,
		initialize : function(){
		}
	});
	return CarticleEx;
});