app
  .controller('patientCtrl', function ($scope, dataFactory) {

    dataFactory.getData()
      .then((info) => {
        $scope.doctors = info.doctors
        $scope.patients = info.patients
      })
  })
