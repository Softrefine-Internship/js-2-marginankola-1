const popupbox = document.querySelector('.deactivate--account');
const open = document.getElementById('openModal');
const close = document.querySelector('.close');
const cancel = document.querySelector('.cancel');
const deactivate = document.querySelector('.deactivate'); 
const body = document.querySelector('body');

open.addEventListener('click', () => {
  popupbox.style.display = 'block';
  body.style.backgroundColor = '#ababab';
  
});

function closePopup() {
    popupbox.style.display = 'none';
    body.style.backgroundColor = 'white';
    }

close.addEventListener('click', closePopup);
cancel.addEventListener('click', closePopup);
deactivate.addEventListener('click', closePopup);

document.addEventListener('click', function (e) {
  if (popupbox.style.display === 'block' && !popupbox.contains(e.target) && !open.contains(e.target)) {
    closePopup();
  }
});
