"require(@babel/polyfill)";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("running");
  document.querySelector(".startknap").addEventListener("click", firstScene);
  // document.querySelector(".zoom_out").addEventListener("animationend");
  getJson();
  getJson2();
  getJson3();
  getJson4();
  getJson5();
}

async function getJson() {
  console.log("JSON");
  let response1 = await fetch("solen.svg");
  let mySvgData1 = await response1.text();
  document.querySelector(".sol").innerHTML = mySvgData1;
}

async function getJson2() {
  console.log("JSON");

  let response2 = await fetch("scenestearin_stearin.svg");
  let mySvgData2 = await response2.text();
  document.querySelector("#stearin").innerHTML = mySvgData2;
}

async function getJson3() {
  console.log("JSON");

  let response3 = await fetch("scenelampe_glodepare.svg");
  let mySvgData3 = await response3.text();
  document.querySelector(".lampescene").innerHTML = mySvgData3;
}

async function getJson4() {
  let response4 = await fetch("scene3_elements.svg");
  let mySvgData4 = await response4.text();
  document.querySelector(".arbejdescene").innerHTML = mySvgData4;
}

async function getJson5() {
  let response5 = await fetch("times_times.svg");
  let mySvgData5 = await response5.text();
  document.querySelector(".timesscene").innerHTML = mySvgData5;
}

function firstScene() {
  document.querySelector("ellipse.st20").classList.add("light");
}
