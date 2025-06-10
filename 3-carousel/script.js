const right = document.querySelector('.right');
const left = document.querySelector('.left');
const items = document.querySelectorAll('.carousel--item');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');
const imgArray = [img1, img2, img3, img4, img5];
let currentIndex = 0;
const totalImages = imgArray.length;
const indicators = document.querySelectorAll('.carousel--indicator');

function updateCarousel() {
  imgArray.forEach((img, index) => {
    img.style.display = index === currentIndex ? 'block' : 'none';
  });

  indicators.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
      dot.style.backgroundColor = '#fff';
    } else {
      dot.classList.remove('active');
      dot.style.backgroundColor = 'rgba(255, 255, 255, 0.445)';
    }
  });
}

right.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});

left.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});



