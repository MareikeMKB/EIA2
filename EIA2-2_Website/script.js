"use strict";
var Website;
(function (Website) {
    console.log('Hallo');
    let answers = ['#a1', '#a2', '#a3', '#a4'];
    let codes = ['Code1', 'Code2', 'Code3', 'Code4'];
    document.getElementById("stuff").style.setProperty("visibility", "hidden");
    for (let i = 0; i < 4; i++) {
        document.querySelector(answers[i])?.addEventListener("click", function () {
            document.getElementById("p").innerHTML = codes[i];
            document.getElementById("stuff").style.setProperty("visibility", "visible");
        });
    }
})(Website || (Website = {}));
//# sourceMappingURL=script.js.map