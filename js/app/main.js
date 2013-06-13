requirejs.config({
	baseUrl :  './',
	paths: {
		text 			: './js/libs/require/text',
		jquery 			: './js/libs/jquery-1.9.0.min',
		underscore 		: './js/libs/lo-dash-min',
		backbone 		: './js/libs/backbone-min',
		config 			: './js/app/config',
		templates 		: './js/templates',
		modules 		: './js/modules',

		Vlayout			:  './js/app/modules/layout.view',
		Vheader			:  './js/app/modules/header.view',
		Vfooter			:  './js/app/modules/footer.view',
		Vnav			:  './js/app/modules/nav.view',
		VitemHome		:  './js/app/modules/home.item.view',
		Vhome			:  './js/app/modules/home.view',
		Vpage			:  './js/app/modules/page.view',
		Varticle		:  './js/app/modules/article.view',

		Mcontents		:  './js/app/modules/contents.model',
		Melement		:  './js/app/modules/element.model',
		Mnav			:  './js/app/modules/nav.model',
		Mpage			:  './js/app/modules/page.model',

		Ccontents		:  './js/app/modules/contents.collection',
		Celement		:  './js/app/modules/element.collection',
		Cnav			:  './js/app/modules/nav.collection',
		Cpage			:  './js/app/modules/page.collection'
	},
	deps : ['config', 'text'],
	shim: {
		backbone: {
			//These script dependencies should be loaded before loading backbone.js
			deps: ['underscore', 'jquery'],
			//Once loaded, use the global 'Backbone' as the module value.
			exports: 'Backbone'
		},
		Ccontents: {
			deps: ['underscore', 'jquery', 'backbone', 'Mcontents'],
			exports: 'Ccontents'
		},
		Vlayout: {
			deps: ['underscore', 'jquery', 'backbone', 'Melement', 'Celement', 'Vheader', 'Vfooter', 'Vnav'],
			exports: 'Vlayout'
		},
		Vheader: {
			deps: ['underscore', 'jquery', 'backbone'],
			exports: 'Vheader'
		},
		Vfooter: {
			deps: ['underscore', 'jquery', 'backbone'],
			exports: 'Vfooter'
		},
		Vnav: {
			deps: ['underscore', 'jquery', 'backbone', 'Mnav', 'Cnav'],
			exports: 'Vnav'
		},
		Vhome: {
			deps: ['underscore', 'jquery', 'backbone', 'Mcontents', 'Ccontents', 'VitemHome'],
			exports: 'Vhome'
		},
		Vpage: {
			deps: ['underscore', 'jquery', 'backbone', 'Mpage', 'Cpage'],
			exports: 'Vpage'
		},
		Varticle: {
			deps: ['underscore', 'jquery', 'backbone', 'Mcontents', 'Ccontents'],
			exports: 'Varticle'
		}
	}
});

requirejs([
	"jquery",
	"underscore",
	"backbone",
	'text!templates/404.html',
	"Vlayout",
	"Vhome",
	"Vpage",
	"Varticle"], function ($, _, Backbone, template404) {
	var appLauncher = Backbone.Router.extend({
		routes : {
			'': 'home',
			'home': 'home',
			'article/:query': 'article',
			'page/:query': 'page',
			'*path': 'hell'
		},
		initialize: function () {
			new Vlayout({el: "body"});
		},
		home: function () {
			new Vhome({el: "#content"});
		},
		page: function (query) {
			new Vpage({el: "#content", query: decodeURIComponent(query)});
		},
		article: function (query) {
			new Varticle({el: "#content", query: decodeURIComponent(query)});
		},
		hell: function (query) {
			$("#content").html(_.template(template404));
		}
	});

	appLauncher.vent = _.extend({}, Backbone.Events);

	$(function () {
		router = new appLauncher();
		Backbone.history.start();
	});
	/*
	zone et blocs (1,2,3 colonnes)
	*/


});