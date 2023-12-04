 
 var randomNumber = Math.floor(Math.random())*5;
 var location1=randomNumber;

 var location2=location1+1;

 var location3=location2+1;

 var isSunk=false;

 var hit=0;

var guesses=0;

var guess;



while(isSunk==false)
{
    guess=prompt("Enter the guess number to hit the ship");
    
    if(guess <0 &&guess >6)
    {  
        alert("Please enter the valid cell number ");

    }
    else
    {

        guesses=guesses+1;
        if(guess==location1 || guess==location2 || guess==location3)
        {
            hit+=1;
            alert("hit");
            if(hit==3)
            {
                isSunk=true;
                alert("the ship is sank");

            }
        }else
        {
            alert("miss");
        }
        
    }

   


}

var state= "You took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/guesses);

alert(state);



