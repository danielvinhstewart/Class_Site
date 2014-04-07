
oldElement = null
toggleItem = (currId) ->
  currElement = document.getElementById(currId);
  if currElement.style.display is 'block'
    currElement.style.display = 'none'
  else
    oldElement.style.display = 'none' if oldElement
  currElement.style.display = 'block'
  oldElement = currElement
  return false

hideItems = (currClass) ->
  currItem = document.getElementsByTagName(currClass);
  i = 0
  while i < currItem.length
    currItem[i].style.display = "none"  if currItem[i].className is "subMenu"
    i++
  return