app.service('daycareRatesData', function ($http, $q) {


  this.getDaycareRatesData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://159.203.93.83:80/api/daycareRates',
    }).then(function (response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  this.addDaycareRatesData = function (daycareRates) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://159.203.93.83:80/api/daycareRates',
      data: {
        days: daycareRates.days,
        fullOneDog: daycareRates.fullOneDog,
        fullTwoDogs: daycareRates.fullTwoDogs,
        halfOneDog: daycareRates.halfOneDog,
        halfTwoDogs: daycareRates.halfTwoDogs,
        additional: daycareRates.additional
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.deleteDaycareRatesData = function (daycareRates) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://159.203.93.83:80/api/daycareRates/' + daycareRates._id
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.updateDaycareRatesData = function (daycareRates) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://159.203.93.83:80/api/daycareRates/' + daycareRates._id,
      data: {
        days: daycareRates.days,
        fullOneDog: daycareRates.fullOneDog,
        fullTwoDogs: daycareRates.fullTwoDogs,
        halfOneDog: daycareRates.halfOneDog,
        halfTwoDogs: daycareRates.halfTwoDogs,
        additional: daycareRates.additional
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
});
