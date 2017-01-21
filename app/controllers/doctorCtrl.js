app
  .controller('doctorCtrl', function ($scope, dataFactory) {

    dataFactory.getData()
      .then((info) => {
        $scope.doctors = info.doctors
        $scope.patients = info.patients
      })

    $scope.showPatients = function (x) {
      console.log(x)
      $scope.selectedDoc = x
    }

  })
