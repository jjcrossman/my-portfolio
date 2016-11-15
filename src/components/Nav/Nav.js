angular.module( "CrossmanPortfolio" )

.directive( "navigation", function() {

  return {
    templateUrl: "./src/components/Nav/nav-tmpl.html"
    , restrict: "E"
    , scope: {

    }
    , link: function( scope, elem, attr, ctrl ) {


    }
    , controller: "navCtrl"
  };

} );
