var app = angular.module("dribbbleScorer", []);

app.controller("DribbbleController", function($scope, $http){
  $scope.newPlayer = null; // Our model value is null by default
  $scope.players = ["Tom", "Dick", "Harry"];

  // Fetches a Dribbble player and adds them to the list
  $scope.addPlayer = function(player){
    $http.jsonp(
      'http://api.dribbble.com/players/' + player + '?callback=JSON_CALLBACK'
    ).success(function(dribbble_player){
      $scope.players.push(dribbble_player.name);
    }).error(function(){
      // handle errors
    });
  }

  $scope.removePlayer = function(player){
    $scope.players.splice($scope.players.indexOf(player), 1);
  }


});

