function handleFormKeyDown(event) {
  // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
  var senderID = event.target.attributes.id;
  if (event.key === "Enter" && event.shiftKey) {
    cursorUp(senderID);
  } else if (event.key === "Enter") {
    cursorDown(senderID);
  } else if (event.key === "ArrowDown") {
    cursorDown(senderID);
  } else if (event.key === "ArrowUp") {
    cursorUp(senderID);
  }
}

function cursorUp(elemID) {
    var newTargetID = reverseJumpList[elemID.value];
    document.getElementById(newTargetID).focus();
    document.getElementById(newTargetID).select();
}

function cursorDown(elemID) {
    var newTargetID = jumpList[elemID.value];
    document.getElementById(newTargetID).focus();
    document.getElementById(newTargetID).select();
}

function handleFormKeyUp(event) {
  // var senderID = event.target.attributes.id;
  // var senderValue = event.target.value;
  // var atomicNumber = IDtoAtomicNumber[senderID.value];
  // var atomicSymbol = AtomicNumberToSymbol[atomicNumber];
  // TODO: should checkAnswers be passed the edited cell?
  checkAnswers();
}

function getIDFromIndex(index) {
  return "i" + index.toString();
}

var jumpList = new Object();
var reverseJumpList = new Object();

var IDtoAtomicNumber = {
  "i1" : 1,
  "i18" : 2,
  "i19" : 3,
  "i20" : 4,
  "i31" : 5,
  "i32" : 6,
  "i33" : 7,
  "i34" : 8,
  "i35" : 9,
  "i36" : 10,
  "i37" : 11,
  "i38" : 12,
  "i49" : 13,
  "i50" : 14,
  "i51" : 15,
  "i52" : 16,
  "i53" : 17,
  "i54" : 18,
  "i55" : 19,
  "i56" : 20,
  "i57" : 21,
  "i58" : 22,
  "i59" : 23,
  "i60" : 24,
  "i61" : 25,
  "i62" : 26,
  "i63" : 27,
  "i64" : 28,
  "i65" : 29,
  "i66" : 30,
  "i67" : 31,
  "i68" : 32,
  "i69" : 33,
  "i70" : 34,
  "i71" : 35,
  "i72" : 36,
  "i73" : 37,
  "i74" : 38,
  "i75" : 39,
  "i76" : 40,
  "i77" : 41,
  "i78" : 42,
  "i79" : 43,
  "i80" : 44,
  "i81" : 45,
  "i82" : 46,
  "i83" : 47,
  "i84" : 48,
  "i85" : 49,
  "i86" : 50,
  "i87" : 51,
  "i88" : 52,
  "i89" : 53,
  "i90" : 54,
  "i91" : 55,
  "i92" : 56,
  "i93" : 57,
  "i94" : 72,
  "i95" : 73,
  "i96" : 74,
  "i97" : 75,
  "i98" : 76,
  "i99" : 77,
  "i100" : 78,
  "i101" : 79,
  "i102" : 80,
  "i103" : 81,
  "i104" : 82,
  "i105" : 83,
  "i106" : 84,
  "i107" : 85,
  "i108" : 86,
  "i109" : 87,
  "i110" : 88,
  "i111" : 89,
  "i112" : 104,
  "i113" : 105,
  "i114" : 106,
  "i115" : 107,
  "i116" : 108,
  "i117" : 109,
  "i118" : 110,
  "i119" : 111,
  "i120" : 112,
  "i121" : 113,
  "i122" : 114,
  "i123" : 115,
  "i124" : 116,
  "i125" : 117,
  "i126" : 118,
  "i127" : 58,
  "i128" : 59,
  "i129" : 60,
  "i130" : 61,
  "i131" : 62,
  "i132" : 63,
  "i133" : 64,
  "i134" : 65,
  "i135" : 66,
  "i136" : 67,
  "i137" : 68,
  "i138" : 69,
  "i139" : 70,
  "i140" : 71,
  "i141" : 90,
  "i142" : 91,
  "i143" : 92,
  "i144" : 93,
  "i145" : 94,
  "i146" : 95,
  "i147" : 96,
  "i148" : 97,
  "i149" : 98,
  "i150" : 99,
  "i151" : 100,
  "i152" : 101,
  "i153" : 102,
  "i154" : 103
};

