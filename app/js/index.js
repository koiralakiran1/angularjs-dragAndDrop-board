angular.module('app', ['dndLists']).controller('SimpleDemoController', function ($scope) {

  $scope.models = {
    selected: null,
    lists: {
      'Backlog': {
        listItems: [],
        newListItemTitle: '',
        newListItemMode: false
      },
      'Todo': {
        listItems: [],
        newListItemTitle: '',
        newListItemMode: false
      }
    }
  };
  // Generate initial model
  for (const key in $scope.models.lists) {
    if ($scope.models.lists.hasOwnProperty(key)) {
      for (let i = 1; i <= 3; ++i) {
        $scope.models.lists[key].listItems.push({
          label: key + ' Item ' + i
        });
      }
    }
  }

  $scope.newListMode = false;
  $scope.toggleNewListMode = function () { // functional. of course not ??
    $scope.newListTitle = '';
    $scope.newListMode = !$scope.newListMode;
  };
  $scope.addNewList = function (oldList, newListTitle) {
    if (newListTitle) {
      oldList[newListTitle] = {
        listItems: [],
        newListItemMode: false
      };
    }
    $scope.toggleNewListMode();
  };

  $scope.toggleNewListItemMode = function (obj) {
    obj.newListItemTitle = '';
    obj.newListItemMode = !obj.newListItemMode;
  };
  $scope.addNewListItem = function (obj, title) {
    if (title) {
      obj.listItems.push({
        label: title,
        optionsMode: false
      });
    }
    $scope.toggleNewListItemMode(obj);
  };

  $scope.deleteListItem = function(list, item) {
    if(list.indexOf(item) > -1) {
      list.splice(list.indexOf(item), 1);
    }
  };

  $scope.showItemOptions = function(item) {
    item.optionsMode = !item.optionsMode;
  };

  $scope.removeList = function (list, listName) {
    delete list[listName];
  };
});
