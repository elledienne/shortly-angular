angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // $scope.links = [
  //   {'title': 'Test1',
  //    'originalLink': 'http://17826476',
  //    'shortLink': 'http://www.google.com',
  //    'visitCount': '0'
  //   },
  //   {'title': 'Test2',
  //    'originalLink': 'http://svfjks',
  //    'shortLink': 'ftp',
  //    'visitCount': '5'
  //   }
  // ];
  $scope.data = {};
  $scope.url = null;
  $scope.links = null;
  $scope.isLoading = false;
  $scope.newLink = null;

  $scope.init = function () {
    $scope.tab = 1;
    $scope.getLinks();
  };

  $scope.postLink = function () {
    $scope.setLoading(true);
    Links.postLink($scope.url).then(function (resp) {
      $scope.newLink = resp;
      $scope.setLoading(false);
      //console.log($scope.links);
    });
  };

  $scope.getLinks = function () {
    Links.getLinks().then(function (resp) {
      $scope.links = resp;
      //console.log($scope.links);
    });
  };

  $scope.selectTab = function (tabNumber) {
    $scope.tab = tabNumber;
  };

  $scope.isSelected = function (tabNumber) {
    return $scope.tab === tabNumber;
  };

  $scope.setLoading = function (state) {
    $scope.isLoading = state;
  };
  //$scope.links = Links.getLinks();
  //$scope.init = Links.init;

  $scope.init();
});
