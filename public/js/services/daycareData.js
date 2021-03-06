app.service('daycareData', function ($http, $q) {

  this.getDaycareData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://159.203.93.83:80/api/daycare',
    }).then(function (response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  // this.addDaycareData = function (daycare) {
  //   var deferred = $q.defer();
  //   $http({
  //     method: 'POST',
  //     url: 'http://159.203.93.83:80/api/daycare',
  //     data: {
  //       daycareText: daycare.daycareText
  //     }
  //   }).then(function (response) {
  //     deferred.resolve(response);
  //   });
  //   return deferred.promise;
  // };

  // this.deleteDaycareData = function (daycare) {
  //   var deferred = $q.defer();
  //   $http({
  //     method: 'DELETE',
  //     url: 'http://159.203.93.83:80/api/daycare/' + daycare._id
  //   }).then(function (response) {
  //     deferred.resolve(response);
  //   });
  //   return deferred.promise;
  // };

  this.updateDaycareData = function (daycare) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://159.203.93.83:80/api/daycare/' + daycare._id,
      data: {
        monday: daycare.monday,
        tuesday: daycare.tuesday,
        wednesday: daycare.wednesday,
        thursday: daycare.thursday,
        friday: daycare.friday,
        saturday: daycare.saturday,
        sunday: daycare.sunday
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
});
