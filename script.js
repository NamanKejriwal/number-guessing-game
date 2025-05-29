let score= 20;
let highscore=0;
let compsnumber= randomNumber();
function randomNumber() {
    const number= Math.floor(Math.random()*20) + 1;
    
    return Number(number);
}
function getInputnumber(){
    const input=document.querySelector('.guessnumber').value;
    return Number(input);
}
function checkGuess()
{
    const playerguess= getInputnumber();
    if(!playerguess)
            {
                alert('Please enter a number');
                return;
            }
        if (score <= 0) 
            {
                document.querySelector('.message').innerHTML = 'Game Over!';
                document.body.style.backgroundColor = 'black';
                return;
            }
    console.log(compsnumber);
    if(playerguess>compsnumber)
        {
            score--;
            document.querySelector('.score').innerHTML = `Score : ${score}`;
            document.querySelector('.message').innerHTML='Think lower';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    else if(playerguess<compsnumber)
        {
            score--;
            document.querySelector('.score').innerHTML = `Score : ${score}`;
            document.querySelector('.message').innerHTML='Think Higher';
            document.body.style.backgroundColor = "#8B8000";
        }
    else if(playerguess===compsnumber)
        {
            document.querySelector('.score').innerHTML = `Score : ${score}`;
            document.querySelector('.message').innerHTML='Correct Guess';
            if(score> highscore)
             {
                highscore = score;
             }
            
            document.querySelector('.highscore').innerHTML = `Highscore :${highscore}`;
            document.querySelector('.symbol-div').innerHTML = `${compsnumber}`;
            document.body.style.backgroundColor = '#60b347';
        }    
    else 
        {
            document.querySelector('.message').innerHTML='Invalid Input';
        }
}  
function resetGame(){
    score= 20;
    document.querySelector('.score').innerHTML = `Score : ${score}`;
    document.querySelector('.message').innerHTML='Start Guessing';
    document.querySelector('.symbol-div').innerHTML = '?';
    document.querySelector('.guessnumber').value = '';
    document.body.style.backgroundColor = '#222';

    document.querySelector('.highscore').innerHTML = `Highscore : ${highscore}`;
    compsnumber = randomNumber();
    console.log(compsnumber);
}     
