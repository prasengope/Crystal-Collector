$( document ).ready(function() {
    var winCount = 0;
    var lossCount = 0;
    
    $("#start-game").on("click", function(){
        var diamondScore = 0;
        var emeraldScore = 0;
        var rubyScore = 0;
        var sapphireScore = 0;
        var scoreCounter = 0;
        $("#your-score").text(scoreCounter);
        $("#wins").text(winCount);
        $("#loss").text(lossCount);
        $("#message").empty();

        var randomScore = Math.floor(Math.random()*120 + 19);
        $('#targeted-score').text(randomScore);
       
        diamondScore = Math.floor(Math.random()*12 + 1);
        console.log(diamondScore);
        var diamond = $("#diamond")
        diamond.attr('data-crystalValue', diamondScore);
    
        emeraldScore = Math.floor(Math.random()*12 + 1);
        console.log(emeraldScore);
        var emerald = $("#emerald")
        emerald.attr('data-crystalValue', emeraldScore);
    
        rubyScore = Math.floor(Math.random()*12 + 1);
        console.log(rubyScore);
        var ruby = $("#ruby")
        ruby.attr('data-crystalValue', rubyScore);
    
        sapphireScore = Math.floor(Math.random()*12 + 1);
        console.log(sapphireScore);
        var sapphire = $("#sapphire")
        sapphire.attr('data-crystalValue', sapphireScore);
    
        $(".crystal-image").on("click", function(){
            var crystalValue = $(this).attr("data-crystalValue");
            crystalValue = parseInt(crystalValue);
            scoreCounter += crystalValue;
            $("#your-score").text(scoreCounter);
    
            if(scoreCounter === randomScore){
                $("#message").html("<div class = 'alert alert-success'>You won the game! Please press the Start button to play again.</div>");
                winCount++;
                $("#wins").text(winCount);
                scoreCounter = 0; 

            } else if(scoreCounter > randomScore){
                $("#message").html("<div class = 'alert alert-danger'>You lost the game! Please press the Start button to play again.</div>");
                lossCount++;
                $("#loss").text(lossCount);
                scoreCounter = 0;
            }
        });
    });
    
});