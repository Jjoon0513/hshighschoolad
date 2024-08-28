let rainbow = document.getElementsByClassName("rainbow")[0];

randomv = 0;
random_color = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'purple']

function rainbowf(){
    if (randomv == 6){
        randomv = 0
    } else {
        randomv++
        
    }
    rainbow.style.color = random_color[randomv]
}

var rainbow_looping = setInterval(rainbowf, 70)
