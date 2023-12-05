
let  game=confirm("Shall we play ???")

if(game)
{
    let inputval=prompt("Enter like rock,paper or scissor");

    if(inputval)
    {
        let playerChoice = inputval.trim().toLowerCase();
        if(playerChoice=='rock' || playerChoice=='scissors' || playerChoice=='paper')
        {
            let computerVal=Math.random()*3+1;

            let computer = computerVal==1 ? "rock" : computerVal==2 ?"paper":"scissors"
            let res = computer==playerChoice ?"Match ties" : playerChoice=='rock' && computer=='paper' ? 'computer wins' : playerChoice=='paper' && computer=='scissors' ? 'computer wins' : playerChoice='scissors' && computer=='rock' ? 'computer wins' : 'player wins'
            alert(res);
        }
        else{
           alert("you didn't choosed the cortrect one")
        }



    
    }
    else
    {
        alert("you didn't entered anything");
    }



}
else{
    alert("let's play some other time");
}


