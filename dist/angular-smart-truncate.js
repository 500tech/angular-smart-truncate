angular.module('500tech.smart-truncate', []).filter('truncate', function () {
  return function (input, length) {
    length = length || 10;
    
    if (input.length <= length || input.length < 4) {
      return input;      
    }

    var start = Math.round((length - 3) / 2);
    var end = length - 3 - start;

    return input.slice(0, start) + '...' + input.slice(-end)
  };
});
