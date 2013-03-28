{
    baseUrl: "../js/app",
    name: "main",
    out: "main.min.js",
    optimize : "uglify",
    inlineText: true,
    findNestedDependencies: true,

	paths:{
		text 			:  '../libs/require/text',
		jquery          :  '../libs/jquery-1.9.0.min',
		underscore		:  '../libs/lo-dash-min',
		backbone		:  '../libs/backbone-min',
		config 			:  '../app/config',
		templates		:  '../templates',
		modules			:  './modules',

		Vlayout			:  './modules/layout.view',
		Vheader			:  './modules/header.view',
		Vfooter			:  './modules/footer.view',
		Vnav			:  './modules/nav.view',
		VitemHome		:  './modules/home.item.view',
		Vhome			:  './modules/home.view',
		Vpage			:  './modules/page.view',
		Varticle		:  './modules/article.view',

		Mcontents		:  './modules/contents.model',
		Melement		:  './modules/element.model',
		Mnav			:  './modules/nav.model',
		Mpage			:  './modules/page.model',

		Ccontents		:  './modules/contents.collection',
		Celement		:  './modules/element.collection',
		Cnav			:  './modules/nav.collection',
		Cpage			:  './modules/page.collection',
	},
	deps : ['config','text'],
	shim: {
		backbone: {
			//These script dependencies should be loaded before loading backbone.js
			deps: ['underscore', 'jquery'],
			//Once loaded, use the global 'Backbone' as the module value.
			exports: 'Backbone'
		},
		Ccontents: {
			deps: ['underscore','jquery','backbone','Mcontents'],
			exports: 'Ccontents'
		},
		Vlayout: {
			deps: ['underscore','jquery','backbone','Melement','Celement','Vheader','Vfooter','Vnav'],
			exports: 'Vlayout'
		},
		Vheader: {
			deps: ['underscore','jquery','backbone'],
			exports: 'Vheader'
		},
		Vfooter: {
			deps: ['underscore','jquery','backbone'],
			exports: 'Vfooter'
		},
		Vnav: {
			deps: ['underscore','jquery','backbone','Mnav','Cnav'],
			exports: 'Vnav'
		},
		Vhome: {
			deps: ['underscore','jquery','backbone','Mcontents','Ccontents','VitemHome'],
			exports: 'Vhome'
		},
		Vpage: {
			deps: ['underscore','jquery','backbone','Mpage','Cpage'],
			exports: 'Vpage'
		},
		Varticle: {
			deps: ['underscore','jquery','backbone','Mcontents','Ccontents'],
			exports: 'Varticle'
		},
		Celement : {
			deps : ['underscore','jquery','backbone'],
			exports: 'Celement'
		}
	}
}