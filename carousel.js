let currentIndex = 2; // Starting from the third slide (index 2)
const radios = document.querySelectorAll('input[type=radio]');

function moveToSlide(index) {
  radios[currentIndex].checked = false;
  radios[index].checked = true;
  currentIndex = index;
}

function autoSlide() {
  const nextIndex = (currentIndex + 1) % radios.length;
  moveToSlide(nextIndex);
}

// Set an interval to call autoSlide every 3 seconds (3000 milliseconds)
let interval = setInterval(autoSlide, 5000);

// Clear the interval when the user interacts with the slider
const slider = document.getElementById('slider');
slider.addEventListener('mouseenter', () => clearInterval(interval));
slider.addEventListener('mouseleave', () => {
  interval = setInterval(autoSlide, 5000);
});

// Add event listeners to the left and right arrow icons
const leftArrow = document.querySelector('.fa-arrow-circle-left');
const rightArrow = document.querySelector('.fa-arrow-circle-right');

leftArrow.addEventListener('click', () => {
  const previousIndex = (currentIndex - 1 + radios.length) % radios.length;
  moveToSlide(previousIndex);
});

rightArrow.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % radios.length;
  moveToSlide(nextIndex);
});
