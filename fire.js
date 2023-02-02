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
        if (x.style.display === "block") {
                x.classList.add('hide');
              } else {
                x.style.display = "block";
              }
        var y = document.getElementById("logs");
        if (y.style.display === "block") {
                y.style.display = "none";
              } else {
                y.style.display = "block";
              }
        var z = document.getElementById("text");
        if (z.style.display === "none") {
                z.classList.add('show');
              } else {
                z.style.display = "none";
              }
        var title = document.getElementById("info");
        if (title.style.display === "block") {
          title.classList.add('hide');
        } else {
          title.style.display = "block";
        }
}
function photoTransition(){
  var photo = document.getElementsByClassName('photo');
  console.log(photo)
}