"require(@babel/polyfill)";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("running");
  getJson();
}

<<<<<<< HEAD
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
=======
async function getJson() {
  console.log("JSON");
  let response1 = await fetch("solen.svg");
  let mySvgData1 = await response1.text();
  document.querySelector("#sol").innerHTML = mySvgData1;

  let response2 = await fetch("stearin.svg");
  let mySvgData2 = await response2.text();
  document.querySelector("#stearin").innerHTML = mySvgData2;
}
>>>>>>> 0bce49bcd77ec2454ad4619f973c6885fc7fd9a0
