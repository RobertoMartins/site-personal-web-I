function showWhats() {
    document.getElementById("whats-border").style.display = "none";
    document.getElementById("whats").style.display = "block";
   }
   
   function showWhatsBorder() {
    document.getElementById("whats").style.display = "none";
    document.getElementById("whats-border").style.display = "block";
   }
   
   var functions = [showWhats, showWhatsBorder];
   var counter = 0;
   setInterval(change, 1000);
   
   function change() {
        functions[counter]();
           counter++;
           if(counter >= functions.length) { counter = 0; }
   }

