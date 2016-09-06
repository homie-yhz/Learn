/**
 * Created by Administrator on 2016/8/30 0030.
 */
var app = angular.module('myApp', []);

/*创建自定义服务   可以想象为公共的 对象， 然后可以调用里面的  属性和方法*/
app.service('customService', function() {
  this.attrs = '这是自定义服务里面的属性';
  this.myFunc = function (x) {
    return x+'定制服务';
  }
});


/*创建控制器*/
app.controller('myCtrl', function($scope,$rootScope,$location,$http,$timeout,$interval,customService) {

  $scope.firstName= "John";
  $scope.lastName= "Doe";
  $scope.name = "John Doe";
  $scope.names = ["Emil", "Tobias", "Linus"];

  $scope.myUrl = $location.absUrl();  //获取本地url
  $rootScope.fackName = "Refsnes";   //全局作用域

  //http请求
  $http.get('json.json').then(function (response) {
    $scope.myWelcome = response.data;  //response  对象里面还有好多内容 可以通过直接输出的形式来查看里面的内容
  });

  //$timeout 服务  对应window.location.settimeout  定义了  几秒之后要执行的事件
  $scope.myHeader = "两秒之后会发生变化！";
  $timeout(function () {
    $scope.myHeader = "发生变化了";
  }, 2000);

  //$timeout 服务  对应window.location.setInterval  定义了  几秒之后要执行的事件
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(function () {
    $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);

  /*订制服务*/
  $scope.hex = customService.myFunc(33);
  $scope.attrs = customService.attrs;

});

//在过滤器中使用自定义服务
//这里面是自定义的 过滤器
app.filter('myFormat',['customService', function(customService) {
  return function(x) {
    return customService.myFunc(x);
  };
}]);


/*名字控制器*/
app.controller('namesCtrl',function($scope){
  $scope.names1 = [
    {name:'Jani',country:'Norway'},
    {name:'Hege',country:'Sweden'},
    {name:'Kai',country:'Denmark'}
  ];
});

/*自定义指令：组件 模块  替换模板*/
app.directive("runoobDirective", function() {
  return {
    restrict : "AE",  //一共四种 E 作为元素名使用 A 作为属性使用 C 作为类名使用 M 作为注释使用    A和E比较常用
    template : "<h1>自定义指令!</h1>"
  };
});

