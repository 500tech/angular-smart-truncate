angular.module('500tech.smart-truncate', []).filter 'truncate', ->
  (input, length = 10) ->
    return input if input.length <= length || input.length < 4 
    
    start = Math.round((length - 3) / 2)
    end = length - 3 - start
    
    input.slice(0, start) + '...' + input.slice(-end) 