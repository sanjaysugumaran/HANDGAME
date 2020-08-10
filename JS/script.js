let sant=0;
function handgame(yourchoice){
    if(sant===0){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    for(let i=0;i<yourImages.length;i++)
    {
        yourImages[i].remove();
    }
    let oppimage = document.querySelector('#dealer-box').querySelectorAll('img');
    for(let i=0;i<oppimage.length;i++)
    {
        oppimage[i].remove();
    }
    var batchoice,opponentchoice;
    batchoice=yourchoice.id;
    opponentchoice=opponentcard(randomint());

    showcard(batchoice,opponentchoice);
    batscore(batchoice,opponentchoice);
    yourscore(batchoice);
    decidewinner(batchoice,opponentchoice);
    
}
}

const hitSound = new Audio('Sounds/swish.m4a');
const winSound = new Audio('Sounds/cash.mp3');
const lossSound = new Audio('Sounds/aww.mp3'); 

document.querySelector('#button-play').addEventListener('click',resetbutton);

 function resetbutton(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    for(let i=0;i<yourImages.length;i++)
    {
        yourImages[i].remove();
    }
    let oppimage = document.querySelector('#dealer-box').querySelectorAll('img');
    for(let i=0;i<oppimage.length;i++)
    {
        oppimage[i].remove();
    }
    sant=0;
    a=0;
    q=0;
    hitSound.play();
    document.querySelector('#bat-hand-result').textContent=0;
    document.querySelector('#bowl-hand-result').textContent=0;

    document.querySelector('#handcricket-score').textContent=0;

    document.querySelector('#winning-message').textContent='Your Target: 25';
    document.querySelector('#winning-message').style.color='black';
}

function randomint(){
    return Math.floor(Math.random()*6);
}

function opponentcard(number){
    return ['1finger','2finger','3finger','4finger','5finger','6finger'][number];
}

function batscore(batsnumber,oppsnumber){
    var scoredatabase={
        '1finger':1,'2finger':2,'3finger':3,'4finger':4,'5finger':5,'6finger':6
    };
    let b=scoredatabase[batsnumber];
    let c=scoredatabase[oppsnumber];

    document.querySelector('#bat-hand-result').textContent=b;
    document.querySelector('#bowl-hand-result').textContent=c;
}
let a=0;
function yourscore(batsnumber){
    var scoredatabase={
        '1finger':1,'2finger':2,'3finger':3,'4finger':4,'5finger':5,'6finger':6
    };

    a+=scoredatabase[batsnumber];
    document.querySelector('#handcricket-score').textContent=a;
    
}

function showcard(batsmanchoice,oppchoice){
    var imagedatabse={
        '1finger':document.getElementById('1finger').src,
        '2finger':document.getElementById('2finger').src,
        '3finger':document.getElementById('3finger').src,
        '4finger':document.getElementById('4finger').src,
        '5finger':document.getElementById('5finger').src,
        '6finger':document.getElementById('6finger').src,
        
    };
    if(sant===0){
    hitSound.play();
    var batdiv = document.createElement('span');
    var oppdiv=document.createElement('span');
    batdiv.innerHTML="<img src='"+imagedatabse[batsmanchoice]+"'height=150 width=150>";
    oppdiv.innerHTML="<img src='"+imagedatabse[oppchoice]+"'height=150 width=150>"
    document.getElementById('your-box').appendChild(batdiv);
    document.getElementById('dealer-box').appendChild(oppdiv);
    }
}
var win=0,loss=0,draw=0,q=0;
function decidewinner(batchoice,oppchoice){
    
    if(sant===0)
    var winnerdatabase={
        '1finger':1,'2finger':2,'3finger':3,'4finger':4,'5finger':5,'6finger':6
    };

    var batrun=winnerdatabase[batchoice];
    var bowlrun=winnerdatabase[oppchoice];
    
    if(a===25 && batrun===bowlrun){
        draw++;
        document.querySelector('#draws').textContent=draw;
        document.querySelector('#winning-message').textContent='Draw!';
        document.querySelector('#winning-message').style.color='yellow';
        lossSound.play();
        sant=1;
    }

    else if(batrun===bowlrun){
        q=a-batrun;
        loss++;
        document.querySelector('#handcricket-score').textContent=q;
        document.querySelector('#winning-message').textContent='OUT!';
        document.querySelector('#winning-message').style.color='red';
        document.querySelector('#losses').textContent=loss;
        lossSound.play();
        sant=1;
    }
    else if(a>25){
        win++;
        document.querySelector('#winning-message').textContent='You Won!';
        document.querySelector('#winning-message').style.color='green';
        document.querySelector('#wins').textContent=win;
        winSound.play();
        sant=1;
    }
   
}
