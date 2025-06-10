
const item = document.querySelectorAll('.accordian--item');
const icon = document.querySelectorAll('.icon');
const content = document.querySelectorAll('.accordian--content');
const up = document.querySelectorAll('.up');
const down = document.querySelectorAll('.down');


item.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (content[index].style.display === 'block') {
            content[index].style.display = 'none';
            up[index].style.display = 'none';
            down[index].style.display = 'block';
        } else {
            content.forEach((c, i) => {
                c.style.display = 'none';
                up[i].style.display = 'none';
                down[i].style.display = 'block';
            });
            content[index].style.display = 'block';
            up[index].style.display = 'block';
            down[index].style.display = 'none';
        }
    });
});




