const bg = [
  "images/pngs-01.png",
  "images/pngs-02.png",
  "images/pngs-03.png",
  "images/pngs-04.png",
  "images/pngs-05.png",
  "images/pngs-10.png",
  "images/pngs-11.png",
  "images/pngs-12.png",
  "images/pngs-13.png",
  "images/pngs-14.png",
  "images/pngs-15.png",
  "images/pngs-16.png",
  "images/pngs-17.png",
  "images/pngs-18.png",
  "images/pngs-19.png",
  "images/pngs-20.png",
  "images/pngs-21.png",
  "images/pngs-22.png",
  "images/pngs-23.png",
  "images/pngs-24.png",
];

// give a random value from the array
const random = Math.floor(Math.random() * bg.length);
console.log(bg[random]);

// make an image element
var img = document.createElement("img");
// set image source to the random value
img.src = bg[random];
// append to body
document.getElementById("body").appendChild(img);
