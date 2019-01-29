(function () {
    function FavController(FavService) {
        var ctrl = this;
        ctrl.beers = FavService.getFavs();                
        
    }
    angular.module('beerBank').controller('FavController', FavController);
})();

