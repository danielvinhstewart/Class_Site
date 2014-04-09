(function() {
  var currElement, oldElement, toggleItem;

  toggleItem = function(currId) {};

  currElement = document.getElementById(currId);

  if (currElement.style.display === 'block') {
    currElement.style.display = 'none';
  } else {
    if (oldElement) {
      oldElement.style.display = 'none';
    }
    currelement.style.display = 'block';
    oldElement = currElement;
  }

  return;

}).call(this);
