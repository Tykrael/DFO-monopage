define(['underscore','jquery','backbone','MelementEx'],function(_,$,Backbone){
	CelementEx = Backbone.Collection.extend({
		model : MelementEx,
		initialize : function(){
			this.loadDatas();
		},
		loadDatas : function(){
			var self = this;
			$.ajax({
				url: appConfig.ws.elements,
				dataType: "json"
			}).done(function(datas){
				//console.log('element')
				//console.log(datas)
				_.each(datas,function(data,k){
					//console.log(data,k)
					var item = new MelementEx();
					item.set({
						type 		: 	k,
						title 		: 	data.title,
						content 	: 	data.content,
						parent 		: 	data.parent
					});
					//console.log(item)
					self.add(item);
				});
				//console.log('element done')
			}).fail(function(){
				console.log('erreur lors de la recuperation des données "Celement"');
			})
		}
	});
	return CelementEx;
});