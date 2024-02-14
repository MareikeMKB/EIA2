namespace Website {
    console.log('Hallo');

    let answers = ['#a1','#a2','#a3', '#a4'];
    let codes = ['AF601','KX749', 'BL326', 'HP476'];

    document.getElementById("stuff")!.style.setProperty("visibility", "hidden");

    for (let i = 0; i < 4; i++) {
        document.querySelector(answers[i])?.addEventListener("click", function(){
            document.getElementById("p")!.innerHTML = codes[i];
            document.getElementById("stuff")!.style.setProperty("visibility", "visible");
        });
    }
  
  }

