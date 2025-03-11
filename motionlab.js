const characterDataDragon = {
    arrImgs: 
        ["Transparent Dragon/flyingn0000.bmp", 
        "Transparent Dragon/flyingn0001.bmp",
        "Transparent Dragon/flyingn0002.bmp",
        "Transparent Dragon/flyingn0003.bmp",
        "Transparent Dragon/flyingn0004.bmp",
        "Transparent Dragon/flyingn0005.bmp", 
        "Transparent Dragon/flyingn0006.bmp", 
        "Transparent Dragon/flyingn0007.bmp"],
    poseNumber: 0,
    elem: document.querySelector("#dragon"),
    screenWidth: document.querySelector("#bg").clientWidth,
    screenHeight: document.querySelector("#bg").scrollHeight,
    x: (document.querySelector("#bg").clientWidth / 2) - (document.querySelector("#dragon").clientWidth / 2),
    y: (document.querySelector("#bg").scrollHeight / 2) - (document.querySelector("#dragon").clientHeight / 2) + 50, 
    timerId: null,
    move : function() {
        if (this.y < 0) {
            this.y = this.screenHeight - 100;
        } else {
            this.y -= 5;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "./" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 8;
        }
    }
}

const characterDataKnight = {
    arrImgs: 
        ["Transparent Knight/running nw0000.bmp", 
        "Transparent Knight/running nw0001.bmp",
        "Transparent Knight/running nw0002.bmp",
        "Transparent Knight/running nw0003.bmp",
        "Transparent Knight/running nw0004.bmp",
        "Transparent Knight/running nw0005.bmp", 
        "Transparent Knight/running nw0006.bmp", 
        "Transparent Knight/running nw0007.bmp"],
    poseNumber: 0,
    elem: document.querySelector("#knight"),
    screenWidth: document.querySelector("#bg").clientWidth,
    screenHeight: document.querySelector("#bg").scrollHeight,
    x: (document.querySelector("#bg").clientWidth / 2) - (document.querySelector("#knight").clientWidth / 2),
    y: (document.querySelector("#bg").scrollHeight / 2) - (document.querySelector("#knight").clientHeight / 2) + 200, 
    timerId: null,
    move : function() {
        if (this.x < 0 || this.y < 0) {
            this.x = this.screenWidth - 100;
            this.y = this.screenHeight - 100;
        } else {
            this.x -= 7; 
            this.y -= 3; 
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "./" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 8;
        }
    }
}

// Function called when the move it button is clicked
function move() {
    characterDataDragon.timerId = setInterval(frameDragon, 100);
    characterDataKnight.timerId = setInterval(frameKnight, 100);
}

// Callback function to reset the image position for dragon
function frameDragon() {
    characterDataDragon.move();
}

// Callback function to reset the image position for knight
function frameKnight() {
    characterDataKnight.move();
}

// Function called when the stop button is clicked
function stopMoving() {
    clearInterval(characterDataDragon.timerId);
    clearInterval(characterDataKnight.timerId);
}

/* You can add more characters and process the animation with an array */
const characters = [characterDataDragon, characterDataKnight];