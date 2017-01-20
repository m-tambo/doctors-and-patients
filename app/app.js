angular
   .module('doctorPatient', ['ngRoute'])
   .config($routeProvider) {
      $routeProvider
         .when('/', {
            controller: 'mainCtrl',
            templateUrl: 'app/partials/main.html'
         })
         .otherwise('/')
   }
   .controller('mainCtrl', function ($scope, dataFactory) {

      dataFactory.getData()
         .then(() => {

         })
   })
   .factory('dataFactory', function ($http) {
      return {
         getData () {
            return $http
               .get('https://doctors-and-patients-exercise.firebaseio.com/.json')
               .then((persons) => {
                  console.log(persons)

               })
         }
      }
   })
