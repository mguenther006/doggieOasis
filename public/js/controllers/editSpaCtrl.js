app.controller('editSpaCtrl', function ($scope, spaData, $routeParams) {

  var getSpa = function () {
    spaData.getSpaData().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        if ($routeParams.id === response[i]._id) {
          $scope.spa = response[i];
          console.log($scope.spa);
        }
      }
    });
  };
  getSpa();

  $scope.updateSpa = function (spa) {
    spaData.updateSpaData(spa).then(function (response) {
      getSpa();
    });
  };
});
