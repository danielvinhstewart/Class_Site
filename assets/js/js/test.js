var hideItems, oldElement, toggleItem;

oldElement = null;

toggleItem = function(currId) {
  var currElement;
  currElement = document.getElementById(currId);
  if (currElement.style.display === 'block') {
    currElement.style.display = 'none';
  } else {
    if (oldElement) {
      oldElement.style.display = 'none';
    }
  }
  currElement.style.display = 'block';
  oldElement = currElement;
  return false;
};

hideItems = function(currClass) {
  var currItem, i;
  currItem = document.getElementsByTagName(currClass);
  i = 0;
  while (i < currItem.length) {
    if (currItem[i].className === "subMenu") {
      currItem[i].style.display = "none";
    }
    i++;
  }
};
