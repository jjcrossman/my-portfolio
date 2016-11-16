angular.module( "CrossmanPortfolio" )

.directive( "projects", function() {

  return {
    templateUrl: "./src/component/Projects/projects-tmpl.html"
    , restrict: "E"
    , scope: {

    }
    , link: function( scope, elem, attr, ctrl ) {


    }
    , controller: "projectsCtrl"
  };

} );
