app
  .controller('doctorCtrl', function ($scope, dataFactory) {

    dataFactory.getData()
      .then((info) => {
        $scope.doctors = info.doctors
        $scope.patients = info.patients
        $scope.selectedDoc = ""
      })

    // $scope.selectedDoc = ''
    $scope.showPatients = function () {
      console.log(this.key)
      $scope.selectedDoc = this.key
      // return selectedDoc
    }


  })
