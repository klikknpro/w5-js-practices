var myFirstGlobalVar = 0;
let mySecondGlobalVar = 1;
const myThirdGlobalVar = 2;

(function () {
  (function () {
    (function () {
      var a = 3;
      console.log(a);
    })();
  })();
})();

console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);

var a = 6;

const f1 = function () {
  console.log(a);
  var a = 4;
  console.log(a);
  // console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);
};
f1();

const f2 = function () {
  console.log(a);
  var a = 5;
  console.log(a);
  // console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);
};
f2();

console.log(a);

const f3 = function () {
  /* ebben a sorban deklaralodik + inicializalodik a var b egy undefined ertekkel; mert ez function scope */
  console.log(b);
  var b;
  console.log(b);
  b = 6;
  console.log(b);
};
f3();

const f4 = function () {
  // console.log(b); itt meg error lesz mert nincs inicializalva
  let b; /* itt lesz deklaralva es inicializalva */
  console.log(b);
  b = 6;
  console.log(b);
};
f4();

const f5 = function () {
  // console.log(b);
  const b = 7;
  console.log(b);
  // b = 6;
  // console.log(b);
};
f5();

/* const: nem tudjuk letrehozni ertek nelkul!!!!! nem lehet undefined-al inditani */

(function f6() {
  let c = "";
  console.log(c);
  console.log(typeof c);
  console.log("valami " + c);
  if (true) {
    let d = 9;
    const e = 10;
    console.log(d, e);
  }
  // a let es a const az if-bol es a for ciklusbol sem szbadul ki
})();

function f7() {
  // console.log(i);
  let ls = ["a", "b", "c", "d", "e", "f"];

  for (let i = 0; i < ls.length; i++) {
    // az i alapbol var = i, ami sz@r mert kiszbadul a for ciklusbol. ezert kell let i!!!
    console.log(ls[i]);
  }

  for (const item of ls) {
    console.log(item);
  }

  for (const key in ls) {
    console.log(key);
    const item = ls[key];
    console.log(item);
  }
  console.log(f8(ls));
}

f7();

function f8(arrayFromParam) {
  // const f8 = arrayFromParam => { ez itt nem lehet arrow function egy const-ban elmentve mert akkor feljebb az f7-en belul nem fog hozzaferni a const f8-hoz :O
  let abc = [];
  for (const item of arrayFromParam) {
    if (item !== true) {
      abc += item;
    }
  }
  return abc; // innentol kezdve a (barhol) lefuttatott f8() vegeredmenye az abc lesz
}

const f9 = (text) => `<div>${text}</div>`; // automata return b***zmeg...
// sot, a text-re se kene (text), b***zmeg...

window.addEventListener("load", function () {
  let f8Result = f8(["10", "11", "15", "17"]);
  document.getElementById("root").insertAdjacentHTML("afterbegin", f8Result);
  document
    .getElementById("root")
    .insertAdjacentHTML("afterbegin", f9("Tuesday"));
});
