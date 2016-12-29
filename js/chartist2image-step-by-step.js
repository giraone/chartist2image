var defs = "\r\n" +
"  <defs>\r\n" +
"  <style xmlns=\"http://www.w3.org/1999/xhtml\">\r\n" +
"  .ct-label { fill: rgba(0, 0, 0, 0.4); color: rgba(0, 0, 0, 0.4); font-size: 0.75rem; line-height: 1; }\r\n" +
"  .ct-grid-background, .ct-line { fill: none; }\r\n" +
"  .ct-chart-bar .ct-label, .ct-chart-line .ct-label { display: flex; }\r\n" +
"  .ct-label.ct-vertical.ct-start { align-items: flex-end; justify-content: flex-end; text-align: right; text-anchor: end; }\r\n" +
"  .ct-grid { stroke: rgba(0, 0, 0, 0.2); stroke-width: 1px; stroke-dasharray: 2px; }\r\n" +
"  .ct-line { stroke-width: 4px; }\r\n" +
"  .ct-series { fill: none; }\r\n" +
"  .ct-series-a .ct-bar, .ct-series-a .ct-line, .ct-series-a .ct-point, .ct-series-a .ct-slice-donut { stroke: rgb(215, 2, 6); }\r\n" +
"  .ct-series-b .ct-bar, .ct-series-b .ct-line, .ct-series-b .ct-point, .ct-series-b .ct-slice-donut { stroke: rgb(240, 91, 79); }\r\n" +
"  .ct-series-c .ct-bar, .ct-series-c .ct-line, .ct-series-c .ct-point, .ct-series-c .ct-slice-donut { stroke: rgb(244, 198, 61); }\r\n" +
"  </style>\r\n" +
"  </defs>\r\n";

// This is a quick and dirty hack to show, that inline styles work
function addInlineStyles(code) {
  return code
    .replace("<svg ", "<svg xmlns=\"http://www.w3.org/2000/svg\" ")
    .replace("><", ">" + defs + "<");
}

window.onload = function() {

  createChart('#chart1', false);
  createChart('#chart2', true);
  createChart('#chart3', true);

  document.getElementById('button1').onclick = function () {

    var chartDivNode = document.getElementById('chart1');

    var svgCode = chartDivNode.innerHTML;
    document.getElementById('code1').innerText = svgCode;

    var svgURL = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgCode);
    var image = document.getElementById('image1');
    image.src = svgURL;
  };

  document.getElementById('button2').onclick = function () {

    var chartDivNode = document.getElementById('chart2');

    var svgCode = chartDivNode.innerHTML;
    document.getElementById('code2').innerText = svgCode;

    var svgURL = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgCode);
    var image = document.getElementById('image2');
    image.src = svgURL;
  };

  document.getElementById('button3').onclick = function () {

    var chartDivNode = document.getElementById('chart3');

    var svgCode = chartDivNode.innerHTML;

    svgCode = addInlineStyles(svgCode);

    document.getElementById('code3').innerText = svgCode;

    var svgURL = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgCode);
    var image = document.getElementById('image3');
    image.src = svgURL;
  };

}
