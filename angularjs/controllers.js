/**
 * Created by Administrator on 2016/8/30 0030.
 */
var app = angular.module('myApp', []);

/*创建控制器*/
app.controller('myCtrl', function($scope,$rootScope) {
  $scope.firstName= "John";
  $scope.lastName= "Doe";
  $scope.name = "John Doe";
  $scope.names = ["Emil", "Tobias", "Linus"];
  $rootScope.fackName = "Refsnes";   //全局作用域
});

/*自定义指令：组件 模块  替换模板*/
app.directive("runoobDirective", function() {
  return {
    restrict : "AE",  //一共四种 E 作为元素名使用 A 作为属性使用 C 作为类名使用 M 作为注释使用    A和E比较常用
    template : "<h1>自定义指令!</h1>"
  };
});