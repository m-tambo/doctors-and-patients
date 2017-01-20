app
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
