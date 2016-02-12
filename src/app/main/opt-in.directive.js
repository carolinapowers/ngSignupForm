  angular
      .module('ngSignupForm')
      .directive('optIn', function () {
          return {
              restrict: 'E',
              transclude: true,
              templateUrl: './app/main/opt-in.directive.html'
          }
      });