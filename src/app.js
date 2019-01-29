var app = angular.module("beerBank", [
    'ui.router', 
    'angular.filter',
    'angular-loading-bar',
    'ngAnimate',
    'infinite-scroll',
    'ui.bootstrap'
]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('home'); 

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController as home'
        })
        .state('fav', {
            url: '/fav',
            templateUrl: 'views/fav.html',
            controller: 'FavController as fav'
        }).state('search', {
            url: '/search',
            templateUrl: 'views/search.html',
            controller: 'SearchController as search'
        });

});

app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.spinnerTemplate = '<center><div><span class="center fa fa-spinner">Loading...</div></center>';
}])