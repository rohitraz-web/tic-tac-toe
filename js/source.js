// File to handle HTML basic element and things

console.log('Javascript file loadede');

window.onload = function(event) {
    // Loading the game according to the screen size
    let game = new Game();

    resizeGameContainer();
};

window.addEventListener('resize', resizeGameContainer);

// window.onresize(resizeGameContainer);
// Method to resize the screen of the game

function resizeGameContainer(event){
    // Scaling the game
    if((window.innerWidth <= 600 || window.innerHeight <= 700)){
        
        let scaleX = window.innerWidth/600;
        let scaleY = window.innerHeight/700;
        let scale = Math.min(scaleX, scaleY);

        let element = document.getElementById('game-container');
        element.style.transform = "scale("+scale+","+scale+")";
    
    }
}