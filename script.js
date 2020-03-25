"require(@babel/polyfill)";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("running");
  getJson();
}

async function getJson() {
  console.log("JSON");
  let response1 = await fetch("solen.svg");
  let mySvgData1 = await response1.text();
  document.querySelector(".sol").innerHTML = mySvgData1;

  let response2 = await fetch("stearin.svg");
  let mySvgData2 = await response2.text();
  document.querySelector("#stearin").innerHTML = mySvgData2;
}
