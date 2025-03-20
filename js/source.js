// File to handle HTML basic element and things

console.log('Javascript file loadede');

window.onload = function(event) {
    // Loading the game according to the screen size
    // if(window.innerWidth <= 600 || window.innerHeight <= 700){
    //     resizeGameContainer();
    //     console.log('Container Resized');
    // }
    let game = new Game();
};
window.addEventListener('resize', resizeGameContainer);

// window.onresize(resizeGameContainer);
// Method to resize the screen of the game
function resizeGameContainer(event){
    // Scaling the game
    // let scaleX = window.innerWidth/600;
    // let scaleY = window.innerHeight/700;
    // let scale = Math.min(scaleX, scaleY);

    // let element = document.getElementById('game-container');
    // let elements = element.getElementsByTagName('*');
    // for (let i = 0; i < elements.length; i++) {
    //     elements[i].style.transform = "scale("+scale+","+scale+")";
    // }
    // element.style.transform = "scale("+scale+","+scale+")";
}