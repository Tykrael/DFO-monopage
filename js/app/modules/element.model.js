define(['underscore','jquery','backbone'],function(_,$,Backbone){
	Melement = Backbone.Model.extend({
		defaults : {
			title 		: 	undefined,
			content 	: 	undefined,
			parent 		: 	undefined
		}
	});
	return Melement;

});