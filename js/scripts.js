

// Generate random number

var min = parseInt(1);
var max = parseInt(7);
var random = Math.floor(Math.random()*(max - min) + min);












$(document).ready(function(){
    $("#roll").submit(function(){
        $("#currentRoll").text(`1`);
    });
    $("form#formOne").submit(function(event){
        event.preventDefault();
       //  var number = $("input#formOne").valueOf();
        
        var min = parseInt(1);
        var max = parseInt(7);
        var random = Math.floor(Math.random()*(max - min) + min);
       //  $("#result").text(" " + sum + random);
        var sum = parseInt(0);
        for (var i= 0; i<=random; i++){
            if  (i>1 && i <7){
                sum+=i;
                console.log(i);
                console.log(sum);
            } else if (random===1) {
                console.log(random);
                $(".alert").text("Player 2 turn");
                $(".alert").show();
                sum+=0;
               
                break;
                
             } 
        }
            
        $("#result").text(" " + sum);
    });

//     $("form#formTwo").submit(function(event) {
//         event.preventDefault();
//         var sum = Math.floor(Math.random()*(7 - 1) + 1)
//         console.log(sum)
//             if (sum == 1) {
//                 console.log("Sorry end of turn")
//             } else {
//                 console.log(sum)
//             }
        
//         $("#resultTwo").text(" "+ sum);
//     });
});