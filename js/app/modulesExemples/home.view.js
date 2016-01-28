define(['text!templates/exemples/home.html'],function(template){
	VhomeEx = Backbone.View.extend({
		events:{},
		initialize: function(){
    		$(this.el).removeData().unbind();
			this.template = template;
			this.collection = contents = contents || new CcontentsEx();
			this.render();
			if(!this.collection.length){
				this.collection.on('add',function(model){
					item = new VitemHomeEx({model:model});
				})
			}
		},
		render: function(){
			var self = this;
			$(self.el).html(_.template(this.template));
			if(this.collection.length){
				_.each(this.collection.models,function(model){
					item = new VitemHomeEx({model:model});
				})
			}
			return this;
		}
	});
	return VhomeEx;
});


/*






*/