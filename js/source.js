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
    let scaleX = window.innerWidth/500;
    let scaleY = window.innerHeight/600;
    let scale = Math.min(scaleX, scaleY);

    let element = document.getElementById('game-container');
    element.style.transform = "scale("+scale+")";
}