window.onload = function() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'tiger.svg');
  xhr.onreadystatechange = function() {

    document.getElementById('svg').innerHTML = xhr.responseText;
  };
  xhr.send();

  document.getElementById('button1').onclick = function () {

    // Solution 1
    canvg('canvas', document.getElementById('svg').innerHTML);
    //canvg('canvas', document.getElementById('svg').innerHTML, { scaleWidth: 300, scaleHeight: 300 });

    // Solution 2
    // var canvas = document.getElementById('canvas');
    // canvas.getContext('2d').drawSvg(document.getElementById('svg').innerHTML, 0, 0, 900, 900);
  };

  document.getElementById('button2').onclick = function () {

    var dataURL = document.getElementById('canvas').toDataURL();
    document.getElementById('image').src = dataURL;
  };
}