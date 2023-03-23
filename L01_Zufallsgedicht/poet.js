"use strict";
var L01_Zufallsgedicht;
(function (L01_Zufallsgedicht) {
    let subjekte = ['Bellatrix', 'Andromeda', 'Narcissa', 'Sirius', 'Regulus', 'Kreacher'];
    let adjektive = ['foltert', 'liebt', 'bewundert', 'hasst', 'zerstört', 'freut sich auf'];
    let objekte = ['Ted Tonks', 'den Dunklen Lord', 'Lucius', 'Remus', 'das Amulett Slytherins', 'Snape'];
    for (let i = 6; i > 0; i--) {
        let x = Math.floor(Math.random() * subjekte.length);
        let y = Math.floor(Math.random() * subjekte.length);
        let z = Math.floor(Math.random() * subjekte.length);
        getVerse(subjekte.splice(x, 1)[0], adjektive.splice(y, 1)[0], objekte.splice(z, 1)[0]);
    }
    function getVerse(_string1, _string2, _string3) {
        let verse = _string1 + ' ' + _string2 + ' ' + _string3;
        console.log(verse);
    }
})(L01_Zufallsgedicht || (L01_Zufallsgedicht = {}));
//# sourceMappingURL=poet.js.map