define(['underscore','jquery','backbone'],function(_,$,Backbone){
	Cnav = Backbone.Collection.extend({
		addNavItem : function(model){
			this.add(model);
		},
		comparator : function(item){
			return item.get("position");
		}
	});
	return Cnav;
});