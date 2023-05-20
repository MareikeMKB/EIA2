namespace L08_Luftfahrt {
    /*
    Aufgabe: <Aufgabe 8.2 Luftfahrt>
    Name: <Mareike Bitz>
    Matrikel: <272506>
    Datum: <13.05.23>
    Quellen: <Madeleine Hansen>
    */


    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let gold: number = 0.62;

    interface Vector {
        x: number;
        y: number;
    }

    function handleload(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d");
        console.log("TestLoad");
        let horizon: number = crc2.canvas.height * gold;
        drawBackground();
        drawMountains({ x: horizon, y: 70 });
        drawSun({ x: 95, y: 70 });
        drawCloud({ x: 500, y: 175 }, { x: 250, y: 75 });
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(198, 78%, 42%, 1)");
        gradient.addColorStop(gold, "lightgreen");
        gradient.addColorStop(1, "HSL(100,80%,30%)");
        console.log(gradient)
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log(canvas)
    }

    function getRandInt(_max: number, _min: number = 0): number {
        return Math.floor(Math.random() * _max) + _min;
    }

    function randomColor(): string {
        //For the people coats
        let colorlist: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        let color: string = "#";
        for (let i: number = 0; i < 6; i++) {
            let temp: number = getRandInt(colorlist.length, 0);
            color = color + colorlist[temp];
        }
        return color;
    }

    function drawMountains(_position: Vector): void {

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
        console.log("Mountainsarethere")
    }

    function drawSun(_position: Vector): void {
        let r1: number = 20;
        let r2: number = 145;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
    
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)")
    
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);


        let nParticles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
}

