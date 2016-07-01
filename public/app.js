/*global angular*/
angular.module('todoApp', ['ngYoutubeEmbed', 'youtube-embed'])
  .controller('TodoListController', function ($scope, $http, $sce) {
    $scope.title = 'Youtube API'
    $scope.video = []
    $scope.dataVideo = []
    $scope.video.push('UNaYpBpRJOY')
    $scope.playerVars = {
      controls: 1,
      autoplay: 1
    }
    $scope.search = function (keyword) {
      $http.get('/search?keyword=' + keyword).then(function (res) {
        console.log(res.data)
        $scope.data = res.data
      })
      $scope.addVideo = function (id, title, pic) {
        var data = {
          id: id,
          title: title,
          pic: pic
        }
        $scope.dataVideo.push(data)
        $scope.video.push(id)
        console.log($scope.video)
      }
      $scope.$on('youtube.player.ended', function ($event, player) {
        $scope.dataVideo.shift()
        $scope.video.shift()
        console.log($scope.dataVideo)
        console.log($scope.video)
        player.playVideo()
      })
    }
  })
