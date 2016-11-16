angular.module( "CrossmanPortfolio" )

.directive( "skills", function() {

  return {
    templateUrl: "./src/component/Skills/skills-tmpl.html"
    , restrict: "E"
    , scope: {

    }
    , link: function( scope, elem, attr, ctrl ) {


    }
    , controller: "skillsCtrl"
  };

} );
