"require(@babel/polyfill)";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("running");
  document.querySelector(".startknap").addEventListener("click", firstScene);
  document.querySelector(".zoom_out").addEventListener("animationend", showText);
  document.querySelector("#punkter > a:nth-child(2)").addEventListener("click", secondScene);
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
  document
    .querySelectorAll(
      "#lyskeglestearin > polygon.st21, #indre, #ydre, #lyskeglestearin > path.st24, #lyskeglestearin > path.st25, #lyskeglestearin > path.st26, #lyskeglestearin > path.st27, #lyskeglestearin > polygon.st25, #lyskeglestearin > path.st28, #lyskeglestearin > path:nth-child(12), #lyskeglestearin > path:nth-child(13), #lyskeglestearin > path:nth-child(14), #lyskeglestearin > path:nth-child(15), #lyskeglestearin > path.st29"
    )
    .forEach(elm => {
      elm.classList.add("pulse");
    });
}

function secondScene() {
  document.querySelector("ellipse.lampe31").classList.add("light");
  document.querySelector("#pare").classList.add("pulse");
  document.querySelector("#mork > path.lampe27").classList.add("pulse");
  document.querySelector("#outline").classList.add("pulse");
}

function showText() {
  console.log("tekst");
  document.querySelector(".startknap").style.display = "block";
  document.querySelector(".zoom_out").style.display = "none";
}
