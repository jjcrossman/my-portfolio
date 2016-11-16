angular.module( "CrossmanPortfolio" )

.directive( "navigation", function() {

  return {
    templateUrl: "./src/component/Nav/nav-tmpl.html"
    , restrict: "E"
    , scope: {

    }
    , link: function( scope, elem, attr, ctrl ) {


    }
    , controller: "navCtrl"
  };

} );
