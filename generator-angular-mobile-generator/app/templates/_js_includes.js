//INCLUDE ALL ANGULAR CONTROLLERS THAT HAVE BEEN DEFINED
head.load('js/includes/angular_controllers.js',function() {

head.js(
	{jq: "js/libs/jquery/dist/jquery.min.js"},
	//{angular: "js/libs/angular/angular.min.js"},
	{constants:'js/constants.js'},
	{ionic: "js/libs/ionic/release/js/ionic.bundle.min.js"},
	//{ionic_angular: "js/libs/ionic/release/js/ionic-angular.js"},
	{lawnchair: "js/libs/lawnchair/src/Lawnchair.js"},
	{lawnchair_dom: "js/libs/lawnchair/src/adapters/dom.js"},
	{lc_query: "js/libs/lawnchair/src/plugins/query.js"},
	{onload: "js/onload.js"},
	{ang_resource:'js/libs/angular-resource/angular-resource.min.js'},
	{autocomplete: 'js/libs/angucomplete/angucomplete.js'},
	{common:'js/common.js'},

	{hammer:'js/libs/hammerjs/hammer.min.js'},
	//{scroll: 'js/libs/iscroll.js'},
	//{fastclick: 'js/libs/fastclick/lib/fastclick.js'},
	{green_sock: "js/libs/greensock/src/minified/TweenMax.min.js"},
	{draggable: "js/libs/greensock/src/minified/utils/Draggable.min.js"},
	
	{app_services: 'js/services/services.js'},
	{app: "js/app.js"}
);

});