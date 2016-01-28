requirejs.config({
	baseUrl :  './',
	paths: {
		text 			: './js/libs/require/text',
		jquery 			: './js/libs/jquery-1.9.0.min',
		underscore 		: './js/libs/underscore-min',
		backbone 		: './js/libs/backbone-min',
		highcharts 		: './js/libs/highcharts',
		config 			: './js/app/config',
		templates 		: './js/templates',
		modules 		: './js/modulesExemples',

		VlayoutEx		:  './js/app/modulesExemples/layout.view',
		VheaderEx		:  './js/app/modulesExemples/header.view',
		VfooterEx		:  './js/app/modulesExemples/footer.view',
		VnavEx			:  './js/app/modulesExemples/nav.view',
		VitemHomeEx		:  './js/app/modulesExemples/home.item.view',
		VhomeEx			:  './js/app/modulesExemples/home.view',
		VpageEx			:  './js/app/modulesExemples/page.view',
		VarticleEx		:  './js/app/modulesExemples/article.view',

		McontentsEx		:  './js/app/modulesExemples/contents.model',
		MelementEx		:  './js/app/modulesExemples/element.model',
		MnavEx			:  './js/app/modulesExemples/nav.model',
		MpageEx			:  './js/app/modulesExemples/page.model',

		CcontentsEx		:  './js/app/modulesExemples/contents.collection',
		CelementEx		:  './js/app/modulesExemples/element.collection',
		CnavEx			:  './js/app/modulesExemples/nav.collection',
		CpageEx			:  './js/app/modulesExemples/page.collection'
	},
	deps : ['config', 'text'],
	shim: {
		backbone: {
			//These script dependencies should be loaded before loading backbone.js
			deps: ['underscore', 'jquery'],
			//Once loaded, use the global 'Backbone' as the module value.
			exports: 'Backbone'
		},
		CcontentsEx: {
			deps: ['underscore', 'jquery', 'backbone', 'McontentsEx'],
			exports: 'CcontentsEx'
		},
		VlayoutEx: {
			deps: ['underscore', 'jquery', 'backbone', 'MelementEx', 'CelementEx', 'VheaderEx', 'VfooterEx', 'VnavEx'],
			exports: 'VlayoutEx'
		},
		VheaderEx: {
			deps: ['underscore', 'jquery', 'backbone'],
			exports: 'VheaderEx'
		},
		VfooterEx: {
			deps: ['underscore', 'jquery', 'backbone'],
			exports: 'VfooterEx'
		},
		VnavEx: {
			deps: ['underscore', 'jquery', 'backbone', 'MnavEx', 'CnavEx'],
			exports: 'VnavEx'
		},
		VhomeEx: {
			deps: ['underscore', 'jquery', 'backbone', 'McontentsEx', 'CcontentsEx', 'VitemHomeEx'],
			exports: 'VhomeEx'
		},
		VpageEx: {
			deps: ['underscore', 'jquery', 'backbone', 'MpageEx', 'CpageEx'],
			exports: 'VpageEx'
		},
		VarticleEx: {
			deps: ['underscore', 'jquery', 'backbone', 'McontentsEx', 'CcontentsEx'],
			exports: 'VarticleEx'
		}
	}
});

requirejs([
	"jquery",
	"underscore",
	"backbone",
	'text!templates/404.html',
	"VlayoutEx",
	"VhomeEx",
	"VpageEx",
	"VarticleEx"], function ($, _, Backbone, template404) {
	var appLauncher = Backbone.Router.extend({
		routes : {
			'': 'home',
			'home': 'home',
			'user-management': 'userManagement',
			/*
			'article/:query': 'article',
			'page/:query': 'page',
			*/
			'*path': 'hell'
		},
		initialize: function () {
			new VlayoutEx({el: "body"});
		},
		home: function () {
			new VhomeEx({el: "#content"});
		},
		userManagement:function(){

		},
		/*
		page: function (query) {
			new VpageEx({el: "#content", query: decodeURIComponent(query)});
		},
		article: function (query) {
			new VarticleEx({el: "#content", query: decodeURIComponent(query)});
		},
		*/
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