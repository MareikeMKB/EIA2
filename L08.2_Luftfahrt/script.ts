namespace L08_Luftfahrt {
    /*
    Aufgabe: <Aufgabe 8.2 Luftfahrt>
    Name: <Mareike Bitz>
    Matrikel: <272506>
    Datum: <13.05.23>
    Quellen: <>
    */

    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    function handleload(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d");
        console.log("TestLoad");
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

    function drawMountains() {
        crc2.beginPath();
        //crc2.moveTo();
        crc2.closePath();
        crc2.fillStyle = "#A1A1A1";
        crc2.fill();
    }
}
