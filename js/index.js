// Testing git branch
var button = document.getElementById('my-button');

function myFunction() {
  var title = document.getElementById('page-title');

  title.classList.toggle("turn-green");

  console.dir(title);
  console.log(title);
}

button.addEventListener('click', myFunction);
