angular.module( "CrossmanPortfolio", [ "ui.router" ] )

.config( function ( $stateProvider, $urlRouterProvider ) {

  $urlRouterProvider.otherwise( "/" );

  $stateProvider
    .state( "home", {
      url: "/"
      , templateUrl: "./src/views/templates/home-tmpl.html"
      , controller: "homeCtrl"
    } );

} );
