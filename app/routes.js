/**
 * Created by DougoueCedric on 02/08/2015.
 */
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'public/views/home.html',
            controller: 'homeController'
        })
        .when('/events', {
            templateUrl: 'public/views/list.html',
            controller: 'eventsController'
        })
        .when("/events/ticket/:id", {
            templateUrl: 'public/views/event-details.html',
            controller: 'detailsOnEventController'
        })
        .otherwise({redirectTo: '/'})
});
