/*
Aufgabe: L02_EventInspector
Name: Mareike Bitz
Matrikel: 272506
Datum: 06. 04. 2023
Quellen: Madeleine Hansen
*/

namespace L02_EventInspector {

    console.log("Test");
    window.addEventListener('load', handleLoad);
  
    function handleLoad(): void {
        document.addEventListener('mousemove', setInfoBox);
        document.querySelector("button")!.addEventListener('click', buttonfunc);
        document.addEventListener('click', info);
        document.addEventListener('keyup', info);
        document.body.addEventListener('click', info);
        document.body.addEventListener('keyup', info);
        document.getElementById('div0')!.addEventListener('click', info);
        document.getElementById('div0')!.addEventListener('keyup', info);
        document.getElementById('div1')!.addEventListener('click', info);
        document.getElementById('div1')!.addEventListener('keyup', info);
    }

    let span: HTMLElement = document.createElement("span");
    span.className = "span";
    document.querySelector("#div0")!.appendChild(span);
  
    function setInfoBox(_event: MouseEvent): void {
      let positionx = _event.clientX;
      let positiony = _event.clientY;
  
      span.style.left = positionx + 10 + "px";
      span.style.top = positiony + 10 + "px";
  
      span.innerText = "Mouseposition: x : " + positionx + ", Y: " + positiony + _event.target;
    }

    function info(_event: Event): void {
        console.log(_event.target, _event.currentTarget, _event.type, _event);
      }

    function customEvent() {
        console.log(customevent.bubbles)
        console.log(customevent.detail)
    }
  
    const customevent = new CustomEvent("bubbleup", { bubbles: true});
  
    function buttonfunc(){
      document.addEventListener("bubbleup", customEvent);
      document.dispatchEvent(customevent);
    }
  }