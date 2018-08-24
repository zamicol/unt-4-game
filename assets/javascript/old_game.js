$(document).ready(function(){ 

    let test = true;
    let char1Count = true;
    let countDefeated = 0;
    
    //Counter
    let turboCount = 0;
    let rocketCount = 0;
    let slugCount = 0;
    let loveCount = 0;
    
    //Disable button
    let disableBtn = false;
    /*When character 1 is clicked move the
      other characters to enimes section*/
    
        $('.char1').on('click',function(){
            if(char1Count === true)
            {
                $(this).addClass('main');
                turboCount++;
                //Changes to false so Main character wont move to enemies area
                char1Count = false;
                // adds the characters that was not clicked to enemies section
                $('.char2').appendTo('.enemiesBox')
                .css({'height':'150px','width':'100px', 'background-color':'crimson', 'background-opacity':'.05'});
                //Centers characters Health text
                $('.char2 p').css({'margin-left': '30px'});
                
                $('.char3').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'crimson'});
                //Centers characters Health text
                $('.char3 p').css({'margin-left': '30px'});
                
                $('.char4').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'crimson'});
                //Centers characters Health text
                $('.char4 p').css({'margin-left': '30px'});
                //Adjusted the css so they would appear the same as before it was clicked
                $('.batteryJam').css({'width': '100px',
                                    'height': '100px',
                                    'margin-left': 'auto',
                                    'margin-right': 'auto',
                                    'display': 'block'});		
            }
            else if(char1Count === false && turboCount === 0)
            {
                //Enables attack button after defence is selected
                rocketCount++;
                slugCount++;
                loveCount++;
                disableBtn = false;
                $('.char1').appendTo('.defenceBox').addClass("def");
                $('.char1 p').css({'margin-left': '30px'});
            }
        });
    /*When character 2 is clicked move the
      other characters to enimes section*/
    $('.char2').on('click',function(){
        if(char1Count === true)
        {
            $(this).addClass('main');
            rocketCount++;
            char1Count = false;
            $('.char1').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'crimson'});
            //Centers characters Health text
            $('.char1 p').css({'margin-left': '30px'});
            
            $('.char3').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'crimson'});
            //Centers characters Health text
            $('.char3 p').css({'margin-left': '30px'});
            
            $('.char4').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'crimson'});
            //Centers characters Health text
            $('.char4 p').css({'margin-left': '30px'});
            //Adjusted the css so they would appear the same as before it was clicked
            $('.batteryJam').css({'width': '100px',
                                'height': '100px',
                                'margin-left': 'auto',
                                'margin-right': 'auto',
                                'display': 'block'});
        }
        else if(char1Count === false && rocketCount === 0)
        {
            //Enables attack button after defence is selected
            disableBtn = false;
            turboCount++;
            slugCount++;
            loveCount++;
            $('.char2').appendTo('.defenceBox').addClass("def").css({'background-color' : 'black','color':'white'});
            $('.char2 p').css({'margin-left': '30px'});
        }
    });
    /*When character 3 is clicked move the
      other characters to enimes section*/
    $('.char3').on('click',function(){
        if(char1Count === true)
        {
            $(this).addClass('main');
            slugCount++;
            char1Count = false;
            $('.char1').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
            //Centers characters Health text
            $('.char1 p').css({'margin-left': '30px'});
            
            $('.char2').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
            //Centers characters Health text
            $('.char2 p').css({'margin-left': '30px'});
            
            $('.char4').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
            //Centers characters Health text
            $('.char4 p').css({'margin-left': '30px'});
            //Adjusted the css so they would appear the same as before it was clicked
            $('.batteryJam').css({'width': '100px',
                                'height': '100px',
                                'margin-left': 'auto',
                                'margin-right': 'auto',
                                'display': 'block'});
        }
        else if(char1Count === false && slugCount === 0)
        {
            //Enables attack button after defence is selected
            disableBtn = false;
            rocketCount++;
            turboCount++;
            loveCount++;
            $('.char3').appendTo('.defenceBox').addClass("def").css({'background-color' : 'black','color':'white'});
            //Centers Health text
            $('.char3 p').css({'margin-left': '30px'});
        }
    });
    /*When character 4 is clicked move the
      other characters to enimes section*/
    $('.char4').on('click',function(){
        if(char1Count === true)
        {
            $(this).addClass('main');
            loveCount++;
            char1Count = false;
            $('.char1').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
            //Centers characters Health text
            $('.char1 p').css({'margin-left': '30px'});
            
            $('.char2').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
            //Centers characters Health text
            $('.char2 p').css({'margin-left': '30px'});
            
            $('.char3').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
            //Centers characters Health text
            $('.char3 p').css({'margin-left': '30px'});
            //Adjusted the css so they would appear the same as before it was clicked
            $('.batteryJam').css({'width': '100px',
                                'height': '100px',
                                'margin-left': 'auto',
                                'margin-right': 'auto',
                                'display': 'block'});
        }
        else if(char1Count === false && loveCount === 0)
        {
            //Enables attack button after defence is selected
            disableBtn = false;
            rocketCount++;
            turboCount++;
            slugCount++;
            $('.char4').appendTo('.defenceBox').addClass("def").css({'background-color' : 'black', 'color':'white'});
            //Centers Health text
            $('.char4 p').css({'margin-left': '30px'});
        }
    });
    //----------------------Attack-----------------
        $('.attackBtn').on('click',function() 
        {
            if(disableBtn === false)
            {
            let charName = $('.def').attr('characterName');
            //Gets main characters health atribute value
            let healthMain = $('.main').attr('health');
            //Gets the attack attribute value from the main Character
            let attackMain = $('.main').attr('attack');
            //Gets the defences health attribute value 
            let healthdefence = $('.def').attr('health');
            //Gets the defences counter attack attribute value 
            let counterAttack =  $('.def').attr('counterAttack');
            /* When user presses attack it reduces the main characters health
               by the counterAttack amount */
            let healthMainAfter = healthMain - counterAttack;
            /* When user presses attack it reduces the defence characters health
               by the Attack amount */
            let healthDefAfter = healthdefence - attackMain;
            //Updates main characters health attribute in the DOM
            let healthMain1 = $('.main').attr('health',healthMainAfter);
            //Updates defences health attribute in the DOM	
            let healthDef1 = $('.def').attr('health',healthDefAfter);
            //Changes main characters health text in the DOM 
            $('.main p').html($('.main').attr("health"));
            //Changes the defences health text in the DOM
            $('.def p').html($('.def').attr("health"));
            //Displays message 
            $('.defence').html('<p>' + 'You attacked ' + charName + 
                                ' for ' + attackMain +  ' damage '+
                                 charName + ' attacked you back for ' + 
                                 counterAttack + ' </p>').css({'font-size': '20px','text-align':'center'});
            //Doubles main Characters attack
            attackMain = attackMain  * 2;
            //Updates the main Characters attack 
            let attackMain1 = $('.main').attr('attack',attackMain);
            //Prents the attack button from being clicked after the game is over
                if(healthMainAfter <= 0)
                {
                    $('.defence').html('<p>' + 'You have been defeated...Game Over!!!' + ' </p>').css({'font-size': '20px'});
                    $('.main').remove();
                    this.disabled = true;
                    
                }
                else if(healthDefAfter <= 0)
                {
                    //defence turbo
                    if($('.def.char1').attr('health') <= 0)
                    {
                        console.log(true);
                        loveCount--;
                        slugCount--;
                        rocketCount--;
                        //Remove the the defence
                        $('.def').remove();
                        $('.defence').html('<p>' + 'You have defeated ' + charName +
                                             ' choose to fight another enemy.' + '</p>').css({'font-size': '20px'});
                        countDefeated++;
                    }
                    //defence rocket
                    else if($('.def.char2').attr('health') <= 0)
                    {
                        console.log(true);
                        loveCount--;
                        slugCount--;
                        turboCount--;
                        //Remove the the defence
                        $('.def').remove();
                        $('.defence').html('<p>' + 'You have defeated ' + charName +
                                             ' choose to fight another enemy.' + '</p>').css({'font-size': '20px'});
                        countDefeated++;
                    }
                    //defence Darth slug
                    else if($('.def.char3').attr('health') <= 0)
                    {
                        console.log(true);
                        loveCount--;
                        rocketCount--;
                        turboCount--;
                        //Remove the the defence
                        $('.def').remove();
                        $('.defence').html('<p>' + 'You have defeated ' + charName +
                                             ' choose to fight another enemy.' + '</p>').css({'font-size': '20px'});
                        countDefeated++;
                    }
                    //defence Darth love
                    else if($('.def.char4').attr('health') <= 0)
                    {
                        console.log(true);
                        rocketCount--;
                        turboCount--;
                        slugCount--;
                        //Remove the the defence
                        $('.def').remove();
                        $('.defence').html('<p>' + 'You have defeated ' + charName +
                                             ' choose to fight another enemy.' + '</p>').css({'font-size': '20px'});
                        countDefeated++;
                    }
                    //Removed event listener after game is over
                    if(countDefeated === 3)
                    {
                        $('.defence').html('<p>' + 'WINNER!!!' + '</p>').css({'font-size': '40px'})
                        console.log('count after**** ' + countDefeated);
                        this.disabled = true;
                        
                    }
                }
            }		
        });
    });


// let characters = {
//     "Snowball": {
//       hp: 150,
//       attack: 50
//     },
//     "Mr. Jones": {
//       hp: 200,
//       attack: 75
//     },
//     "Napoleon": {
//     hp: 200,
//     attack: 75
//     },
//     "Moses":{
//       hp: 1000,
//       attack: 15
//     }
//   }
  
//   console.log(characters["Mr. Jones"].hp - characters["Snowball"].attack);
  
//   $('.character').on('click', function(){
//     let characterClicked = this;
    
//     //this is text that will displays on screen
//     let screenDisplay = $('<h1>').text('You selected: ' + characterClicked.id)
//     $('#characters').append(screenDisplay);
    
//     //this makes the selected char stay at the top, and pushed the others to the bottom
//     $('.character').each(function(index, fighters){
//       if(fighters !== characterClicked) {
//         $('#gameboard').append(fighters);
//       }
//     })
//     console.log(reset());
//   })