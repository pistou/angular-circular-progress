(function() {
    'use strict';

    angular
        .module('angular-circular-progress')
        .directive('circularProgress', ['$window', 'circularProgressService', circularProgress]);


    function circularProgress ($window, circularProgressService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                value:          "=",
                max:            "=",
                orientation:    "@",
                radius:         "@",
                stroke:         "@",
                baseColor:      "@",
                progressColor:  "@",
                iterations:     "@",
                animation:      "@",
                label:          "@"
            },
            link: function(scope, element) {
                var options     = {
                        value:          0,
                        max:            100,
                        orientation:    1,
                        radius:         80,
                        stroke:         20,
                        baseColor:      "#a2a2a2",
                        progressColor:  "#ca2014",
                        iterations:     100,
                        animation:      "easeInOutCubic",
                        label:          ""
                    },
                    ring        = element.find('path'),
                    background  = element.find('circle'),
                    label       = element.find('text'),
                    size,
                    resetVal;

                var renderCircle = function() {
                    var radius = parseInt(options.radius),
                        stroke = parseInt(options.stroke);

                    size = (radius * 2) + (stroke * 2);

                    element.css({
                        "width":    size + "px",
                        "height":   size + "px",
                        "overflow": "hidden"
                    });

                    ring
                        .attr({
                            "transform": !options.rotation ? "" : "scale(-1, 1) translate(" + (-size) + " 0)"
                        })
                        .css({
                            "stroke":       options.progressColor,
                            "stroke-width": options.stroke
                        });

                    background
                        .attr({
                            "cx":   radius + stroke,
                            "cy":   radius + stroke,
                            "r":    radius
                        })
                        .css({
                            "stroke":       options.baseColor,
                            "stroke-width": options.stroke
                        });

                    label
                        .attr({
                            "x":            radius + stroke,
                            "y":            radius + stroke,
                            "text-anchor":  "middle",
                            "font-size":    radius / 3,
                            "fill":         options.progressColor,
                        })
                        .text(options.label);
                };

                var renderState = function(newVal, oldVal) {
                    if (!angular.isDefined(newVal)) {
                        return false;
                    }

                    if (newVal < 0) {
                        resetVal = oldVal;
                        return scope.value = 0;
                    }

                    if (newVal > scope.max) {
                        resetVal = oldVal;
                        return scope.value = options.max;
                    }

                    var start = oldVal === newVal ? 0 : (oldVal || 0),
                        val = newVal - start,
                        iteration   = 0,
                        easingAnimation = circularProgressService.animations[options.animation];


                    if (angular.isNumber(resetVal)) {
                        start       = resetVal;
                        val         = newVal - resetVal;
                        resetVal    = null;
                    }

                    (function animate() {
                        circularProgressService.updateState(
                            easingAnimation(iteration, start, val, parseInt(options.iterations)),
                            parseInt(options.max),
                            parseInt(options.radius),
                            ring,
                            size
                        );

                        if (iteration < parseInt(options.iterations)) {
                            $window.requestAnimationFrame(animate);
                            iteration++;
                        }
                    })();

                };

                scope.$watchCollection('[value, max, orientation, radius, stroke, baseColor, progressColor, iterations]', function(newVal, oldVal, scope) {
                    angular.forEach(scope, function(val, key) {
                        if (key.indexOf('$') && scope !== val && angular.isDefined(val)) {
                            options[key] = val;
                        }
                    });

                    renderCircle();
                    renderState(newVal[0], oldVal[0]);
                });
            },
            template: [
                '<svg class="angular-circular-progress" xmlns="http://www.w3.org/2000/svg">',
                    '<circle fill="none"/>',
                    '<path fill="none"/>',
                    '<text fill="none"/>',
                '</svg>',
            ].join('\n')
        };
    }
})();
