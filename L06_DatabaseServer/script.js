"use strict";
var L06_DatabaseServer;
(function (L06_DatabaseServer) {
    console.log("Hallo");
    /*
      Aufgabe: <Aufgabe 6 DatabaseSErver>
      Name: <Mareike Bitz>
      Matrikel: <272506>
      Datum: <04.05.23>
      Quellen: <Madeleine Hansen>
      */
    let taskArray1 = [];
    let form = document.querySelector("#form");
    let formData1 = new FormData(form);
    let json = {};
    for (let key of formData1.keys())
        if (!json[key]) {
            let values = formData1.getAll(key);
            json[key] = values.length > 1 ? values : values[0];
        }
    function getData() {
        let taskArray;
        let formData = new FormData(form);
        console.log(formData);
        let p0 = formData.get("taskname");
        let p1 = formData.get("date");
        let p2 = formData.get("comment");
        let p3 = formData.get("Person");
        let p4 = formData.get("box");
        taskArray = [p0, p1, p2, p3, p4];
        console.log("getData: " + taskArray);
        taskArray1 = taskArray;
        return taskArray1;
    }
    let newdiv = document.createElement("div");
    newdiv.setAttribute("id", "newtask");
    let newP = document.createElement("p");
    newdiv.setAttribute("id", "newp");
    let Delete = document.createElement("button");
    Delete.setAttribute("id", "trash");
    Delete.innerHTML = "Delete";
    let edit = document.createElement("button");
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let wrap = document.querySelector("#wrapper");
    function handleLoad(_event) {
        let submit = document.querySelector("#add2");
        submit.addEventListener("click", sendTask);
        setValue("https://webuser.hs-furtwangen.de/~bitzmare/Database/");
    }
    window.addEventListener("load", handleLoad);
    async function setValue(_url) {
        let response = await fetch(_url);
        let offer = await response.text();
        let dataTemp = JSON.parse(offer);
        console.log("this" + dataTemp);
        console.log("Response", response);
        console.log("before" + offer);
        document.querySelector("#div1").innerHTML = "Task: " + offer;
    }
    async function sendTask(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        query.set("command", "insert");
        query.set("collection", "ToDoOne");
        query.set("insert", "newtask");
        await fetch("https://webuser.hs-furtwangen.de/~bitzmare/Database/?" + query.toString());
        alert("Task Submited!");
    }
    document.querySelector("#add").addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");
    });
    document.querySelector("#add2").addEventListener("click", function (f) {
        wrap.style.setProperty("visibility", "hidden");
        getData();
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = "Task: " + taskArray1[0] + " | to finish until the " + taskArray1[1] + " | Worked on by " + taskArray1[3] + "  || Comment: " + taskArray1[2] + "     ";
        f.preventDefault();
        newP.appendChild(Delete);
        newP.appendChild(edit);
    });
    edit.addEventListener("click", async function () {
        wrap.style.setProperty("visibility", "visible");
        deleteToDo();
        let query = new URLSearchParams(formData1);
        query.set("update", "collection");
        query.set("collection", "ToDoOne");
        query.set("update", "id");
        query.set("id", "?");
        query.set("data", JSON.stringify(json));
        alert("Youre editing the task.");
    });
    Delete.addEventListener("click", deleteToDo);
    async function deleteToDo() {
        newdiv.parentNode.removeChild(newP);
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        query.set("command", "delete");
        query.set("collection", "ToDoOne");
        query.set("delete", "id");
        query.set("id", "?");
        await fetch("https://webuser.hs-furtwangen.de/~bitzmare/Database/?" + query.toString());
    }
    ;
})(L06_DatabaseServer || (L06_DatabaseServer = {}));
//# sourceMappingURL=script.js.map