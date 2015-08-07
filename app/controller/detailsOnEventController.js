/**
 * Created by DougoueCedric on 01/08/2015.
 */
app.controller("detailsOnEventController", function ($scope, $http, $routeParams) {

    $http.get('app/mock/events.json').success(
        function (data) {
            $scope.data = data.events[$routeParams.id];
        }
    );


});