"use strict";angular.module("m101jsApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/week1",{templateUrl:"views/week1.html",controller:"Week1Ctrl"}).when("/week2",{templateUrl:"views/week2.html",controller:"Week2Ctrl"}).otherwise({redirectTo:"/"})}]),angular.module("m101jsApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("m101jsApp").controller("Week1Ctrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("m101jsApp").controller("Week2Ctrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("m101jsApp").controller("NavbarCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);