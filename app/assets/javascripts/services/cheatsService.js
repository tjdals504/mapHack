angular
  .module('mapHack')
  .factory('cheatsService', cheatsService);

cheatsService.$inject = ['$http', '$stateParams'];

function cheatsService($http, $stateParams) {
  var factory = {};

  factory.getCheats = function() {
    return $http
      .get('/api/map');
  }

  factory.getCheat = function(id) {
    return $http
      .get('/api/cheat/' + id);
  }

  factory.createCheat = function(newCheat) {
    return $http
    	.post('/api/cheat', newCheat);
  }

  factory.deleteCheat = function(id) {
    return $http
      .delete('/api/cheat/' + id)
  }

  return factory;
}