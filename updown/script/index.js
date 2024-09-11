let computerNum=0;
let userNum=document.getElementById("user-input");
let playButton=document.getElementById("play-button");
let resetButton=document.getElementById("reset-button");
let resultArea=document.getElementById("result-area");
let resultNum=document.getElementById("result-Num");
let chance = 10;
let chanceArea=document.getElementById("chance-area");
let history=[];
//html 글자 및 버튼

chanceArea.innerHTML=`남은 기회: ${chance}번`;
userNum.addEventListener("focus",()=>{userNum.value=""})
playButton.addEventListener("click",playGame)
resetButton.addEventListener("click",reset)
//기회 및 버튼

function randomNum(){
    computerNum=Math.floor((Math.random() * 6974) + 1);
}
//랜덤 값 받기

function playGame(){
    var userValue=userNum.value

    if(userValue<1 || userValue>6974){
        resultArea.textContent="1부터 6974까지의 숫자를 입력해주세요"
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 값입니다."
        return;
    }

    chance--;
    chanceArea.textContent=`남은 기회: ${chance}번`;
    history.push(userValue);
    

    if(userValue>computerNum){
        resultArea.style.color = "blue"
        resultArea.textContent="내려";

    }else if(userValue<computerNum){
        resultArea.style.color = "red"
        resultArea.textContent="올려";
    
    }else{
        resultArea.textContent="성공하셨군요. 당신은 게이입니다.";
        chanceArea.innerHTML="성별을 초기화해주세요";
        playButton.disabled=true;
     
    }
 
    if(chance == 0){
        resultArea.textContent="실패하셨군요. 당신은 레즈입니다.";
        chanceArea.innerHTML="성별을 초기화해주세요"
        resultNum.innerText=`답은 ${computerNum}였습니다.`;
        playButton.disabled=true;
    }
}
//게임의 승패 및 올림과 내림 출력, 남은 기회 등의 게임 활동 내용

function reset(){
    randomNum();
    userNum.value="";
    resultArea.textContent="1부터 6974까지의 숫자를 입력해주세요";
    chanceArea.innerHTML="남은 기회: 10번";
    playButton.disabled = false;
    resultArea.style.color = "black";
    chance = 10;
    history = [];
}
//포기하기를 눌렀을 때

randomNum();