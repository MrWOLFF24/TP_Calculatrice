// Hammer-js-app
const hammerApp = (function () {
    "use strict";

    let mc;

    const swipeLeft = function () {
        mc.on('swipeleft', function(ev) {
            const pad = document.querySelector(".pad");
            const hidden = document.getElementById("hidden");

            pad.style.marginLeft = "-62px";
            hidden.style.width = "60px";
        });
    };

    const swipeRight = function () {
        mc.on('swiperight', function(ev) {
            const pad = document.querySelector(".pad");
            const hidden = document.getElementById("hidden");

            pad.style.marginLeft = "0";
            hidden.style.width = "0";
        });
    };

    const init = function () {
        mc = new Hammer(document.querySelector(".pad"));
        swipeLeft();
        swipeRight();
    };

    window.addEventListener("DOMContentLoaded", init);

}());