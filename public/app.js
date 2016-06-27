/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function ($scope, $http) {
    $scope.title = 'Youtube API'
    $scope.data = null
    $scope.search = function (keyword) {
      $http.get('/search?keyword=' + keyword).then(function (res) {
        console.log(res.data)
        $scope.data = res.data
      })
    }
  })
