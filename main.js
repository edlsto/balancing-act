const btn = document.getElementById('closebtn');
btn.addEventListener('click', event => {
  btn.parentElement.classList.add('transition');
});
