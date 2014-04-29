var app = angular.module("dribbbleScorer", []);

app.controller("DribbbleController", function($scope, DribbblePlayer){
  $scope.newPlayer = null; // Our model value is null by default
  $scope.players = []; // We'll start with an empty list

  // Fetches a Dribbble player and adds them to the list
  $scope.addPlayer = function(player){
    // We can push a new DribbblePlayer instance into the list
    $scope.players.push(new DribbblePlayer(player));
    $scope.newPlayer = null;
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

// We need to inject the $http service in to our factory
app.factory("DribbblePlayer",function($http){
  // Define the DribbblePlayer function
  var DribbblePlayer = function(player){
    // Define the initialize function
    this.initialize = function () {
      // Fetch the player from Dribbble
      var url = 'http://api.dribbble.com/players/' + player + '?callback=JSON_CALLBACK';
      var playerData = $http.jsonp(url);
      var self = this;

      // When our $http promise resolves
      // Use angular.extend to extend 'this'
      // with the properties of the response
      playerData.then(function(response){
        angular.extend(self, response.data);
      });
    }

    // Call the initialize function for every new instance
    this.initialize();
  }

  // Return a reference to the function
  return (DribbblePlayer);
});

