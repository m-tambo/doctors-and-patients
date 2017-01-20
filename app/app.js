console.log('hi')
const app = angular.module('doctorPatient', ['ngRoute'])
   .config(($routeProvider) => {
      $routeProvider
         .when('/', {
            controller: 'mainCtrl',
            templateUrl: 'app/partials/main.html'
         })
         .when('/patients', {
            controller: 'patientCtrl',
            templateUrl: 'app/partials/patients.html'
         })
         .when('/doctors', {
            controller: 'doctorCtrl',
            templateUrl: 'app/partials/doctors.html'
         })
         .otherwise({
            redirectTo: '/'
          })
   })

   .factory('dataFactory', function ($http) {
      return {
         getData () {
            return $http
               .get('https://doctors-and-patients-exercise.firebaseio.com/.json')
               .then((persons) => {
                  console.log(persons.data)
                  return persons.data
               })
         }
      }
   })
