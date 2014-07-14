/**
 * Created by rajkowskiruben on 7/11/14.
 */

// main module for employee list
angular.module('orderByEmployee', [
  'ngRoute'
]).controller("EmployeeController", ['$scope','$http', function($scope, $http)
{
  //globals
  $scope.selectedName = [];
  $scope.nameList = [{
      "last": "smith"
    },
    {
      "last": "jones"
    },
    {
      "last": "roberts"
    }];
  $scope.people = [
      {
        "person": {
          "firstName": "bob",
          "lastName": "smith",
          "sex": "male",
          "age": 25
        }
      },
      {
        "person": {
          "firstName": "john",
          "lastName": "smith",
          "sex": "male",
          "age": 60
        }
      },
      {
        "person": {
          "firstName": "jane",
          "lastName": "smith",
          "sex": "female",
          "age": 23
        }
      },
      {
        "person": {
          "firstName": "bob",
          "lastName": "jones",
          "sex": "male",
          "age": 34
        }
      },
      {
        "person": {
          "firstName": "bob",
          "lastName": "roberts",
          "sex": "male",
          "age": 33
        }
      },
      {
        "person": {
          "firstName": "jane",
          "lastName": "roberts",
          "sex": "female",
          "age": 36
        }
      }
 ];

/*$http.get('test-data.json').success (function(data){
  $scope.people = data.people;
  //console.log( $scope.people );
  $scope.predicate = '-age';

}).error(function(data, status, headers, config) {
  // called asynchronously if an error occurs
  console.log(status);
});*/


  $scope.setSelectedName = function () {
    $scope.selectedName = [];
    var name = this.name.last;
    if (_.contains($scope.selectedName, name)) {
      $scope.selectedName = _.without($scope.selectedName, name);
    } else {
      $scope.selectedName.push(name);
    }
    return false;
  };

  $scope.isChecked = function (name) {

    var name =  name.toLowerCase();
    if (_.contains($scope.selectedName, name)) {
      return 'icon-ok pull-right';
    }
    return false;
  };


}])

// filter module for employee lastName
.filter('nameFilter', [function () {
  return function (people, selectedName) {
    if (!angular.isUndefined(people) && !angular.isUndefined(selectedName) && selectedName.length > 0) {
      var tempPeople = [];
      angular.forEach(selectedName, function (name) {
        angular.forEach(people, function (person) {
          if (angular.equals(person.person.lastName, name)) {

            tempPeople.push(person);
          }
        });
      });
      return tempPeople;
    } else {
      return people;
    }
  };
}]);