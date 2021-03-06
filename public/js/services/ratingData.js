app.service('ratingData', function ($http, $q) {

  this.getRatingData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://159.203.93.83:80/api/rating',
    }).then(function (response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  this.addRatingData = function (rating, product) {
    var ratingObj = {
      rating: rating.number,
      product: product._id
    };
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://159.203.93.83:80/api/rating',
      data: ratingObj
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
});
