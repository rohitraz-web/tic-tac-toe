// Implementation of the default theam of the game

class TheamImp extends Theam {
    
    constructor() {
        super();
    }

    mainMenu() {
        return `<div class='main-menu game-screen' id='main-menu'>
                    <div class='menu-div'>
                        <div id="pwai">Play With AI</div>
                        <div id="pwf">Play With Friend</div>
                        <div id="settings">Settings</div>
                        <div id="about">About</div>
                        <div id="exit">Exit</div>
                    </div>
                </div>`;
    }

    // TODO: IMplement input name class
    inputName() {
        return `<div class='main-menu game-screen' id='input-name'>
                    
                </div>`; 
    }
}