/** Create a sample chartist chart */

function SuppressForeignObjectPlugin(chart) {
  chart.supportsForeignObject = false;
}

function createChart(chartSelector, suppressForeignObjects) {

  var plugins = suppressForeignObjects ? [ SuppressForeignObjectPlugin ] : [];

  // Our labels and three data series
  var data = {
    labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
    series: [
      [5, 4, 3, 7, 5, 10],
      [3, 2, 9, 5, 4, 6],
      [2, 1, -3, -4, -2, 0]
    ]
  };

// We are setting a few options for our chart and override the defaults
  var options = {

    // As options we currently only set a static size of 300x200 px.
    width: 300,
    height: 200,

    // Don't draw the line chart points
    showPoint: false,
    // Disable line smoothing
    lineSmooth: false,
    // X-Axis specific configuration
    axisX: {
      // We can disable the grid for this axis
      showGrid: false,
      // and also don't show the label
      showLabel: true
    },
    // Y-Axis specific configuration
    axisY: {
      // Lets offset the chart a bit from the labels
      offset: 60,
      // The label interpolation function enables you to modify the values
      // used for the labels on each axis. Here we are converting the
      // values into million pound.
      labelInterpolationFnc: function(value) {
        return '$' + value + 'm';
      }
    },
    plugins: plugins
  };

  new Chartist.Line(chartSelector, data, options);
}