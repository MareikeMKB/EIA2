"use strict";
var L08_Luftfahrt;
(function (L08_Luftfahrt) {
    /*
    Aufgabe: <Aufgabe 8.2 Luftfahrt>
    Name: <Mareike Bitz>
    Matrikel: <272506>
    Datum: <13.05.23>
    Quellen: <>
    */
    window.addEventListener("load", handleload);
    let crc2;
    let canvas;
    function handleload() {
        canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        console.log("TestLoad");
    }
    function getRandInt(_max, _min = 0) {
        return Math.floor(Math.random() * _max) + _min;
    }
    function randomColor() {
        //For the people coats
        let colorlist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        let color = "#";
        for (let i = 0; i < 6; i++) {
            let temp = getRandInt(colorlist.length, 0);
            color = color + colorlist[temp];
        }
        return color;
    }
    function drawMountains() {
        crc2.beginPath();
        //crc2.moveTo();
        crc2.closePath();
        crc2.fillStyle = "#A1A1A1";
        crc2.fill();
    }
})(L08_Luftfahrt || (L08_Luftfahrt = {}));
//# sourceMappingURL=script.js.map