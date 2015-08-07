/**
 * Created by DougoueCedric on 07/08/2015.
 */
app.directive('eventInfo', function (){
    return {
        restrict : 'E',
        scope:{
            event : '='
        },
        templateUrl : 'app/directive/appInfo.html'
    }
})