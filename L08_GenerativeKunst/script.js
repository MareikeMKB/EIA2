"use strict";
var L08_GenerativeKunst;
(function (L08_GenerativeKunst) {
    /*
    Aufgabe: <Aufgabe 8.1 GenerativeKunst>
    Name: <Mareike Bitz>
    Matrikel: <272506>
    Datum: <11.05.23>
    Quellen: <Madeleine Hansen>
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
        document.querySelector("canvas")?.setAttribute("style", "background-color:" + randomColor());
        document.body.style.background = randomColor();
        let t = Math.floor(Math.random() * 5);
        console.log("Triangles:" + (t + 1));
        for (let i = 0; i < t + 1; i++) {
            drawTriangle({ x: 500, y: 200 }, { x: 1000, y: -500 });
        }
        t = Math.floor(Math.random() * 5);
        for (let i = 0; i < t + 1; i++) {
            let coin = Math.floor(Math.random() * 2);
            if (coin == 0) {
                drawEllipse({ x: 500, y: 300 }, { x: 500, y: -200 });
                console.log("Ellipse");
            }
            else {
                drawCircle({ x: 500, y: 300 }, { x: 500, y: -200 });
                console.log("Circle");
            }
        }
        let coin = Math.floor(Math.random() * 2);
        if (coin == 0) {
            drawBezier({ x: 500, y: 200 }, { x: 1000, y: -500 });
            console.log("Bezier");
        }
        else {
            console.log("No Bezier");
        }
        t = Math.floor(Math.random() * 10);
        for (let i = 0; i < t + 1; i++) {
            drawLine({ x: 500, y: 125 }, { x: 1000, y: -500 });
        }
        arc({ x: 200, y: 100 }, { x: 800, y: -500 });
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
    function drawTriangle(_position, _size) {
        crc2.beginPath();
        let triangleX0 = getRandInt(crc2.canvas.width);
        let triangleY0 = getRandInt(crc2.canvas.height);
        let triangleX1 = getRandInt(crc2.canvas.width);
        let triangleY1 = getRandInt(crc2.canvas.height);
        crc2.moveTo(getRandInt(triangleX0), getRandInt(triangleY0));
        crc2.lineTo(getRandInt(crc2.canvas.width), getRandInt(crc2.canvas.height));
        crc2.lineTo(triangleX1, triangleY1);
        crc2.closePath();
        crc2.fillStyle = randomColor();
        crc2.fill();
    }
    function drawEllipse(_position, _size) {
        crc2.beginPath();
        let circx1 = getRandInt(crc2.canvas.width);
        let circy1 = getRandInt(crc2.canvas.height);
        let circxr1 = getRandInt(200, 100);
        let circyr1 = getRandInt(300, 100);
        crc2.ellipse(circx1, circy1, circxr1, circyr1, Math.PI / 4, 0, Math.PI * 2);
        crc2.fillStyle = randomColor();
        crc2.fill();
    }
    function drawCircle(_position, _size) {
        crc2.beginPath();
        let circx1 = getRandInt(crc2.canvas.width);
        let circy1 = getRandInt(crc2.canvas.height);
        let circxr1 = getRandInt(200, 100);
        let circyr1 = circxr1;
        crc2.ellipse(circx1, circy1, circxr1, circyr1, Math.PI / 4, 0, Math.PI * 2);
        crc2.fillStyle = randomColor();
        crc2.fill();
    }
    function drawBezier(_position, _size) {
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width, crc2.canvas.height);
        crc2.bezierCurveTo(getRandInt(crc2.canvas.width), getRandInt(crc2.canvas.height), getRandInt(crc2.canvas.width), getRandInt(crc2.canvas.height), getRandInt(crc2.canvas.width), getRandInt(crc2.canvas.height));
        crc2.fillStyle = randomColor();
        crc2.lineWidth = getRandInt(10, 1);
        crc2.fill();
        crc2.closePath();
    }
    function drawLine(_position, _size) {
        crc2.beginPath();
        crc2.moveTo(getRandInt(crc2.canvas.width), getRandInt(crc2.canvas.height));
        crc2.lineTo(getRandInt(crc2.canvas.width), getRandInt(crc2.canvas.height));
        crc2.rotate(getRandInt(500, 400));
        crc2.strokeStyle = randomColor();
        crc2.lineWidth = getRandInt(10, 1);
        crc2.stroke();
        crc2.closePath();
    }
    function arc(_position, _size) {
        crc2.beginPath();
        crc2.arc(getRandInt(500), getRandInt(500), getRandInt(100), getRandInt(10), 3 * Math.PI);
        crc2.lineWidth = getRandInt(10, 1);
        crc2.closePath();
        crc2.stroke();
    }
})(L08_GenerativeKunst || (L08_GenerativeKunst = {}));
//# sourceMappingURL=script.js.map