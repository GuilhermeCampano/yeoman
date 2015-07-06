'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
app.controller('TodoCtrl', function ($scope) {
    
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    
    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    };
    
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    
});