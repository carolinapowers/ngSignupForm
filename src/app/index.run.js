(function() {
  'use strict';

  angular
    .module('ngSignupForm')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
