angular.module('app', ['chart.js'])
.controller('MyCtrl',['$interval','$http','$scope',function($interval,$http,$scope){
    var refresh = function(){
        var id=[];
        var exchange_rate=[];
        $http.get('/showdata').then(function successCallback(response) {
            angular.forEach(response.data,function(value,key){
                   id.push(value.id);
                   exchange_rate.push(value.price_usd/value.price_btc);
                   console.log("rate is",value.price_usd/value.price_btc);
            });
            $scope.labels = id;
            $scope.data = exchange_rate;
           }, function errorCallback(response) {
           console.log("responce value is",response);
        });
   };
   refresh();
    $interval(refresh, 300000);
}]);