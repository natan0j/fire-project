function createImages() {
    //create 3 divs
    for(x=1;x<4;x++){
    var image = document.createElement("div");
    image.classList.add("image")
    }


   setTimeout(()=> {
    var container = document.getElementsByClassName("imagesContainer")
    for (i=0; i<container.length; i++)
    {
        container[i].append(image);
    }},100);
    console.log(image);
};


function divCreator(){
     //create container
   var container = document.createElement("div");
   container.className = "imagesContainer";
   document.body.appendChild(container);
   createImages();
  container.keyframes = [
    {opacity: 0, bottom: "-10%"}, 
  {opacity: 1, bottom: "110%"}
  ];
  container.animProps = {
    duration: 10000,
    easing: "ease-in"
  }
  container.animate(container.keyframes, container.animProps);
  
}
function divRemove() {
    var container = document.getElementsByClassName("imagesContainer");
    var image = document.getElementById("image");
    container.remove();
    image.remove();
}
/* THIS WORKS AS A ONE TIME
divCreator();
setTimeout(()=>divRemove(),9900);
*/

divCreator();
setTimeout(()=>divCreator(),5000)



