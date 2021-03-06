app.service('spaData', function ($http, $q) {

  this.getSpaData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://159.203.93.83:80/api/spa',
    }).then(function (response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  this.addSpaData = function (spa) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://159.203.93.83:80/api/spa',
      data: {
        title: spa.title,
        description: spa.description,
        price: spa.price
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.deleteSpaData = function (spa) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://159.203.93.83:80/api/spa/' + spa._id
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.updateSpaData = function (spa) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://159.203.93.83:80/api/spa/' + spa._id,
      data: {
        title: spa.title,
        description: spa.description,
        price: spa.price
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
});
