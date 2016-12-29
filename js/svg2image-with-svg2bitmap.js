window.onload = function() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'tiger.svg');
  xhr.onreadystatechange = function() {

    document.getElementById('svg').innerHTML = xhr.responseText;
  };
  xhr.send();

  document.getElementById('button1').onclick = function () {

    SVG2Bitmap(document.getElementById('svg'), document.getElementById('canvas'));

  };

  document.getElementById('button2').onclick = function () {

    var dataURL = document.getElementById('canvas').toDataURL();
    document.getElementById('image').src = dataURL;
  };
}