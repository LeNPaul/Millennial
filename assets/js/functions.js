$(document).ready(function() {
  var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
  if (!touchsupport){ // browser doesn't support touch
      document.documentElement.className += " non-touch"
  }
});
