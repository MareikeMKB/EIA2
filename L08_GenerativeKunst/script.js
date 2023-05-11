"use strict";
var L08_GenerativeKunst;
(function (L08_GenerativeKunst) {
    /*interface Vector {
        x: number;
        y: number;
    }*/
    window.addEventListener("load", handleload);
    let crc2;
    let canvas;
    function handleload() {
        canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        console.log("TestLoad");
        document.querySelector("canvas")?.setAttribute("style", "background-color:" + randomColor());
    }
    function getRandInt(_max, _min = 0) {
        return Math.floor(Math.random() * _max) + _min;
    }
    function randomColor() {
        let colorlist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        let color = "#";
        for (let i = 0; i < 6; i++) {
            let temp = getRandInt(colorlist.length, 0);
            color = color + colorlist[temp];
        }
        return color;
    }
})(L08_GenerativeKunst || (L08_GenerativeKunst = {}));
//# sourceMappingURL=script.js.map