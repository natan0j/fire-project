var i = 0;
function sparkCount(){
  console.log(i)
  if (i===3){
    colourChanger(); 
  }
  else {
    i++;
    spark();
  }
}
 var divX = 1;

function spark(){
  var div = document.createElement('div');
  div.classList.add('spark');
  document.getElementById('background').appendChild(div);

  var div2 = document.createElement('div');
  div2.classList.add('spark2');
  document.getElementById('background').appendChild(div2);

  var div3 = document.createElement('div');
  div3.classList.add('spark3');
  document.getElementById('background').appendChild(div3);
}

function colourChanger(){
        var i = document.getElementById("background");
        i.classList.add("backgroundblack");   
        var x = document.getElementById("fireplace");
                x.style.display = "block";
        var z = document.getElementById("text");
                z.style.display = "none";
        var title = document.getElementById("info");
          title.style.display = "block";
        var stick1 = document.getElementById("stick1");
        stick1.style.display = "block";   
        var stick2 = document.getElementById("stick2");
        stick2.style.display = "block"; 
        var stick3 = document.getElementById("stick3");
        stick3.style.display = "block";   
}
function showPage(x){
    var about = document.getElementById(x);

    if(about.style.display==="block"){
    about.style.display = "none";
    }
    else {
      about.style.display = "block"
    }
    about.classList.add('textIn');
}