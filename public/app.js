/*global angular*/
angular.module('todoApp', ['ngYoutubeEmbed'])
  .controller('TodoListController', function ($scope, $http, $sce) {
    $scope.title = 'Youtube API'
    // $scope.data = null
    // $scope.dataVideo = []
    // $scope.count = 0
    // $scope.link = []
    // $scope.link.push('https://www.youtube.com/watch?v=UNaYpBpRJOY')
    // $scope.link = 'https://www.youtube.com/watch?v=UNaYpBpRJOY'
    // $scope.src = $sce.trustAsResourceUrl('http://www.youtube.com/embed/UNaYpBpRJOY?autoplay=1')
    $scope.search = function (keyword) {
      $http.get('/search?keyword=' + keyword).then(function (res) {
        console.log(res.data)
        $scope.data = res.data
      })
      $scope.addVideo = function (id) {
        // $scope.src = 'http://www.youtube.com/embed/' + id + '?autoplay=1'
        // $scope.src = $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + id + '?autoplay=1')
        // $scope.link = 'https://www.youtube.com/watch?v=' + id
        // $scope.link.push('https://www.youtube.com/watch?v=' + id)
        // var data = {
        //   id: 'https://www.youtube.com/watch?v=' + id
        // }
        // $scope.dataVideo.push(data)
        // console.log($scope.dataVideo)
      }
    }
  })
