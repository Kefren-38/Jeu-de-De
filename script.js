// jQuery
$(() => {
    let newGame = $('#btn-NEWGAME')
    let rollDice = $('#rollDice')
    let hold = $('#hold')
    let roundScoreJ1 = $('#roundScoreJ1');
    let roundScoreJ2 = $('#roundScoreJ2');

    let images = ["images/de-1.png",
    "images/de-2.png",
    "images/de-3.png",
    "images/de-4.png",
    "images/de-5.png",
    "images/de-6.png"];
    let dice = $('#dice');
    
    
    //NEW GAME 
    //Retour des scores à zéro
    $('#btn-NEWGAME').click( function () {
        
        //1. Retour des scores à zéro
        $('#globalScoreJ1, #globalScoreJ2, #roundScoreJ1, roundScoreJ2').text(0);

        //2. Ajoute la class "active" au joueur 1
        $('.namePlayer1, #globalScoreJ1').addClass('active');

        //3. Supprime la class "active" au joueur 2
        $('.namePlayer2, #globalScoreJ2').removeClass('active');

        //4. Affiche le dé par défaut: le 1
        $('#dice').attr("src", images[0]);

        //5. Affiche le nom des joueurs par défaut
        $('.namePlayer1').text('PLAYER 1').removeClass('winner')
        $('.namePlayer2').text('PLAYER 2').removeClass('winner')
    })



    //ROLL DICE
    //Lancé de dé aléatoire
    $('#rollDice').click( function () {
 
        //1. Créa d'un let générant un nombre random de 1 à 6
        let dice = Math.floor(Math.random()*6);
        
        //2. Affiche dans la console
        //Attribue l'image correspondante
        console.log(dice+1);
        $('#dice').attr("src", images[dice]);

        //3. Affiche le résultat du dé dans "current" du joueur concerné
        if($('.namePlayer1').hasClass('active') == true) {
            $('#roundScoreJ1').text(dice+1);
        } else {
            $('#roundScoreJ2').text(dice+1);
        }
    
      
        //4. Si le résultat est 1, le joueur 1 perd ses points 
        if(dice === 0) {
            $('#roundScoreJ1').text(0);
            nextPlayer();
        }
    })


    //NEXTPLAYER
    //Fonction de changement de joueur 
    function nextPlayer () {
        //1. Si le joueur comporte la class "active" alors changement
        if($('#globalScoreJ1, .namePlayer1').hasClass('active') == true) {
            $('#globalScoreJ1, .namePlayer1').removeClass('active');
            $('#roundScoreJ1').text(0);
            $('#globalScoreJ2, .namePlayer2').addClass('active');
        } else {
        //2. Si non, c'est à lui de jouer
            $('#globalScoreJ2, .namePlayer2').removeClass('active');
            $('#roundScoreJ2').text(0);
            $('#globalScoreJ1, .namePlayer1').addClass('active');
        }
        
    }


    //BOUTON HOLD!
    $('#hold').click( function () {
        //1. let pour le joueur 1
        let scoreRound = $('#roundScoreJ1').text()
        let scoreGlobal = $('#globalScoreJ1').text()
        let score = parseInt(scoreRound) + parseInt(scoreGlobal)

        //1. let pour le joueur 2
        let scoreRoundJ2 = $('#roundScoreJ2').text()
        let scoreGlobalJ2 = $('#globalScoreJ2').text()
        let scoreJ2 = parseInt(scoreRoundJ2) + parseInt(scoreGlobalJ2)
        

        //3. Curent s'additionne au score global du joueur ayant la class "active"
        if($('#globalScoreJ1, .namePlayer1').hasClass('active') == true){
            $('#globalScoreJ1').text(score);
            nextPlayer()
        } else { 
            $('#globalScoreJ2').text(scoreJ2);
            nextPlayer()    
        }


        //4. Si un des joueur arrive à 100 ou plus, il gagne la partie!
        if(score >= 100) {
            $('.namePlayer1').text('WINNER!').addClass('winner')
        } if(scoreJ2 >= 100) {
            $('.namePlayer2').text('WINNER!').addClass('winner')
        }
        
        //5. Affiche le dé par défaut à chaque "HOLD!"
        $('#dice').attr("src", images[0]);
    })
 


});