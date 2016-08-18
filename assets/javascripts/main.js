var flag = 1;
function bf() {

    var cd = document.getElementById('cd');
    var audio = document.getElementById('myaudio');

        if (flag == 1) {
            audio.pause();
            flag = 0;
            cd.style.webkitAnimationPlayState = "paused";
        }
        else {
            audio.play();
            flag = 1;
            cd.style.webkitAnimationPlayState = "running";
        }
    }

