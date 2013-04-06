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

  var fixBowTie = function() {
    var bowTie = document.getElementById('bow');
    var leftClass = 'left';
    var rightClass = 'right';
    var timing = 500;
    var classList = bowTie.classList;
    classList.add(leftClass);
    window.setTimeout(function() {
      classList.remove(leftClass);
      classList.add(rightClass);
      window.setTimeout(function() {
        classList.remove(rightClass);
      }, timing);
    }, timing);
  }

  W.addEventListener('DOMContentLoaded', function() {
    window.setTimeout(showHiddenElements, 500);
    window.setTimeout(fixBowTie, 1500);
  }, false);

})(window);