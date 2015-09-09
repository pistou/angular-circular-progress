# Angular Circular Progress

AngularJS module that creates circular progress bars

## Usage

### Download

Simply include `dist/circularProgress.min.js` (or `circularProgress.min.js`) in your page

You also can use [Bower](http://www.bower.io) by running `bower install angular-circular-progress`

### Usage

Add `angular-circular-progress` to your app's module dependencies:

```javascript
angular.module('myModule', ['angular-circular-progress'])
```
### Example:

```html
<circular-progress
    value="50"
    max="100"
    orientation="1"
    radius="80"
    stroke="20"
    base-color="#ffff00"
    progress-color="#00ff00"
    iterations="100"
    animation="easeInOutCubic"
></circular-progress>
```

*See [demo file](https://github.com/TouPye/angular-circular-progress/blob/master/demo/index.html) for more informations*

## Options

| Name            | Description                                                                                               | Required  | Default value     | Possible values   |
| ---             | ---                                                                                                       | ---       | ---               | ---               |
| `value`         | The current progress. Limited by the `max` option.                                                        | Yes       | 0                 | Integer           |
| `max`           | The progress' maximum value.                                                                              | Yes       | 100               | Integer           |
| `orientation`   | Whether the progressbar should rotate clockwise or counter-clockwise.                                     | No        | 1                 | Boolean           |
| `radius`        | Radius of the circle.                                                                                     | No        | 80                | Integer           |
| `stroke`        | Specifies the circle's thickness.                                                                         | No        | 20                | Integer           |
| `base-color`    | Color of the circle's background.                                                                         | No        | #a2a2a2           | Hex color         |
| `progress-color`| The color of the `current` value on the circle.                                                           | No        | #ca2014           | Hex color         |
| `iterations`    | Number of iterations for the animation. Set it to 1 for no animation and increase for slower animation.   | No        | 100               | Integer           |
| `animation`     | The easing function that will be used when animating.                                                     | No        | easeInOutCubic    | linearEase <br> easeInQuad <br> easeOutQuad <br> easeInOutQuad <br> easeInCubic <br> easeOutCubic <br> easeInOutCubic <br> easeInQuart <br> easeOutQuart <br> easeInOutQuart <br> easeInQuint <br> easeOutQuint <br> easeInOutQuint <br> easeInSine <br> easeOutSine <br> easeInOutSine <br> easeInExpo <br> easeOutExpo <br> easeInOutExpo <br> easeInCirc <br> easeOutCirc <br> easeInOutCirc <br> easeInElastic <br> easeOutElastic <br> easeInOutElastic <br> easeInBack <br> easeOutBack <br> easeInOutBack <br> easeInBounce <br> easeOutBounce <br> easeInOutBounce <br> |


## Development

*  `npm install` to install development dependencies
*  `grunt` to build minified demo in dist/
