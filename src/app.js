

angular.module( "CrossmanPortfolio", [ "ui.router" ] )

.config( function ( $stateProvider, $urlRouterProvider ) {

  $urlRouterProvider.otherwise( "/" );

  $stateProvider
    .state( "home", {
      url: "/"
      , templateUrl: "./src/home-tmpl.html"
      , controller: "homeCtrl"
    } );
    // .state( "about", {
    //   url: "/about"
    //   , template: aboutTmpl
    //   , controller: "aboutCtrl"
    // } );

} );
