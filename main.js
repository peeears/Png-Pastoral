const NOF = 58;
const NOFR = 54;
const NOS = 52;
const mainPng = document.querySelector(".mainPng");
const libraryBtn = document.getElementById("library");

const fileName = [""];

function imagePathArray(imageType, numberOfImages) {
  let array = [];
  for (let i = 0; i < numberOfImages; i++) {
    array.push(`./png/${imageType}s/${i + 1}-${imageType}.png`);
  }
  return array;
}

const fields = imagePathArray("field", NOF);
const frames = imagePathArray("frame", NOFR);
const skys = imagePathArray("sky", NOS);

function generateImageContainer(fieldArray, frameArray, skyArray) {
  const container = document.createElement("div");
  container.classList.add("pngs");
  const frame = document.createElement("img");
  const sky = document.createElement("img");
  const field = document.createElement("img");
  frame.id = "frame";
  sky.id = "sky";
  field.id = "field";
  frame.src = frameArray[Math.floor(Math.random() * frameArray.length)];
  sky.src = skyArray[Math.floor(Math.random() * skyArray.length)];
  field.src = fieldArray[Math.floor(Math.random() * fieldArray.length)];
  container.appendChild(frame);
  container.appendChild(field);
  container.appendChild(sky);
  setCaption(frame);
  return container;
}

mainPng.appendChild(generateImageContainer(fields, frames, skys));

libraryBtn.addEventListener("click", () => {
  mainPng.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    mainPng.appendChild(generateImageContainer(fields, frames, skys));
  }
  mainPng.classList.add("gallery");
  document.querySelector(".title").textContent = "";
});

const skysNames = [
  "beyond-the-horizon-grey-road-and-trees-at-distance",
  "Sunny-Grass-Field",
  "green-and-brown-mountain",
  "transparent-paddy-field",
  "fall-gray-road-near-mountain",
  "field-hay-grass-straw-grassland",
  "sheep",
  "mount-scenery-mountains-mountains",
  "hill-sheep",
  "bread-mountain",
  "wheat-field",
  "scenery-mountain",
  "cloudy-sky-during-daytime",
  "desktop-bliss-grassland-advertising-tam-tam-grass-lawn",
  "grassland-praire-vegetation-meadow-steppe-landscape-miscellaneous-landscape",
  "grassy-hills-green-grass-field",
  "philippines-bread-mountain-beautiful",
  "mountain-idea-meadow-and-mountains",
  "green-grass-background-lawn-wheatgrass-artificial-truf-plant-grass-family",
  "natural-environment-hill-natural",
];

const fieldsNames = [
  "beyond-the-horizon-grey-road-and-trees-at-distance",
  "Sunny-Grass-Field",
  "green-and-brown-mountain",
  "transparent-paddy-field",
];

const framesNames = [
  "beyond-the-horizon-grey-road-and-trees-at-distance",
  "Sunny-Grass-Field",
  "green-and-brown-mountain",
  "transparent-paddy-field",
];

// var pngNames = skysNames[0] + fieldsNames[0] + framesNames[0];
// console.log(pngNames);
var pngTitles =
  skysNames[Math.floor(Math.random() * skysNames.length)] +
  fieldsNames[Math.floor(Math.random() * fieldsNames.length)] +
  framesNames[Math.floor(Math.random() * framesNames.length)] +
  ".png";
console.log(pngTitles);

document.querySelector(".title").textContent = pngTitles;

function setCaption(imgFrame) {
  setTimeout(function () {
    const caption = document.querySelector(".title");
    const imgbounds = imgFrame.getBoundingClientRect();
    const captionPosition = {
      top: imgbounds.bottom,
      left: imgbounds.right,
    };
    caption.style.top = `${captionPosition.top}px`;
    caption.style.left = `${captionPosition.left}px`;
    caption.style.opacity = 1;
  }, 1500);
}


let aboutBtn = document.querySelector('.about')
let intro = document.querySelector('.intro')
let titleAll = document.querySelectorAll('.title')
let introOff = true


let vw = window.innerWidth
if (vw > 600) {
  aboutBtn.addEventListener('mouseover', () => {
    showIntro()
  })
  aboutBtn.addEventListener('mouseout', () => {
    hideIntro()
  })
} else {
  aboutBtn.addEventListener('click', () => {
    if (introOff) {
      showIntro()
    } else {
      hideIntro()
    }
  })
}  

function showIntro() {
  aboutBtn.style.textDecoration = "underline"
  intro.style.display = "block"
  for (let title of titleAll) {
    title.style.display = "none"
  }
  introOff = false
}
function hideIntro() {
  aboutBtn.style.textDecoration = "none"
  intro.style.display = "none"
  for (let title of titleAll) {
    title.style.display = "grid"
  }
  introOff = true
}

