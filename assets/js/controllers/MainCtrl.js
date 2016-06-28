app.controller('MainCtrl',function(RestaurantFactory) {
  var self = this;
  RestaurantFactory.favorites().success(function(data) {
    self.restaurantList = data;
  });
});