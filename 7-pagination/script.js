const pages = document.querySelectorAll('.pages');
const pageNumbers = document.querySelectorAll('.page');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

prev.addEventListener('click', () => {
    pages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + pages.length) % pages.length;
    pages[currentIndex].classList.add('active');
});

next.addEventListener('click', () => {
    pages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % pages.length;
    pages[currentIndex].classList.add('active');
});

pageNumbers.forEach((page, index) => {
    page.addEventListener('click', () => {
        pages[currentIndex].classList.remove('active');
        currentIndex = index;
        pages[currentIndex].classList.add('active');
    });
});

