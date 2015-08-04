/**
 * Created by DougoueCedric on 01/08/2015.
 */
app.controller("eventsController", ['$scope', function ($scope) {

    $scope.r = {
        "events": {
            "-JWT5y43YFy1mGirVVS2": {
                "date": 1410328158691,
                "name": "Chill on Sundays",
                "picture" : "public/img/events/chill/feature-image.png",
                "description" : "Chill chill and chill",


                "promotor": {
                    "name": "Chill on Sundays",
                    "contacts": "chill@gmail.com",
                },

                "clients": [
                    {
                        "name": "Adrian Rodrigues",
                        "sexe": "male",
                        "tickets": [
                            {
                                "passtype": "vip",
                                "numbers": 5,
                                "paid": 250
                            },
                        ]
                    },

                    {
                        "name": "Jackie Merci",
                        "sexe": "female",
                        "tickets": [
                            {
                                "passtype": "simple access",
                                "numbers": 2,
                                "paid": 20
                            }
                        ]
                    }

                ]
            },
            "-JWT5y43YFpqmGirVVS2": {
                "date": 2000328158000,
                "name": "Hip Hop vs Dancehall",
                "picture" : "public/img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
                "description" : "Chill chill and chill",

                "promotor": {
                    "name": "Dj Keep",
                    "contacts": "chill@gmail.com",
                },

                "clients": [
                    {
                        "name": "Adrian Rodrigues",
                        "sexe": "male",
                        "tickets": [
                            {
                                "passtype": "vip",
                                "numbers": 5,
                                "paid": 250
                            },
                        ]
                    },

                    {
                        "name": "Jackie Merci",
                        "sexe": "female",
                        "tickets": [
                            {
                                "passtype": "simple access",
                                "numbers": 2,
                                "paid": 20
                            }
                        ]
                    },

                    {
                        "name": "Jackie Merci",
                        "sexe": "female",
                        "tickets": [
                            {
                                "passtype": "simple access",
                                "numbers": 2,
                                "paid": 20
                            }
                        ]
                    }

                ]
            }
        }
    };

    $scope.text = "Hello";


}]);