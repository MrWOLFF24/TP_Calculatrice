// Hammer-js-app
const hammerApp = (function () {
    "use strict";

    let mc;

    const swipeLeft = function () {
        mc.on('swipeleft', function(ev) {
            console.log(ev);
        });
    };

    const swipeRight = function () {
        mc.on('swiperight', function(ev) {
            console.log(ev);
        });
    };

    const init = function () {
        mc = new Hammer(document.querySelector(".pad"));
        swipeLeft();
        swipeRight();
    };

    window.addEventListener("DOMContentLoaded", init);

}());