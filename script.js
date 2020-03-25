"require(@babel/polyfill)";

// window.addEventListener("DOMContentLoaded", start);

// function start() {
//   console.log("running");
//   getJson();
// }

// async function getJson() {
//   console.log("JSON");
//   let response = await fetch("static/solen.svg");
//   let mySvgData = await response.text();
//   //   document.querySelector("#lampe").innerHTML = mySvgData;
// }

fetch("data.json")
  .then(result => result.json())
  .then(data => {
    document.querySelector(".stearin").innerHTML = "<img src='" + data.data[2].img + "'>";
    console.log(data);
  });

// function displayItem(data) {
//   console.log("HElloooo");
//   console.log(data);
// ;
// }
