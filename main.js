var btn = document.getElementById('closebtn');
btn.addEventListener('click', addClass);

function addClass () {
  btn.parentElement.classList.add('transition');
}
