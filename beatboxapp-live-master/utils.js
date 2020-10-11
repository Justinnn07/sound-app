class Beat {
    constructor(audioSrc){
        this.audio = new Audio(audioSrc);
    }

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

class Button {
    constructor(color, keyCode){
        this.color = color;
        this.element = document.getElementById(keyCode);
        this.setButtonColorInHTML();
        this.createTransitionEndListener();
    }
    
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
    }

    createTransitionEndListener = () => {
        this.element.addEventListener('transitionend', ()=>{
            this.deselect();
        })
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = `none`;
    }

}