define(['underscore','jquery','backbone'],function(_,$,Backbone){
	McontentsEx = Backbone.Model.extend({
		defaults : {
			title : undefined,
			content : undefined,
			date : undefined
		}
	});
	return McontentsEx;

});