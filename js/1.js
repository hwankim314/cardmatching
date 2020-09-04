// (function(){
const card = document.querySelectorAll('.card');
const start = document.querySelector('.start2');
const gameWaiting = document.querySelector('.waiting');
const clear = document.querySelector('.clear');
const change = document.querySelector('.change');
const restart = document.querySelector('.third');
const cardLength = card.length;
let check = [];
let progress = false;
let cardDiv;
let cardDiv2;
let c1;
let c2;
let cardVal = [];
let pairs = 0;

for (i = 0; i < cardLength; i++) {
    card[i].addEventListener('click', function(e){
        if(progress){
            c2 = e.target.parentNode.parentNode;
            if(c1 !== c2){
                cardDiv2 = e.target.parentNode.parentNode;
                cardDiv2.classList.add('visible');
                check[1] = cardDiv2.childNodes[1].childNodes[1].src
                if(check[0] === check[1]){
                    setTimeout(correct, 500, cardDiv, cardDiv2);
                    pairs++;
                }else if(check[0] !== check[1]){
                    setTimeout(remove, 500, cardDiv, cardDiv2);
                }
                setTimeout(answer, 500)
                init();
            }else if (c1 === c2){};
        } else if(!progress){
            c1 = e.target.parentNode.parentNode;
            cardDiv = e.target.parentNode.parentNode;
            cardDiv.classList.add('visible');
            check[0] = cardDiv.childNodes[1].childNodes[1].src
            progress = true;
        }
    }
)};

function init(){
    check = [];
    cardDiv = null;
    cardDiv2 = null;
    progress = false;
}
function correct(a, b){
    a.childNodes[1].childNodes[1].src = "img/ball.png"
    b.childNodes[1].childNodes[1].src = "img/ball.png"
    a.classList.add('matched');
    b.classList.add('matched');
}
function remove(a, b){
    a.classList.remove('visible');
    b.classList.remove('visible');
}
function shuffle(a) { 
    var j, x, i; 
    for (i = a.length; i; i -= 1) {
         j = Math.floor(Math.random() * i); 
         x = a[i - 1]; 
         a[i - 1] = a[j]; 
         a[j] = x; 
        } 
    }
function answer(){
    if(pairs === 8){
        clear.style.zIndex = "1000";
        clear.style.opacity = "1";
    }
}
function gameStart(){
    for(i = 0; i < cardLength; i++){
        cardVal[i] = card[i].childNodes[1].childNodes[1].src;
        shuffle(cardVal);
    }
    for(i = 0; i < cardLength; i++){
        card[i].childNodes[1].childNodes[1].src = cardVal[i] ;
    }
    gameWaiting.style.opacity = "0";
    gameWaiting.style.zIndex = "-100";
}
function gameRestart(){
    clear.style.opacity = "0";
    clear.style.zIndex = "-100";
    for(i = 0; i < cardLength; i++){
        card[i].classList.remove('visible');
    }
    init();
    pairs = 0;
    gameStart();
}
function vertwo(){
    card[0].childNodes[1].childNodes[1].src = "img2/bbi.png"
    card[1].childNodes[1].childNodes[1].src = "img2/bbi.png"
    card[2].childNodes[1].childNodes[1].src = "img2/butter.png"
    card[3].childNodes[1].childNodes[1].src = "img2/butter.png"
    card[4].childNodes[1].childNodes[1].src = "img2/gora.png"
    card[5].childNodes[1].childNodes[1].src = "img2/gora.png"
    card[6].childNodes[1].childNodes[1].src = "img2/lap.png"
    card[7].childNodes[1].childNodes[1].src = "img2/lap.png"
    card[8].childNodes[1].childNodes[1].src = "img2/mag.png"
    card[9].childNodes[1].childNodes[1].src = "img2/mag.png"
    card[10].childNodes[1].childNodes[1].src = "img2/mang.png"
    card[11].childNodes[1].childNodes[1].src = "img2/mang.png"
    card[12].childNodes[1].childNodes[1].src = "img2/phan.png"
    card[13].childNodes[1].childNodes[1].src = "img2/phan.png"
    card[14].childNodes[1].childNodes[1].src = "img2/ya.png"
    card[15].childNodes[1].childNodes[1].src = "img2/ya.png"
}

start.addEventListener('click', gameStart);
document.addEventListener('keydown', function(e){
    const keyCode = e.keyCode;
    if (keyCode === 13){
        gameStart();
    }
})

change.addEventListener('click', vertwo);
restart.addEventListener('click', gameRestart);



// })();