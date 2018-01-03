/* controller for header changing header background color */
app.controller('headerController', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});

/* controller for header changing footer background color */
app.controller('footerController', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});

/* For showing pages from top for tab any link */
app.controller('topscrollController', function($scope, $location, $anchorScroll){
		$scope.scrollTo = function (scrollLocation){
			$location.hash(scrollLocation);
			$anchorScroll();
		}
});
