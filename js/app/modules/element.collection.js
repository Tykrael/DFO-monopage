define(['underscore','jquery','backbone','Melement'],function(_,$,Backbone){
	Celement = Backbone.Collection.extend({
		model : Melement,
		initialize : function(){
			this.loadDatas();
		},
		loadDatas : function(){
			var self = this;
			$.ajax({
				url: appConfig.ws.elements,
				dataType: "json"
			}).done(function(datas){
				//console.log(datas)
				_.each(datas,function(data,k){
					//console.log(data,k)
					var item = new Melement();
					item.set({
						type 		: 	k,
						title 		: 	data.title,
						content 	: 	data.content,
						parent 		: 	data.parent
					});
					self.add(item);
				});
			}).fail(function(){
				console.log('erreur lors de la recuperation des données "Celement"');
			})
		}
	});
	return Celement;
});