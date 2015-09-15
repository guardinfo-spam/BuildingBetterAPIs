angular.module('restApiApp').controller('appCtrl', ['$scope', '$http', 'dataFactory', function ($scope, $http, dataFactory) {
    $scope.entity = {};

    $scope.Init = function () {
        //first try the standard get
        dataFactory.standardGet(2).then(function (result) {            
        })

        //next the explode one
        dataFactory.explodeGet(2).then(function (result) {
        },
        function (error) {
        });

        //finally post something
        var model = { FirstName: "Andrei", LastName: "Dragotoniu" };

        dataFactory.createEntity(model).then(function (result) {
            $scope.entity = result.data;
        })
    }
   
    $scope.Init();
}]);