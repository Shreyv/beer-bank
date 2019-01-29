'use strict';
(function () {
    function BeerService($http, $q) {
        return {
            getBeers: function (page) {
                return $http.get('https://api.punkapi.com/v2/beers?page=' + page + '&per_page=6')
                    .then(
                        function (response) {
                            return response.data;
                        },
                        function (errResponse) {
                            console.error('Error while fetching users');
                            return $q.reject(errResponse);
                        }
                    );
            },

            getBeersBySearch(search) {
                return $http.get('https://api.punkapi.com/v2/beers?beer_name=' + search)
                    .then(
                        function (response) {
                            return response.data;
                        },
                        function (errResponse) {
                            console.error('Error while fetching users');
                            return $q.reject(errResponse);
                        }
                    );
            },
           searchBeers(searchObj){
            return $http.get('https://api.punkapi.com/v2/beers',
            {params : searchObj})
            .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching users');
                    return $q.reject(errResponse);
                }
            );
           }
        }

    }

    angular.module('beerBank').factory('BeerService', BeerService);
})();