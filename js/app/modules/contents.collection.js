define(['underscore','jquery','backbone'],function(_,$,Backbone){
	Ccontents = Backbone.Collection.extend({
		model : Mcontents,
		initialize : function(){
			this.loadDatas();
		},
		loadDatas : function(){
			var self = this;
			$.ajax({
				url: appConfig.ws.container,
				dataType: "json"
			}).done(function(datas){
				_.each(datas,function(data,k){
					var item = new Mcontents();
					item.set({
						id 		: 	k,
						title 	: 	data.title,
						content : 	data.content,
						date 	: 	data.date,
						src 	: 	data.src
					});
					self.add(item);
				});
				self.trigger('reset');
			}).fail(function(){
				console.log('erreur lors de la recuperation des données "Ccontainer"');
			})
		}
	});
	return Ccontents;
});