(function(){

  'use strict';

  var sheet = cssstylesheet.create(),
      box = document.getElementById('js-box'),
      button = document.getElementById('js-button');

  sheet.addRule('.box-1, .box-2', [
    'background-color: #99f',
    'border-radius: 5px',
    'margin-bottom: 5px',
    'width: 100px',
    'height: 100px'
  ].join(';'));

  sheet.addRule('.box-animate', 'animation: move 1s 2 ease alternate');
  sheet.addRule('.box-animate-end', 'animation-name: none');

  sheet.addRule('@keyframes move', [
    'from { transform: translateX(0px) }',
    'to { transform: translateX(50px) }'
  ].join(' '));

  box.addEventListener('animationend', function() {
    box.classList.add('box-animate-end');
  }, false);

  button.addEventListener('click', function() {
    box.classList.remove('box-animate-end');
    box.classList.add('box-animate');
  }, false);

}());
