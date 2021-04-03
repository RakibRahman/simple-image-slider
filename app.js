const nextBTN = document.getElementById("next");
const prevBTN = document.getElementById("prev");

const images = [
  "https://picsum.photos/500/500?random=1",
  "https://picsum.photos/500/500?random=2",
  "https://picsum.photos/500/500?random=3",
  "https://picsum.photos/500/500?random=4",
];
let count = 0;
let time = 2000;
const setImages = () => {
  document.slide.src = images[count];
};
const slideImages = () => {
  setImages();
  setInterval(setImages, time);
};
window.addEventListener("DOMContentLoaded", slideImages); //will load images

nextBTN.addEventListener("click", () => {
  count < images.length - 1 ? count++ : (count = 0);
  setImages();
  console.log("next button clicked", count);
});

prevBTN.addEventListener("click", () => {
  count--;
  setImages();
  console.log("prev button clicked", count);
});
