const button = document.getElementById('js-button');

button.addEventListener('click', () => {

  TweenMax.to('#js-button', {
    backgroundColor: '#6991C7',
    opacity: .8,
    // yoyo: true,
    // repeat: true,
    duration: 2
  });

  const containers = document.getElementsByClassName('c-container');

  for (let i = 0; i < containers.length; i++) {
    containers[i].classList.toggle('width-changer');
  }

})