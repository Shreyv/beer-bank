(function () {
    function FavService() {
       
                var fav = [];

                return {
                    getFavs: function () {
                        return fav;
                    },
                    setFavs: function (val) {
                        fav.push(val);
                    },
                    removeFavs: function (val) {
                        fav = fav.filter(function (item) {
                            return item.id !== val.id;
                        });
                    }
                };
            
    }

    angular.module('beerBank').factory('FavService', FavService);
})();