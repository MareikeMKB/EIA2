"use strict";
var L08_Luftfahrt;
(function (L08_Luftfahrt) {
    /*
    Aufgabe: <Aufgabe 8.2 Luftfahrt>
    Name: <Mareike Bitz>
    Matrikel: <272506>
    Datum: <13.05.23>
    Quellen: <Madeleine Hansen>
    */
    window.addEventListener("load", handleload);
    let crc2;
    let canvas;
    let gold = 0.62;
    function handleload() {
        canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        console.log("TestLoad");
        let horizon = crc2.canvas.height * gold;
        drawBackground();
        drawSun({ x: 95, y: 70 });
        drawMountains({ x: horizon, y: 70 });
        drawCloud({ x: 500, y: 175 }, { x: 250, y: 75 });
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(198, 78%, 42%, 1)");
        gradient.addColorStop(gold, "lightgreen");
        gradient.addColorStop(1, "HSL(100,80%,30%)");
        console.log(gradient);
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log(canvas);
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
    function drawMountains(_position) {
        crc2.beginPath();
        crc2.moveTo(-100, 335);
        crc2.lineTo(40, 30);
        crc2.lineTo(90, 130);
        crc2.lineTo(160, 50);
        crc2.lineTo(220, 130);
        crc2.lineTo(300, 30);
        crc2.lineTo(350, 130);
        crc2.lineTo(450, 50);
        crc2.lineTo(550, 110);
        crc2.lineTo(620, 40);
        crc2.lineTo(680, 110);
        crc2.lineTo(750, 30);
        crc2.lineTo(900, 330);
        crc2.closePath();
        crc2.strokeStyle = '#d9ddde';
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = '#d9ddde';
        crc2.fill();
        console.log("Mountainsarethere");
    }
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 145;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
})(L08_Luftfahrt || (L08_Luftfahrt = {}));
//# sourceMappingURL=script.js.map