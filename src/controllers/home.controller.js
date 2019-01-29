(function () {
    function HomeController(BeerService,FavService) {
        var ctrl = this;
        ctrl.beers = [];
        ctrl.page = 1;
        ctrl.searchString = '';
        ctrl.favs = FavService.getFavs().map(function(val){
            return val.id;
        });
        
        BeerService.getBeers(ctrl.page).then(function(data){
            ctrl.beers = data;
            angular.forEach(ctrl.beers,function(val){
                if(ctrl.favs.includes(val.id)){
                    val.fav = true;
                }
            })
            
        })

        ctrl.nextPage = function(){
            ctrl.page++;
            BeerService.getBeers(ctrl.page).then(function(data){
                ctrl.beers = ctrl.beers.concat(data);                
            })
        }

        ctrl.search = function(){
            if(ctrl.searchString){
                BeerService.getBeersBySearch(ctrl.searchString).then(function(data){
                    ctrl.beers = data;  
                })
            }            
        }
        
    }
    angular.module('beerBank').controller('HomeController', HomeController);
})();