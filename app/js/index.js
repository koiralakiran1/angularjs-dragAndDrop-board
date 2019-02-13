angular.module('app', ['dndLists']).controller('SimpleDemoController', function($scope) {

  $scope.models = {
    selected: null,
    lists: { 'Backlog': {
      listItems: [],
      newListItemTitle: '',
      newListItemMode: false
    }, 'Todo': {
      listItems: [],
      newListItemTitle: '',
      newListItemMode: false
    } }
  };
  // Generate initial model
  for(const key in $scope.models.lists) {
    if($scope.models.lists.hasOwnProperty(key)) {
      for(let i = 1; i <= 3; ++i) {
        $scope.models.lists[key].listItems.push({ label: key + ' Item ' + i });
      }
    }
  }

  $scope.newListMode = false;
  $scope.toggleNewListMode = function() {
    $scope.newListTitle = '';
    $scope.newListMode = !$scope.newListMode;
  };
  $scope.addNewList = function(title) {
    if(title) {
      $scope.models.lists[title] = {
        listItems: [],
        newListItemMode: false
      };
    }
    $scope.toggleNewListMode();
  };

  $scope.toggleNewListItemMode = function(obj) {
    obj.newListItemTitle = '';
    obj.newListItemMode = !obj.newListItemMode;
  };
  $scope.addNewListItem = function(obj, title) {
    if(title) {
      obj.listItems.push({ label: title });
    }
    $scope.toggleNewListItemMode(obj);
  };
});
