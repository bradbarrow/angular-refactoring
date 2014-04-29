var app = angular.module("dribbbleScorer", []);

app.controller("DribbbleController", function($scope){
  $scope.newPlayer = null; // Our model value is null by default
  $scope.players = ["Tom", "Dick", "Harry"];

  // Adds a player to the list of players
  $scope.addPlayer = function(player){
    $scope.players.push(player);
  }

});

