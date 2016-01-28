define([
	'text!templates/layout.html','underscore','jquery','backbone','Melement','Celement','Vheader','Vfooter','Vnav'
	],function(template){
	Vlayout = Backbone.View.extend({
		events:{
		},
		initialize: function(){
    		$(this.el).removeData().unbind();
			var self = this;
			this.template = _.template(template);
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

			$('#sidebar').find('a').on('click',function(e){
				self.openLayer(e);
			})
		},
		render: function(){
			var self = this;
			$(self.el).html(self.template);
			return this;
		},
		openLayer : function(e){
			var self = this;
			e.preventDefault();
			$('#container').append('<div class="layerMask"><div class="layer">Layer</div></div>')
			$('.layerMask').on('click',function(e){
				self.closeLayer(e);
			})
		},
		closeLayer : function(e){
			e.preventDefault();
			$('#container .layerMask').unbind().remove();
		}
	});
	return Vlayout;
});