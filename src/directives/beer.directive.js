(function () {
    var beer = function ($uibModal,FavService,$state) {
        return {
            restrict : 'E',
            template: `<div ng-click="beerPop(details)" class="beer">
            <i ng-class="{'checked': details.fav == true}" ng-click="starClicked(details)" class="star fa fa-star"></i>
         <center>  <img ng-src="{{details.image_url}}" ng-alt="{{details.name}}" />
            <h2 class="beer-name">{{details.name}}</h2>
            <p>{{details.tagline}}</p>
         </center>   
            </div>`,
            scope : {
                details : '='
            },
            link: function(scope, element, attrs) {
                
                scope.starClicked = function(beer) {
                    
                    if(beer.fav != undefined){
                        beer.fav = !beer.fav;
                        if(beer.fav){
                            FavService.setFavs(beer);
                            
                        }
                        else{
                            FavService.removeFavs(beer);
                            if($state.current.name == 'fav'){
                                $state.reload();
                            }
                        }

                    }
                    else{
                        beer.fav = true;
                        FavService.setFavs(beer);
                    }
                  
                }

                scope.beerPop = function(beer){
                    var modalInstance = $uibModal.open({
                        templateUrl: 'views/details.modal.html',
                        controller: 'DetailsModalController',
                        controllerAs: '$ctrl',
                        windowClass: 'cst-modal',
                        size: 'md',
                        resolve: {
                            selectedBeer: function () {
                                return beer;
                            }
                        }
                    });
                }
        }
        };
    }

    angular.module('beerBank').directive('beer', beer);

})();