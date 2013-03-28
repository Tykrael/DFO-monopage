define([
	'underscore','jquery',
	'text!templates/home.html','backbone','Mcontents','Ccontents','VitemHome'
	],function(_,$,template){
	Vhome = Backbone.View.extend({
		events:{},
		initialize: function(){
    		$(this.el).removeData().unbind();
			this.template = template;
			var poeut = contents || 'pouet'
			//console.log(poeut)
			this.collection = contents = contents || new Ccontents();
			//this.collection = new Chome();
			this.render();
			if(!this.collection.length){
				this.collection.on('add',function(model){
					item = new VitemHome({model:model});
				})
			}
		},
		render: function(){
			var self = this;
			$(self.el).html(_.template(this.template));
			if(this.collection.length){
				_.each(this.collection.models,function(model){
					item = new VitemHome({model:model});
				})
			}
			//$(this.parent).prepend(_.template($(this.template).html(),this.model.attributes));
			return this;
		}
	});
	return Vhome;
});


/*






*/