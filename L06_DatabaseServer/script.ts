namespace L06_DatabaseServer {
  console.log("Hallo");
  /*
    Aufgabe: <Aufgabe 6 DatabaseSErver>
    Name: <Mareike Bitz>
    Matrikel: <272506>
    Datum: <04.05.23>
    Quellen: <Madeleine Hansen>
    */

  let taskArray1: String[] = [];

  let form: HTMLFormElement = document.querySelector("#form")!; 

  export interface Datainput  {
    [key: string]: Tasks[];
    }

  export interface Tasks {
    taskname: string; 
    date: string; 
    comment: string; 
    person: string; 
    box: string; 
  }

  interface FormDataJSON {
    [key: string]: FormDataEntryValue | FormDataEntryValue[];}
  
  let formData1: FormData = new FormData(form);
  let json: FormDataJSON = {};
  
  for (let key of formData1.keys())
    if (!json[key]) {
      let values: FormDataEntryValue[] = formData1.getAll(key);
      json[key] = values.length > 1 ? values : values[0];
    }

  function getData(): String[] {
    let taskArray: String[];
    let formData = new FormData(form);
    console.log(formData);
    let p0 = formData.get("taskname") as string;
    let p1 = formData.get("date") as string;
    let p2 = formData.get("comment") as string;
    let p3 = formData.get("Person") as string;
    let p4 = formData.get("box") as string; 
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
  let wrap = <HTMLElement>document.querySelector("#wrapper");

  function handleLoad(_event: Event) {
  let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add2"); 
  submit.addEventListener("click", sendTask);
  setValue("https://webuser.hs-furtwangen.de/~bitzmare/Database/");
  }

  window.addEventListener("load", handleLoad);

  async function setValue(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    let offer: string = await response.text();
    let dataTemp: Datainput = JSON.parse(offer);
    console.log("this" + dataTemp);
    console.log("Response", response);
    console.log("before" + offer);
    document.querySelector("#div1")!.innerHTML = "Task: " + offer; 
  }

  async function sendTask(_event: Event): Promise<void> { 
    let formData: FormData = new FormData(form);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    query.set("command", "insert");
    query.set("collection", "ToDoOne");
    query.set("insert", "newtask" );
    await fetch("https://webuser.hs-furtwangen.de/~bitzmare/Database/?" + query.toString());
    alert("Task Submited!");
  }

  document.querySelector("#add")!.addEventListener("click", function () {
    wrap.style.setProperty("visibility", "visible");
  });

  document.querySelector("#add2")!.addEventListener("click", function (f) {
    wrap.style.setProperty("visibility", "hidden"); 
    getData();
    document.getElementById("div1")!.appendChild(newdiv);
    document.querySelector("#div1")!.appendChild(newP);
    newP.innerHTML = "Task: " + taskArray1[0] + " | to finish until the "+ taskArray1[1]+  " | Worked on by "+ taskArray1[3] + "  || Comment: "+ taskArray1[2] + "     ";
    f.preventDefault(); 
    newP.appendChild(Delete); 
    newP.appendChild(edit); 
  });

  edit.addEventListener("click", async function () {
    wrap.style.setProperty("visibility", "visible");
    deleteToDo();
    let query: URLSearchParams = new URLSearchParams(<any>formData1);
    query.set("update", "collection");
    query.set("collection", "ToDoOne");
    query.set("update", "id");
    query.set("id", "?");
    query.set("data", JSON.stringify(json));
    alert("Youre editing the task.");
  });

  Delete.addEventListener("click", deleteToDo) 

  async function deleteToDo() {
    newdiv!.parentNode!.removeChild(newP);
    let formData: FormData = new FormData(form);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    query.set("command", "delete");
    query.set("collection", "ToDoOne");
    query.set("delete", "id"); 
    query.set("id", "?");
    await fetch("https://webuser.hs-furtwangen.de/~bitzmare/Database/?" + query.toString());
  };

}
   