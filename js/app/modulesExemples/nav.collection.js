define(['underscore','jquery','backbone'],function(_,$,Backbone){
	CnavEx = Backbone.Collection.extend({
		addNavItem : function(model){
			this.add(model);
		},
		comparator : function(item){
			return item.get("position");
		}
	});
	return CnavEx;
});