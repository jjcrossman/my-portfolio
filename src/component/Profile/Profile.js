angular.module( "CrossmanPortfolio" )

.directive( "profile", function() {

  return {
    templateUrl: "./src/component/Profile/profile-tmpl.html"
    , restrict: "E"
    , scope: {

    }
    , link: function( scope, elem, attr, ctrl ) {


    }
    , controller: "profileCtrl"
  };

} );
