define(['underscore','jquery','backbone'],function(_,$,Backbone){
	Mcontents = Backbone.Model.extend({
		defaults : {
			title : undefined,
			content : undefined,
			date : undefined
		}
	});
	return Mcontents;

});