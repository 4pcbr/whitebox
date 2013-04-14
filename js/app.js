;(function(W) {

  var showHiddenElements = function() {
    var removeHiddenOnloadClass = "remove_hidden_onload";
    var hiddenClass = "hidden";
    var hiddenElements = document.querySelectorAll("." + hiddenClass);
    for (var i = 0, l = hiddenElements.length; i < l; i++) {
      var classList = hiddenElements[i].classList;
      classList.remove(removeHiddenOnloadClass);
      classList.remove(hiddenClass);
    }
  }

  W.addEventListener('DOMContentLoaded', function() {
    window.setTimeout(showHiddenElements, 500);
  }, false);

})(window);