(function () {
    function SearchController(BeerService) {
        var ctrl = this;
        ctrl.beers = [];
        ctrl.searchObj = {
            abv_gt: null,
            abv_lt: null,
            ibu_gt: null,
            ibu_lt: null,
            ebc_gt: null,
            ebc_lt: null,
        }

        ctrl.search = function(){
           BeerService.searchBeers(ctrl.searchObj).then(function(data){
                    ctrl.beers = data;                    
           })
            
        }
    }
    angular.module('beerBank').controller('SearchController', SearchController);
})();