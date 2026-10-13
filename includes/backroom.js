// Click the television to make it and room 3 blink together.
document.getElementById("broken-television").onclick = function() {
    this.style.animation = "television-blink 3.3s step-end infinite";
    document.getElementById("room-3").style.animation = "room-blink 3.3s step-end infinite";
};

// Each chicken shrinks on its first click only.
let chickens = document.getElementsByClassName("room-2-chicken");

for (let i = 0; i < chickens.length; i++) {
    chickens[i].onclick = function() {
        this.style.width = "48px";
        this.onclick = null;
    };
}
