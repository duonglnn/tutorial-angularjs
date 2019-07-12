var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home'); //Mọi đường dẫn không hợp lệ đều được chuyển đến state home

    $stateProvider

        .state('product', { // Định ngĩa 1 state product
            url: '/product', // khai báo Url hiển thị
            templateUrl: 'templates/product/product.html', //đường dẫn view
            controller: 'PrtController' //// Khai báo 1 controller cho state product
        })

        .state('home', {
            url: '/home',
            templateUrl: 'templates/home/home.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'templates/about/about.html'
        })

});