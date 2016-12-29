window.onload = function() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'tiger.svg');
  xhr.onreadystatechange = function() {

    document.getElementById('svg').innerHTML = xhr.responseText;
  };
  xhr.send();

  document.getElementById('button1').onclick = function () {

    var svgCode = document.getElementById('svg').innerHTML;
    var svgURL = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgCode);

    var image = document.getElementById('image');
    image.src = svgURL;

  };
}