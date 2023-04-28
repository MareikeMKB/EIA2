"use strict";
var Datensammlung;
(function (Datensammlung) {
    console.log('Hallo');
    /*
      Aufgabe: <Aufgabe 4 ToDo>
      Name: <Mareike Bitz>
      Matrikel: <272506>
      Datum: <28.04.23>
      Quellen: <Judith Pauler>
      */
    let taskArray1 = [];
    function getData() {
        let form = document.querySelector('#form1');
        let taskArray;
        let formData = new FormData(form);
        console.log(formData);
        let p0 = formData.get('taskname');
        let p1 = formData.get('date');
        let p2 = formData.get('comment');
        let p3 = formData.get('Person');
        let p4 = formData.get('box');
        taskArray = [p0, p1, p2, p3, p4];
        console.log("getData: " + taskArray);
        taskArray1 = taskArray;
        return taskArray1;
    }
    ;
    let wrap = document.querySelector("#wrapper");
    document.querySelector("#add").addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");
    });
    document.querySelector("#add2").addEventListener("click", function (f) {
        wrap.style.setProperty("visibility", "hidden");
        getData();
        let newdiv = document.createElement("div");
        newdiv.setAttribute("id", "newtask");
        let newP = document.createElement("p");
        newdiv.setAttribute("id", "newp");
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = "Task: " + taskArray1[0] + " | to finish until the " + taskArray1[1] + " | Worked on by " + taskArray1[3] + "  || Comment: " + taskArray1[2] + "     ";
        f.preventDefault();
        let Delete = document.createElement("button");
        Delete.setAttribute("id", "trash");
        newP.appendChild(Delete);
        Delete.innerHTML = "Delete";
        Delete.addEventListener("click", function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
        let edit = document.createElement("button");
        edit.setAttribute("id", "edit");
        newP.appendChild(edit);
        edit.innerHTML = "Edit";
        edit.addEventListener("click", function () {
            wrap.style.setProperty("visibility", "visible");
        });
    });
})(Datensammlung || (Datensammlung = {}));
//# sourceMappingURL=script.js.map