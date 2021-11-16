var myFirstGlobalVar = 0;
let mySecondGlobalVar = 1;
const myThirdGlobalVar = 2;

(function () {
  (function () {
    (function () {
      console.log(myFirstGlobalVar);
      console.log(mySecondGlobalVar);
      console.log(myThirdGlobalVar);
    })();
  })();
})();
