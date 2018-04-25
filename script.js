function handleFormKeyPress(event) {
  if (event.key === "Enter") {
    //window.alert("Enter key was pressed");
    var senderID = event.target.attributes.id
    var newTargetIndex = jumpList[senderID.value]
    var newTargetID = getIDFromIndex(newTargetIndex)
    document.getElementById(newTargetID).focus();
    document.getElementById(newTargetID).select();
  }
}

function getIDFromIndex(index) {
  return "i" + index.toString()
}

var jumpList = new Object();

var IDtoAtomicNumber = {
  "i1"   : 1,
  "i18"  : 2,
  "i19"  : 3,
  "i20"  : 4,
  "i31"  : 5,
  "i32"  : 6,
  "i33"  : 7,
  "i34"  : 8,
  "i35"  : 9,
  "i36"  : 10,
  "i37"  : 11,
  "i38"  : 12,
  "i49"  : 13,
  "i50"  : 14,
  "i51"  : 15,
  "i52"  : 16,
  "i53"  : 17,
  "i54"  : 18,
  "i55"  : 19,
  "i56"  : 20,
  "i57"  : 21,
  "i58"  : 22,
  "i59"  : 23,
  "i60"  : 24,
  "i61"  : 25,
  "i62"  : 26,
  "i63"  : 27,
  "i64"  : 28,
  "i65"  : 29,
  "i66"  : 30,
  "i67"  : 31,
  "i68"  : 32,
  "i69"  : 33,
  "i70"  : 34,
  "i71"  : 35,
  "i72"  : 36,
  "i73"  : 37,
  "i74"  : 38,
  "i75"  : 39,
  "i76"  : 40,
  "i77"  : 41,
  "i78"  : 42,
  "i79"  : 43,
  "i80"  : 44,
  "i81"  : 45,
  "i82"  : 46,
  "i83"  : 47,
  "i84"  : 48,
  "i85"  : 49,
  "i86"  : 50,
  "i87"  : 51,
  "i88"  : 52,
  "i89"  : 53,
  "i90"  : 54,
  "i91"  : 55,
  "i92"  : 56,
  "i93"  : 71,
  "i94"  : 72,
  "i95"  : 73,
  "i96"  : 74,
  "i97"  : 75,
  "i98"  : 76,
  "i99"  : 77,
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
  "i111" : 103,
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
  "i124" : 117,
  "i126" : 118,
  "i127" : 57,
  "i128" : 58,
  "i129" : 59,
  "i130" : 60,
  "i131" : 61,
  "i132" : 62,
  "i133" : 63,
  "i134" : 64,
  "i135" : 65,
  "i136" : 66,
  "i137" : 67,
  "i138" : 68,
  "i139" : 69,
  "i140" : 70,
  "i141" : 89,
  "i142" : 90,
  "i143" : 91,
  "i144" : 92,
  "i145" : 93,
  "i146" : 94,
  "i147" : 95,
  "i148" : 96,
  "i149" : 97,
  "i150" : 98,
  "i151" : 99,
  "i152" : 100,
  "i153" : 101,
  "i154" : 102
}

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
}

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
