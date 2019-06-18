//******************************************//
//******* made with love by esysss**********//
//******************************************//

let levelCounter = 0;
let steps = [];
let counter = 0;
let copyOfSteps = [];
$(document).keypress(function (e) {
    counter += 1;
    if (counter == 1) {
        $('button').removeClass('game-over');
        nextLevel();
    }
});

$('.btn').click(function (e) {
    if (counter === 0) {
        console.log('returned');
        return;
    } else {
        let poped = copyOfSteps.pop();
        if (e.target.id !== poped) {
            animStarter('fuck');
            $('body').addClass('game-over');
            setTimeout(function () {
                $('body').removeClass('game-over');
            }, 100);
            $('#level-title').html('Game Over!!!<br>press any key to start again...');
            counter = 0;
            steps = [];
            levelCounter = 0;
            copyOfSteps = [];
            return;
        } else {
            console.log(e.target.id);
            animStarter(e.target.id);
        }
    }

    if (copyOfSteps.length === 0) {
        setTimeout(function () {
            nextLevel();
        }, 1000);
    }
});

// to make the next level
function nextLevel() {
    let nextRand = Math.floor(Math.random() * 4);
    nextRand = animStarter(nextRand)
    levelCounter++;
    $('#level-title').html('level ' + levelCounter);
    steps.push(nextRand);
    copyOfSteps = []
    for (var i = steps.length; i > 0; i--) {
        copyOfSteps.push(steps[i - 1]);
    }
}

// make the animation
function animStarter(nextRand) {
    switch (nextRand) {
        case 'green':
        case 0:
            $("#" + 'green').fadeIn(100).fadeOut(100).fadeIn(100);
            anim('green');
            var audio = new Audio('sounds/green.mp3');
            audio.play();
            return ('green');

        case 'red':
        case 1:
            $("#" + 'red').fadeIn(100).fadeOut(100).fadeIn(100);
            anim('red');
            var audio = new Audio('sounds/red.mp3');
            audio.play();
            return ('red');

        case 'yellow':
        case 2:
            $("#" + 'yellow').fadeIn(100).fadeOut(100).fadeIn(100);
            anim('yellow');
            var audio = new Audio('sounds/yellow.mp3');
            audio.play();
            return ('yellow');

        case 'blue':
        case 3:
            $("#" + 'blue').fadeIn(100).fadeOut(100).fadeIn(100);
            anim('blue');
            var audio = new Audio('sounds/blue.mp3');
            audio.play();
            return ('blue');
        default:
            var audio = new Audio('sounds/wrong.mp3');
            audio.play();
            return ('this is not possible');
    }
}

function anim(theKey) {
    $('#' + theKey).addClass('pressed');
    setTimeout(function () {
        $('#' + theKey).removeClass('pressed');
    }, 100);
}