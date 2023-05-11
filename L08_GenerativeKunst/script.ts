namespace L08_GenerativeKunst {
    /*interface Vector {
        x: number;
        y: number;
    }*/

    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    function handleload(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d");
        console.log("TestLoad");
        document.querySelector("canvas")?.setAttribute("style", "background-color:" + randomColor());
    }

    function getRandInt(_max: number, _min: number = 0): number {
        return Math.floor(Math.random() * _max) + _min;
    }

    function randomColor(): string {
        let colorlist: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        let color: string = "#";
        for (let i: number = 0; i < 6; i++) {
            let temp: number = getRandInt(colorlist.length, 0);
            color = color + colorlist[temp];
        }
        return color;
    }
}
