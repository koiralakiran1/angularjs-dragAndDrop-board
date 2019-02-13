angular.module('app', ['dndLists']).controller('SimpleDemoController', function($scope) {

  $scope.models = {
    selected: null,
    lists: { 'Backlog': [], 'Todo': [] }
  };
  // Generate initial model
  for(const key in $scope.models.lists) {
    if($scope.models.lists.hasOwnProperty(key)) {
      for(let i = 1; i <= 3; ++i) {
        $scope.models.lists[key].push({ label: key + ' Item ' + i });
      }
    }
  }

  $scope.newListMode = false;
  $scope.toggleNewListMode = function() {
    $scope.newListMode = !$scope.newListMode;
  };


  $scope.addNewList = function(title) {
    $scope.models.lists[title] = [];
    $scope.newListTitle = '';
    $scope.toggleNewListMode();
  };
});
