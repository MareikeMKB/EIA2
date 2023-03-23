namespace L01_Zufallsgedicht {
    let subjekte = ['Bellatrix', 'Andromeda', 'Narcissa', 'Sirius', 'Regulus', 'Kreacher']
    let adjektive = ['foltert','liebt','bewundert','hasst','zerstört','freut sich auf']
    let objekte = ['Ted Tonks', 'den Dunklen Lord', 'Lucius', 'Remus', 'das Amulett Slytherins', 'Zaubersprüche']
    console.log(subjekte, adjektive, objekte);

    for (let i = 6; i > 0; i--) {
        console.log(i);
        getVerse(subjekte[0], adjektive[1], objekte[1]);
    }

    function getVerse (_string1:string, _string2:string, _string3:string) {
        let verse = _string1 + ' ' + _string2 + ' ' + _string3
        console.log(verse)
        console.log('Accio!')
    }


}