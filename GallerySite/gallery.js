function createImages() {
    //create 3 divs in containers
    for(x=1;x<4;x++){
    var image = document.createElement("div");
    image.classList.add("image");   
    z = Math.floor(20*Math.random());
    image.style.marginTop = z + "%";
    image.style.backgroundImage = "url(https://picsum.photos/id/" + z +"/200/150)";
    var container = document.getElementsByClassName("imagesContainer")
    for (i=0; i<container.length; i++)
    {
        container[i].append(image);
        
    }}
};



function divCreator(){
     //create container
   var container = document.createElement("div");
   container.className = "imagesContainer";
   document.body.appendChild(container);
   createImages();
   //animations
  container.keyframes = [
    {opacity: 0, bottom: "20%"}, 
  {opacity: 1, bottom: "120%"}
  ];
  container.animProps = {
    duration: 15000,
    easing: "ease-in"
  }
  container.animate(container.keyframes, container.animProps);
  
}
function divRemove() {
    const container = document.getElementsByClassName("imagesContainer");
    container[0].parentNode.removeChild(container[0]);
    
}

function shuffleImage() {
 
  image = document.getElementsByClassName("image");
  for(i=0;i<image.length;i++){
    console.log(i);
  }
}


function loopImages() {
    //one task
divCreator();
shuffleImage();
setTimeout(()=>divRemove(),14900);

}

setInterval(loopImages,6000);

