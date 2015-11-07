angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.links = [
    {'title': 'Test1',
     'originalLink': 'http://17826476',
     'shortLink': 'http://www.google.com',
     'visitCount': '0'
    },
    {'title': 'Test2',
     'originalLink': 'http://svfjks',
     'shortLink': 'ftp',
     'visitCount': '5'
    }
  ];
  $scope.data = {};

  $scope.init = function(){
    $scope.tab = 1;
    $scope.linksTEST = Links.getLinks();
  };

  $scope.selectTab = function(tabNumber){
    $scope.tab = tabNumber;
  };

  $scope.isSelected = function(tabNumber){
    return $scope.tab === tabNumber;
  };
  //$scope.links = Links.getLinks();
  //$scope.init = Links.init;



  $scope.init();
});
