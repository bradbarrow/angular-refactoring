var app = angular.module("dribbbleScorer", []);

app.controller("DribbbleController", function($scope, $http){
  $scope.newPlayer = null; // Our model value is null by default
  $scope.players = []; // We'll start with an empty list

  // Fetches a Dribbble player and adds them to the list
  $scope.addPlayer = function(player){
    $http.jsonp(
      'http://api.dribbble.com/players/' + player + '?callback=JSON_CALLBACK'
    ).success(function(dribbble_player){
      $scope.players.push(dribbble_player); // Here we add the dribbble_player object to the list
    }).error(function(){
      // handle errors
    });
  }

  $scope.removePlayer = function(player){
    $scope.players.splice($scope.players.indexOf(player), 1);
  }

  $scope.likeScore = function(player){
    return player.likes_received_count - player.likes_count;
  }

  $scope.commentScore = function(player){
    return player.comments_received_count - player.comments_count;
  }
});

