// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());


// Place any jQuery/helper plugins in here.
$(document).ready(function () {
  $(".custom-select ").change(function() {
    if ($(this).find('option:selected').text() === $(this).find('option:first-child').text()) {
      $(this).addClass('custom-select-default');
    } else {
      $(this).removeClass('custom-select-default');
    }
  }).trigger( "change" );
});
