angular.module( "CrossmanPortfolio", [ "ui.router" ] )

.config( function ( $stateProvider, $urlRouterProvider ) {

  $urlRouterProvider.otherwise( "/" );

  $stateProvider
    .state( "home", {
      url: "/"
      , templateUrl: "./src/views/templates/home-tmpl.html"
      , controller: "homeCtrl"
    } )
    .state( "about", {
      url: "/about"
      , templateUrl: "./src/views/templates/about-tmpl.html"
    } )
    .state( "projects", {
      url: "/projects"
      , templateUrl: "./src/views/templates/projects-tmpl.html"
    } );

} );
