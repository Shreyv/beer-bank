(function (angular) {
    var DetailsModalController = function ($uibModalInstance, selectedBeer) {
        var ctrl = this;
        ctrl.beer = selectedBeer;
      
    };
    angular.module('beerBank').controller('DetailsModalController', DetailsModalController);
})(window.angular);