var AtomicNumberToSymbol = {
  1 : "H",
  2 : "He",
  3 : "Li",
  4 : "Be",
  5 : "B",
  6 : "C",
  7 : "N",
  8 : "O",
  9 : "F",
  10 : "Ne",
  11 : "Na",
  12 : "Mg",
  13 : "Al",
  14 : "Si",
  15 : "P",
  16 : "S",
  17 : "Cl",
  18 : "Ar",
  19 : "K",
  20 : "Ca",
  21 : "Sc",
  22 : "Ti",
  23 : "V",
  24 : "Cr",
  25 : "Mn",
  26 : "Fe",
  27 : "Co",
  28 : "Ni",
  29 : "Cu",
  30 : "Zn",
  31 : "Ga",
  32 : "Ge",
  33 : "As",
  34 : "Se",
  35 : "Br",
  36 : "Kr",
  37 : "Rb",
  38 : "Sr",
  39 : "Y",
  40 : "Zr",
  41 : "Nb",
  42 : "Mo",
  43 : "Tc",
  44 : "Ru",
  45 : "Rh",
  46 : "Pd",
  47 : "Ag",
  48 : "Cd",
  49 : "In",
  50 : "Sn",
  51 : "Sb",
  52 : "Te",
  53 : "I",
  54 : "Xe",
  55 : "Cs",
  56 : "Ba",
  57 : "La",
  58 : "Ce",
  59 : "Pr",
  60 : "Nd",
  61 : "Pm",
  62 : "Sm",
  63 : "Eu",
  64 : "Gd",
  65 : "Tb",
  66 : "Dy",
  67 : "Ho",
  68 : "Er",
  69 : "Tm",
  70 : "Yb",
  71 : "Lu",
  72 : "Hf",
  73 : "Ta",
  74 : "W",
  75 : "Re",
  76 : "Os",
  77 : "Ir",
  78 : "Pt",
  79 : "Au",
  80 : "Hg",
  81 : "Tl",
  82 : "Pb",
  83 : "Bi",
  84 : "Po",
  85 : "At",
  86 : "Rn",
  87 : "Fr",
  88 : "Ra",
  89 : "Ac",
  90 : "Th",
  91 : "Pa",
  92 : "U",
  93 : "Np",
  94 : "Pu",
  95 : "Am",
  96 : "Cm",
  97 : "Bk",
  98 : "Cf",
  99 : "Es",
  100 : "Fm",
  101 : "Md",
  102 : "No",
  103 : "Lr",
  104 : "Rf",
  105 : "Db",
  106 : "Sg",
  107 : "Bh",
  108 : "Hs",
  109 : "Mt",
  110 : "Ds",
  111 : "Rg",
  112 : "Cn",
  113 : "Nh",
  114 : "Fl",
  115 : "Mc",
  116 : "Lv",
  117 : "Ts",
  118 : "Og",
};

function initializeJumpList() {
  var nRows = 7;
  var nCols = 18;
  var nNormalCells = nCols * (nRows - 1);
  for (var i = 1; i <= nNormalCells; i++) {
    var myID = getIDFromIndex(i);
    var targetID = getIDFromIndex(i + nCols);
    jumpList[myID] = targetID;
    reverseJumpList[targetID] = myID;
  }
  var nLastBottomCell = nNormalCells + nCols;
  for (var i = nNormalCells + 1; i < nLastBottomCell; i++) {
    var myID = getIDFromIndex(i);
    var targetID = getIDFromIndex(i - nNormalCells + 1);
    // To jump to the top of next column, subtract out 108.
    jumpList[myID] = targetID;
    reverseJumpList[targetID] = myID;
  }
  // Map the last cell to itself.
  var IDLastBottomCell = getIDFromIndex(nLastBottomCell);
  jumpList[IDLastBottomCell] = IDLastBottomCell;
  reverseJumpList[IDLastBottomCell] = IDLastBottomCell;

  var nRowSecondary = 2;
  var nColSecondary = 14;
  var nLastLanthanide = nLastBottomCell + nColSecondary;
  var nLastActinide = nLastBottomCell + nRowSecondary * nColSecondary;
  for (var i = nLastBottomCell + 1; i <= nLastLanthanide; i++) {
    var myID = getIDFromIndex(i);
    var targetID = getIDFromIndex(i + nColSecondary);
    jumpList[myID] = targetID;
    reverseJumpList[targetID] = myID;
  }
  for (var i = nLastLanthanide + 1; i < nLastActinide; i++) {
    var myID = getIDFromIndex(i);
    var targetID = getIDFromIndex(i - nColSecondary + 1);
    jumpList[myID] = targetID;
    reverseJumpList[targetID] = myID;
  }
  // Jump from last actinide to top of series 3
  jumpList[getIDFromIndex(nLastActinide)] = getIDFromIndex(3);
  reverseJumpList[getIDFromIndex(3)] = getIDFromIndex(nLastActinide);
}

function registerEventHandlers() {
  var nCells = 18 * 7 + 2 * 14;
  for (var i = 1; i <= nCells; i++) {
    var elementID = getIDFromIndex(i);
    var element = document.getElementById(elementID);
    if (element == null) {
      console.log("Error: Could not get ID: " + elementID);
    } else {
      element.onkeydown = handleFormKeyDown;
      element.onkeyup = handleFormKeyUp;
    }
  }
}

function checkAnswers() {
  var nCells = 18 * 7 + 2 * 14;
  var nCorrect = 0;
  var nIncorrect = 0;
  var nMissing = 0;
  for (var i = 1; i <= nCells; i++) {
    var cellID = getIDFromIndex(i);
    var cell = document.getElementById(cellID);
    var guess = cell.value;
    if (IDtoAtomicNumber.hasOwnProperty(cellID)) {
      var atomicNumber = IDtoAtomicNumber[cellID];
      var answer = AtomicNumberToSymbol[atomicNumber];
      if (guess === '') {
        cell.style.color = "black";
        nMissing++;
      } else if (guess === answer) {
        nCorrect++;
        cell.style.color = "green";
      } else {
        // incorrect guess
        nIncorrect++;
        cell.style.color = "red";
      }
    } else {
      // cells that should be blank
      if (guess != '') {
        // non-blank guess in a cell that should be blank
        nIncorrect++;
        cell.style.color = "red";
      } else {
        cell.style.color = "black";
      }
    }
  }
  var elemCorrect = document.getElementById("count_correct");
  var elemIncorrect = document.getElementById("count_incorrect");
  elemCorrect.value = nCorrect;
  elemIncorrect.value = nIncorrect;
}

function initialize() {
  initializeJumpList();
  registerEventHandlers();
  checkAnswers();
}

window.onload = initialize;
