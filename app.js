//console.log ("hello world")
var p1 = function player1play(){

 	(this).innerHTML="X";
	
};

var p2 = function player2play(){
	(this).innerHTML ="O";
};

var result = [	[0,0,0],
				[0,0,0],
				[0,0,0]	];
var tour = 0;

//Quand on clique ajoute au html une croix ou un rond
//change la valeur du tableau js en la même valeur que sur le tableau
$('td button').click(function() {
	var emptyCell = $(this).html()
	//verifie que la case ne soit pas déja coché
	if (emptyCell ===""){

		var raw = $(this).parent().parent().index();
		var column = $(this).parent().index();
		if (tour %2 ==0){
			
			$(this).html(p2);
			result[raw].splice(column,1,"O");
			tour ++;
			
		}else{
		 
			$(this).html(p1);
			result[raw].splice(column,1,"X");
			tour ++;
		}
	//verifie si les lignes ont toutes la même valeur
	
		if (result[0].join()==="X,X,X"||result[1].join()==="X,X,X"||result[2].join()==="X,X,X"){
			alert("player 1 WIN!!")	
		}else 
		if (result[0].join()==="O,O,O"||result[1].join()==="O,O,O"||result[2].join()==="O,O,O"){
			alert("player 2 WIN!!")
		} else
	// verifier si les colonnes sont gagnante

		if (result[0][0]&&result[0][1]&&result[0][2]==="X"||
			result[1][0]&&result[1][1]&&result[1][2]==="X"||
			result[2][0]&&result[2][1]&&result[2][2]==="X"){
			alert ("ici ca deconne")

		}else 
		if (result[0][0]&&result[0][1]&&result[0][2]==="O"||
			result[1][0]&&result[1][1]&&result[1][2]==="O"||
			result[2][0]&&result[2][1]&&result[2][2]==="O"){
			alert ("la peut etre")
		} else
	// verifie les diagonales
		if (result[0][0]&&result[1][1]&&result[2][2]==="X"||
			result[0][2]&&result[1][1]&&result[2][0]==="X"){
			alert ("ou ici")
		}else 
		if (result[0][0]&&result[1][1]&&result[2][2]==="O"||
			result[0][2]&&result[1][1]&&result[2][0]==="O"){
			alert ("on verra")	
		}
		for (var i = 0; i < 3; i++) {
					
						console.log(result[i])
				}		

	}else {
		alert ("TRICHEUR!!!!")
	}
});

$("#playAgain").click(function(){

	result = [	[0,0,0],
				[0,0,0],
				[0,0,0]	];	
	tour = 0;

	$("td button").html("")
});