function handleFormKeyPress(event) {
  if (event.key === "Enter") {
    //window.alert("Enter key was pressed");
    var senderID = event.target.attributes.id
    console.log(senderID)
    var newTargetIndex = jumpList[senderID.value]
    console.log(newTargetIndex)
    var newTargetID = getIDFromIndex(newTargetIndex)
    document.getElementById(newTargetID).focus();
    document.getElementById(newTargetID).select();
  }
}

function getIDFromIndex(index) {
  return "i" + index.toString()
}

var jumpList = new Object();

function initializeJumpList () {
  var nRows = 7;
  var nCols = 18;
  var nNormalCells = nCols*(nRows - 1);
  for (var i = 1; i <= nNormalCells; i++) {
    var myID = getIDFromIndex(i);
    jumpList[myID] = i + nCols;
  }
  var nLastBottomCell = nNormalCells + nCols;
  for (var i = nNormalCells+1; i < nLastBottomCell; i++) {
    var myID = getIDFromIndex(i);
    // To jump to the top of next column, subtract out 108.
    jumpList[myID] = i - nNormalCells + 1;
  }
  // Map the last cell to itself.
  jumpList[getIDFromIndex(nLastBottomCell)] = nLastBottomCell;

  var nRowSecondary = 2;
  var nColSecondary = 14;
  var nLastLanthanide = nLastBottomCell + nColSecondary;
  var nLastActinide = nLastBottomCell + nRowSecondary*nColSecondary;
  for (var i = nLastBottomCell+1; i <= nLastLanthanide; i++) {
    var myID = getIDFromIndex(i);
    jumpList[myID] = i + nColSecondary;
  }
  for (var i = nLastLanthanide+1; i < nLastActinide; i++) {
    var myID = getIDFromIndex(i);
    jumpList[myID] = i - nColSecondary + 1;
  }
  jumpList[getIDFromIndex(nLastActinide)] = 3;
}

function registerEventHandlers() {
  for (var i = 1; i <= 154; i++) {
    console.log(i);
    var elementID = getIDFromIndex(i)
    var element = document.getElementById(elementID);
    if (element == null) {
      console.log("Could not get ID: "+elementID)
    } else {
      element.onkeypress = handleFormKeyPress;
    }
  }
}

function initialize() {
  initializeJumpList();
  registerEventHandlers();
}

window.onload = initialize;
