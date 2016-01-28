define(['underscore','jquery','backbone'],function(_,$,Backbone){
	MelementEx = Backbone.Model.extend({
		defaults : {
			title 		: 	undefined,
			content 	: 	undefined,
			parent 		: 	undefined
		}
	});
	return MelementEx;

});