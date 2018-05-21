"use strict";

function mystrict(){
  bar = 5;
  console.log(bar);
}


mystrict(); // will throw an errormystrict

/*

ReferenceError: bar is not defined
    at mystrict (/Users/mkassem/Desktop/FrontEndMasterCourses/Deep-JavaScript-Foundations/strict.js:5:7)
    at Object.<anonymous> (/Users/mkassem/Desktop/FrontEndMasterCourses/Deep-JavaScript-Foundations/strict.js:10:1)
    at Module._compile (module.js:573:32)
    at Object.Module._extensions..js (module.js:582:10)
    at Module.load (module.js:490:32)
    at tryModuleLoad (module.js:449:12)
    at Function.Module._load (module.js:441:3)
    at Module.runMain (module.js:607:10)
    at run (bootstrap_node.js:420:7)
    at startup (bootstrap_node.js:139:9)

*/