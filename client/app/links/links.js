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
  

});
