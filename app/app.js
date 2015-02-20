angular.module('app', [])
    .controller('HotelCtrl', function($scope, $http) {
    $http.get('js/hotels.json')
        .then(function(res){
        $scope.hotels = res.data;
    });
    $scope.headers = ['Name', 'Rating', 'Facilities'];
    $scope.columnSort = {sortColumn: 'Rating', reverse: false};    
}); 