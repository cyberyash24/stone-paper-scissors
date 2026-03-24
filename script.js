let key1 = "";
  let key2 = "";
  let key3 = "";
  
 
 
  let wins = parseInt(localStorage.getItem("key1")) || 0;
  let losses = parseInt(localStorage.getItem("key2")) || 0;
  let draws = parseInt(localStorage.getItem("key3"))  || 0;
  let userChoice = "";
  let cpuChoice = "";
 
  let urScore=Infinity ;
  const button1 = document.querySelector(".btn1");
  const button2 = document.querySelector(".btn2");
  const button3 = document.querySelector(".btn3");  
  let clckBtn1 = button1.addEventListener("click",game);
  
  let clckBtn2 =  button2.addEventListener("click",game);
   
  let clckBtn3 = button3.addEventListener("click",game);
   
  function game(event){
     let cpuNumber = Math.round((Math.random() * (3))+1);
  if(cpuNumber===1){
    cpuChoice = "Rock";
  }
  else if(cpuNumber===2){
    cpuChoice = "Paper";
  }
  else{
    cpuChoice = "Scissor";
  }
    let clickedButton = 
    event.target.closest("button");
    
    if(clickedButton.classList.contains("btn1")){
    urScore=1;
    userChoice = "Rock";
  }
    else if(clickedButton.classList.contains("btn2")){
    urScore=2;
    userChoice = "Paper";
  }
    else{
    urScore=3;
    userChoice = "Scissor";
  }
    let isCorrect = false;
    if(userChoice === "Rock" && cpuChoice==="Scissor" ||
    userChoice === "Paper" && cpuChoice ==="Rock" ||
    userChoice === "Scissor" && cpuChoice === "Paper"){
      
      
      isCorrect = true;
      
    }
   else if(userChoice === cpuChoice){
     draws ++;
     localStorage.setItem("key3",draws);
     let urgent = document.querySelector(".display");
     urgent.innerHTML = 
     `
      You : ${userChoice} <br>
   
      Cpu : ${cpuChoice} <br>
      
      <span class="choose" ></span>
     
      
    
    `
     urgentChoose = document.querySelector(".choose");
     urgentChoose.innerHTML = `
     <span class="draw">
     It's a Draw!
     </span>
     `
     return;
   }
    
    let score = document.querySelector(".display");
    score.innerHTML=`
      You : ${userChoice} <br>
   
      Cpu : ${cpuChoice}
      <span class="choose" ></span>
    
    `
    if(isCorrect){
      wins ++;
        
   localStorage.setItem("key1",wins);
      let choose2 = document.querySelector(".choose");
      choose2.innerHTML = `<span class="win">
      You Win ✓
      </span>`;
    }
    else{
      losses ++;
        
   localStorage.setItem("key2",losses)
      let choose2 = document.querySelector(".choose");
      choose2.innerHTML = `<span class="loose">
      You loose ×
      </span>`;
      
      
    }
    let scoreCard = document.querySelector(".result");
    scoreCard.style.transform= "scale(1.2)";
    setTimeout(()=>{
      scoreCard.style.transform="scale(1)"
    },150)
  scoreCard.innerHTML = `
  Score : <br>
  Wins : ${wins} <br>
  Losses : ${losses} <br>
  Draws : ${draws} <br>
  
  `
  

  
  let Reset1 = document.querySelector(".reset");
  let reset2 = Reset1.addEventListener("click",clear);
  
  function clear(){
      wins = 0;
    losses = 0;
    draws = 0;
   document.querySelector(".display").innerHTML = "";
   document.querySelector(".result").innerHTML = `
    Score : <br>
  Wins : 0 <br>
  Losses : 0 <br>
  Draws : 0 <br>
  
    `
  }
  
  }

