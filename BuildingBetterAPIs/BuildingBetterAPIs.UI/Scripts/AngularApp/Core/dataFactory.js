angular.module('restApiApp').factory('dataFactory', function ($http, $q) {
    var service = {};

    service.data = [];

    service.createEntity = function (model) {
        return $http.post('/api/create-entity', JSON.stringify(model),
        {
            headers: { 'Content-Type': 'application/json', 'Accept': 'text/json' },
        }).then(function (response) {
            service.data = response;
            return service.data;
        });
    }

    service.standardGet = function (id) {
        var url = '/api/standard-get?id=' + id;

        return $http.get(url).then(function (response) {
            service.data = response;
            return service.data;
        })
    }

    service.explodeGet = function (id) {
        var url = '/api/explode-get?id=' + id;

        return $http.get(url).then(function (response) {
            service.data = response;
            return service.data;
        })
    }

    return service;
});