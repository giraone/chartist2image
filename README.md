# How to export a chartist.js chart to a bitmap

Basically [chartist.js](https://gionkunz.github.io/chartist-js) is build on SVG and there are
multiple ways to convert SVG to a bitmap. But there are some stone blocks!

## SVG to bitmap

Let me start, with how to convert a SVG to a bitmap within a modern browser. The most cited solutions, I found are

- [canvg](https://github.com/canvg/canvg)
- [SVG2Bitmap](https://github.com/Kaiido/SVG2Bitmap)

One can see here, that both solution are working with "normal" SVG files:

- [svg2image-with-canvg.html](https://www.giraone.com/public/chartist2image/svg2image-with-canvg.html)
- [svg2image-with-svg2bitmap.html](https://www.giraone.com/public/chartist2image/svg2image-with-svg2bitmap.html)

## Chartist.js to bitmap

The problems, why the above solutions do not work "out-of-the-box" with chartist.js are

1. chartist.js uses external stylesheet declarations in its SVG code, e.g. `<g class="ct-series ct-series-a">`

2. chartist.js uses `<foreignObject>` elements in its SVG code for labels, e.g. `<foreignObject><span class="ct-label">A label</span></foreignObject>`

How to solve this:

1. External styles have to be converted to inline markup. The author of [SVG2Bitmap](https://github.com/Kaiido/SVG2Bitmap) has done this
for us in [parseStyles](https://github.com/Kaiido/SVG2Bitmap/blob/master/SVG2Bitmap.js#L261). So therefore we use *SVGBitmap* instead of *canvg*.

2. I saw, that the conversion using *SVGBitmap* worked in IE11, because the library has a fallback to use plain SVG with 
`<text class="ct-label">A label</text>`. So we have to force chartist.js not to use `<foreignObject>`. This can be done
using a plugin:

````javascript
function SuppressForeignObjectPlugin(chart) {
  chart.supportsForeignObject = false;
}

...

  var options = {

    ...
    plugins: [
      SuppressForeignObjectPlugin
    ]
  };

  new Chartist.Line('.ct-chart', data, options);
```

So now there is a working solution. One can look at the step-by-step process using this [test page](https://www.giraone.com/public/chartist2image/chartist2image-step-by-step.html)

I have tested it only so far with the charts I am using. It may happen, that one has to tweak the CSS styles a little, because the *parseStyles* function of *SVGBitmap* needs some explicit styles. For my line chart, I had to add explicitly the following styles:

````css
.ct-series { fill: none; }
.ct-label { font-family: Arial, Helvetica, sans-serif; }
````

Especially the first one is absolutely necessary, because otherwise the SVG lines are closed and filled.

And here is an example with a [line chart](https://www.giraone.com/public/chartist2image/chartist2image-with-svg2bitmap.html), I have used for testing. It consists of
- the <svg> element chartist.js is using
- a <canvas> element, to which *SVGBitmap* writes
- an <img> element, that receives the `toDataURL()` content.


