score = 0;
document.onkeydown = function(e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino')
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');

        }, 700);
    } else if (e.keyCode == 39) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX + 112) + "px"
    } else if (e.keyCode == 37) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px"
    }
}


setInterval(() => {
    let dino = document.querySelector('.dino')
    let gameover = document.querySelector('.gameOver')
    let obstacle = document.querySelector('.obstacle')


    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))
    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

    let offsetX = Math.abs(dx - ox);
    let offsetY = Math.abs(dy - oy);
    if (offsetX < 93 && offsetY < 52) {
        gameover.style.visibility = 'visible'
        obstacle.classList.remove('obstaceAni')
    } else {
        score ++;
        scoreCont.innerHtml = "Your Score: " + score
    }

}, 100);

function updateScore(score) {
    scoreCont.innerHtml = "Your Score: " + score
}