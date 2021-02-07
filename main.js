const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');



document.addEventListener('keydown', function(event) {
	jump();
}
	) ;


var fly = new Audio();
var crush = new Audio();
var over = new Audio();

fly.src = "audio/jump.mp3";
crush.src = "audio/crash.mp3";
over.src = "audio/over.mp3";

function jump () {
	// dino.classList.add('jump')
	if (dino.classList != "jump") {
		dino.classList.add('jump')
	}
	setTimeout (function() {
		dino.classList.remove('jump')
	}, 300 );
	fly.play()
}

let isAlive = setInterval ( function() {
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top') );
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left') );


	if(cactusLeft < 120 && cactusLeft > 90 && dinoTop >= 210 ) {
		alert('GAME OVER', crush.play());
	}
}, 10
	) 