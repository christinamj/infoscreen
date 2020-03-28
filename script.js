"require(@babel/polyfill)";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("running");
  document.querySelector(".startknap").addEventListener("click", firstScene);
  document.querySelector(".stearinikon").addEventListener("click", firstScene);

  document.querySelector("#stearin").addEventListener("click", showTekstBox);
  document.querySelector("#lampe > div.lampecon > div.lampescene").addEventListener("click", showTekstBox2);
  document.querySelector("#arbejdsdag").addEventListener("click", showTekstBox3);
  document.querySelector("#timessquare > div.timescon > div").addEventListener("click", showTekstBox4);
  document.querySelector(".lampeikon").addEventListener("click", removeClass);
  document.querySelector(".arbejdeikon").addEventListener("click", removeClass);
  document.querySelector(".trafiklys").addEventListener("click", removeClass);

  document.querySelector(".stearinikon").addEventListener("click", removeClass2);
  document.querySelector(".arbejdeikon").addEventListener("click", removeClass2);
  document.querySelector(".trafiklys").addEventListener("click", removeClass2);

  document.querySelector(".zoom_out").addEventListener("animationend", showText);
  document.querySelector("#punkter > a:nth-child(2)").addEventListener("click", secondScene);
  getJson();
}

async function getJson() {
  console.log("JSON");
  let response1 = await fetch("solen-01.svg");
  let mySvgData1 = await response1.text();
  document.querySelector(".sol").innerHTML = mySvgData1;

  let response2 = await fetch("scenestearin_stearin.svg");
  let mySvgData2 = await response2.text();
  document.querySelector("#stearin").innerHTML = mySvgData2;

  let response3 = await fetch("scenelampe_glodepare.svg");
  let mySvgData3 = await response3.text();
  document.querySelector(".lampescene").innerHTML = mySvgData3;

  let response4 = await fetch("scene3_elements.svg");
  let mySvgData4 = await response4.text();
  document.querySelector(".arbejdescene").innerHTML = mySvgData4;

  let response5 = await fetch("times_times2-01.svg");
  let mySvgData5 = await response5.text();
  document.querySelector(".timesscene").innerHTML = mySvgData5;

  let response6 = await fetch("trafik_trafik.svg");
  let mySvgData6 = await response6.text();
  document.querySelector(".trafiklys").innerHTML = mySvgData6;

  let response7 = await fetch("lampen_lampen.svg");
  let mySvgData7 = await response7.text();
  document.querySelector(".lampeikon").innerHTML = mySvgData7;

  let response8 = await fetch("stearinlys_stearinlys.svg");
  let mySvgData8 = await response8.text();
  document.querySelector(".stearinikon").innerHTML = mySvgData8;

  let response9 = await fetch("stikkontakt.svg");
  let mySvgData9 = await response9.text();
  document.querySelector(".arbejdeikon").innerHTML = mySvgData9;
}

function removeClass() {
  document.querySelector("ellipse.stearin20").classList.remove("light");
}

function removeClass2() {
  document.querySelector("ellipse.lampe31").classList.remove("light");
}

function showText() {
  console.log("tekst");
  document.querySelector(".startknap").style.display = "block";
  document.querySelector(".zoom_out").style.display = "none";
  document.querySelector(".startknap").classList.add("scalein");
}

function firstScene() {
  document.querySelector("ellipse.stearin20").classList.add("light");
  document
    .querySelectorAll(
      "#lyskeglestearin > polygon.stearin21, #indre, #ydre, #lyskeglestearin > path.stearin24, #lyskeglestearin > path.stearin25, #lyskeglestearin > path.stearin26, #lyskeglestearin > path.stearin27, #lyskeglestearin > polygon.stearin25, #lyskeglestearin > path.stearin28, #lyskeglestearin > path:nth-child(12), #lyskeglestearin > path:nth-child(13), #lyskeglestearin > path:nth-child(14), #lyskeglestearin > path:nth-child(15), #lyskeglestearin > path.stearin29"
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

function showTekstBox() {
  document.querySelector(".tekst_lys").style.display = "block";
  document.querySelector(".tekst_lys").classList.add("scalein");
}

function showTekstBox2() {
  document.querySelector(".tekst_lampe").style.display = "block";
  document.querySelector(".tekst_lampe").classList.add("scalein");
}

function showTekstBox3() {
  document.querySelector(".tekst_skriv").style.display = "block";
  document.querySelector(".tekst_vacum").style.display = "block";
  document.querySelector(".tekst_komfur").style.display = "block";
  document.querySelector(".tekst_skriv").classList.add("scalein");
  document.querySelector(".tekst_vacum").classList.add("scalein");
  document.querySelector(".tekst_komfur").classList.add("scalein");
}

function showTekstBox4() {
  document.querySelector(".tekst_times").style.display = "block";
  document.querySelector(".tekst_times").classList.add("scalein");
}
