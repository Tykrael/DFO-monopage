define([
	'text!templates/layout.html','underscore','jquery','backbone','Melement','Celement','Vheader','Vfooter','Vnav'
	],function(template){
	Vlayout = Backbone.View.extend({
		events:{
			"click #sidebar a" : "openLayer",
			"click .layerMask" : "closeLayer"
		},
		initialize: function(){
    		$(this.el).removeData().unbind();
			this.template = template;
			this.render();
			this.collection = new Celement();
			this.collection.on('add',function(model){
				switch(model.attributes.type){
					case "header":
						v_header = new Vheader({el:model.attributes.parent,model:model});
					break;
					case "footer":
						v_footer = new Vfooter({el:model.attributes.parent,model:model});
					break;
					case "nav":
						v_nav = new Vnav({el:model.attributes.parent,model:model});
					break;
				}
			})
		},
		render: function(){
			var self = this;
			$(self.el).html(_.template(this.template));
			return this;
		},
		openLayer : function(e){
			e.preventDefault();
			$('#container').append('<div class="layerMask"><div class="layer">Layer</div></div>')

		},
		closeLayer : function(e){
			e.preventDefault();
			$('#container .layerMask').remove();
		}
	});
	return Vlayout;
});