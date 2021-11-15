window.addEventListener("load", function () {
  console.log("Az oldal betoltodott.");
}); /* MINDEGY, hogy hova tesszuk, szinte garantalt, hogy ez fut le legutoljara!!!!!!!! */

var myFirstString = "string";
var mySecondString = "string, too";
var myThirdString = `multi-line string`;

var myFirstNumber = 0;
var mySecondNumber = 15;
var myThirdNumber = 7687668776;

var myFirstBoolean = true;
var mySecondBoolean = false;

var myFirstArray = [
  "Discipline",
  "Design",
  "Evolution",
  "Marcus Aurelius",
  "1984",
];

var mySecondArray = [
  "Discipline",
  "Design",
  "Evolution",
  "Marcus Aurelius",
  1984,
];

var myFirstObject = {
  title: "Marcus Aurelius",
  year: 1112,
  author: "Self",
  translations: ["hu", "en", "fr", "de"],
};

console.log(myFirstArray[3]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a + b;
console.log(c);

function add(firstNumber, secondNumber) {
  if (firstNumber > 0) {
    console.log("Az elso szam nagyobb mint 0.");
  } else {
    console.log("Az elso szam kisebb vagy egyenlo 0-val.");
  }
  console.log(firstNumber + secondNumber);
}

add(1, 2);
add(17948, 679);

function subtract(firstNumber, secondNumber) {
  if (firstNumber >= secondNumber) {
    console.log(firstNumber - secondNumber);
  } else {
    console.log(secondNumber - firstNumber);
  }
}

subtract(5, 0);

function check(text) {
  if (text === "Hello") {
    console.log("A text az volt, hogy Hello.");
  } else if (text === "Hello") {
    console.log("Masodik if else ag.");
  }
}

check("Hello");

function compare(a, b) {
  console.log("== ", a == b);
  console.log("=== ", a === b);
  var c = b + a;
  console.log(typeof c);
  console.log(c);
}

compare("1984", 1984);
compare("nyitva", "tartas");
compare(7, 7);
compare(myFirstArray[4], mySecondArray[4]);

var myFirstFunc = function () {
  console.log("Ez egy fuggveny amit valtozoban taroltunk el.");
};

myFirstFunc();

(function (param) {
  console.log("Ezt a fuggvenyt egybol meghivtuk.", param);
})("Hello");

var mySecondFunc = function () {
  console.log("Ez vajon mikor fut le...");
};

var anotherVar = mySecondFunc;
anotherVar();

/* function init() {}

window.addEventListener("load", init);
 */

var theLastFunc = function (text) {
  console.log(typeof text);
  console.log(
    text()
  ); /* itt ezen a ponton lefuttatom, es kiirja a return value-t */
};

theLastFunc(function () {
  return "Im calling the last function.";
});

/*
var window = {
  addEventListener = function (eventName, eventFunction) {
  }
}
gyakorlatilag ez tortenik a motorhazteto alatt */
