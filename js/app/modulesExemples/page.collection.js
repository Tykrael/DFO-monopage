define(['underscore','jquery','backbone','MpageEx'],function(_,$,Backbone,MpageEx){
	CpageEx = Backbone.Collection.extend({
		model : MpageEx,
		getPageData : function(suffix){
			var self = this;
			$.ajax({
				url: './js/ressources/page_'+suffix+'.js',
				dataType: "json"
			}).done(function(datas){
				_.each(datas,function(data,k){
					var item = new Mpage();
					item.set({
						_id 		: 	'page_'+suffix,
						title 		: 	data.title,
						content 	: 	data.content
					});
					self.add(item);
				});
			}).fail(function(){
				console.log('erreur lors de la recuperation des données "Ccontainer"');
			})
		}

	});
	return CpageEx;
});