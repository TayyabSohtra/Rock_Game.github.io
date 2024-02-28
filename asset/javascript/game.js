// const computer=document.querySelector(".computer-image");
//         // console.log(computer.img)
//         const player=document.querySelector(".player-image");
//         const computerscore=document.querySelector(".computer-score");
//         const playerscore=document.querySelector(".player-score");
//         const tosebutton=document.querySelectorAll(".tose-button");
//         // tosebutton.forEach((tose)=>{
//         //     tose.addEventListener("click",() => {

//         //         setTimeout(()=>{

//         //         },900);
//         //     })
//         // })
//         tosebutton.forEach((tose)=>{
//             // console.log(tose)
//             tose.addEventListener("click",() => {
//                 player.classList.add("shakesplayer");
//                 computer.classList.add("shakescomputer");
//                 setTimeout(()=>{
//                     player.classList.remove("shakesplayer");
//                     computer.classList.remove("shakescomputer");
//                     player.src =  "asset/images/Player_"+tose.innerHTML + ".png";
//                     // console.log("asset/images/"+tose.innerHTML+".png")    
//                     const choice=["Rock", "Paper", "Scissor"];
//                     let arrayno=Math.floor(Math.random()*3);
//                     let computerchoice=choice[arrayno]
//                     // console.log(computerchoice)
//                     computer.src="asset/images/"+computerchoice+"_"+".png";
//                     // console.log("asset/images/"+computerchoice+".png")    
//                 },900);
//             })
//         })
let score = 0;
let score1 = 0;
const com_move = (playerchoice) => {
    const choice = ["Rock", "Paper", "Scissor"];
    let arrayno = Math.trunc(Math.random() * 3);
    // console.log(arrayno);
    let computerchoice = choice[arrayno]
    // console.log(computerchoice)
    document.getElementById('com-img').src = 'asset/images/' + computerchoice + '.png';
    if (computerchoice === playerchoice) {
        document.querySelector('.message').textContent = "👔Game is Tie";
    } else if (computerchoice !== playerchoice) {
        if (document.querySelector('.computer-score').textContent < 3 && document.querySelector('.player-score').textContent < 3) {
            if (computerchoice === "Paper" && playerchoice === "Rock") {
                document.querySelector('.message').textContent = "🎉Computer Win";
                score++;
                document.querySelector('.computer-score').textContent = score;
            }
            else if (computerchoice === "Scissor" && playerchoice === "Rock") {
                document.querySelector('.message').textContent = "💥Computer Lose";
                score1++;
                document.querySelector('.player-score').textContent = score1;
            }
            else if (computerchoice === "Scissor" && playerchoice === "Paper") {
                document.querySelector('.message').textContent = "🎉Computer Win";
                score++;
                document.querySelector('.computer-score').textContent = score;
            }
            else if (computerchoice === "Rock" && playerchoice === "Paper") {
                document.querySelector('.message').textContent = "💥Computer Lose";
                score1++;
                document.querySelector('.player-score').textContent = score1;
            }
            else if (computerchoice === "Rock" && playerchoice === "Scissor") {
                document.querySelector('.message').textContent = "🎉Computer Win";
                score++;
                document.querySelector('.computer-score').textContent = score;
            }
            else if (computerchoice === "Paper" && playerchoice === "Scissor") {
                document.querySelector(".message").textContent = "💥Computer Lose";
                score1++;
                document.querySelector('.player-score').textContent = score1;
            }
        }
        else {
            // document.querySelector('.message').textContent = "The game has been played to completion, please start a new one!";
            document.querySelector('.message').textContent = "You can't play again! Game is Over...";
            console.log("game is Over")
            if (score > score1) {
                document.querySelector('.message').textContent = '🏆Computer Won Game';
            }
            else {
                document.querySelector('.message').textContent = '🏆You Won Game'
            }
        }

    }
}
document.querySelector(".btn").addEventListener("click", () => {
    // const choice=["Rock", "Paper", "Scissor"];
    // let arrayno=Math.trunc(Math.random()*3);
    // console.log(arrayno);
    // let computerchoice=choice[arrayno]
    // console.log(computerchoice)
    // console.log(document.getElementById('com-img').src='asset/images/'+ computerchoice+'.png');
    com_move("Rock")
    document.getElementById('p-img').src = 'asset/images/Player_Rock.png';
});
document.querySelector(".btn1").addEventListener("click", () => {
    // const choice=["Rock", "Paper", "Scissor"];
    // let arrayno=Math.trunc(Math.random()*3);
    // console.log(arrayno);
    // let computerchoice=choice[arrayno]
    // console.log(computerchoice)
    // console.log(document.getElementById('com-img').src='asset/images/'+ computerchoice+'.png');
    com_move("Paper");
    document.getElementById('p-img').src = 'asset/images/Player_Paper.png';
});
document.querySelector(".btn2").addEventListener("click", () => {
    // const choice=["Rock", "Paper", "Scissor"];
    // let arrayno=Math.trunc(Math.random()*3);
    // console.log(arrayno);
    // let computerchoice=choice[arrayno]
    // console.log(computerchoice)
    // console.log(document.getElementById('com-img').src='asset/images/'+ computerchoice+'.png');
    com_move("Scissor");
    document.getElementById('p-img').src = 'asset/images/Player_Scissor.png';
});
document.querySelector('.gn-btn').addEventListener('click', () => {
    window.location.reload();
});