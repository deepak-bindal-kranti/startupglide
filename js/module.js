var app = angular.module("routing", ["ngRoute"]);
app.config(function($routeProvider) {
    
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/seed", {
        templateUrl : "views/seed.html"
    })
    .when("/jump", {
        templateUrl : "views/jump.html"
    })
    .when("/boost", {
        templateUrl : "views/boost.html"
    })
    .when("/hire", {
        templateUrl : "views/hire.html"
    })
    .when("/rock", {
        templateUrl : "views/rock.html"
    })
    .when("/ops", {
        templateUrl : "views/ops.html"
    })
    .when("/investor", {
        templateUrl : "views/investor.html"
    })
    .when("/sail", {
        templateUrl : "views/sail.html"
    })
    .when("/mentor", {
        templateUrl : "views/mentor.html"
    })
    .when("/landing", {
        templateUrl : "views/landing.html"
    })
    .when("/team", {
        templateUrl : "views/team.html"
    });
});