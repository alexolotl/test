app.factory('RestaurantFactory', function ($http) {
  return {
    favorites: function () {
      return $http.get('/favorites');
    },
    salad: function () {
      return $http.get('/salad');
    }
  }
});