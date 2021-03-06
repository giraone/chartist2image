window.onload = function() {

  // using true as the second parameter we force chartist.js to use plain SVG not <foreignObject>
  createChart('.ct-chart', true);

  document.getElementById('button1').onclick = function () {

    var chartDivNode = document.getElementById('chart');
    var chartSvgNode = chartDivNode.children[0];

    // SVG2Bitmap will render the chartist SVG code and create all necessary inline styles
    SVG2Bitmap(chartSvgNode, document.getElementById('canvas'));
  };

  document.getElementById('button2').onclick = function () {

    var dataURL = document.getElementById('canvas').toDataURL();
    document.getElementById('image').src = dataURL;
  };
}
