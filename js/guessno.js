// Checker
function getdata(){
	let no = Math.random();
	// console.log(no);
	let database = Math.round(no * 10);
	// console.log(database);
	let result = document.getElementById("innerbox");

	let usr_input = document.getElementById("guessno").value;
	// console.log(usr_input);

	if (usr_input == database){
		result.innerHTML= `
			<div class="replace">
				<span class="ans">Your answer is true.</span>
				<button type="button" class="restart-btn">
					<a href="https://mavy14.netlify.app/" class="restart">Play Again</a>
				</button>
			</div>
		`;
	}else{
		result.innerHTML= `
			<div class="replace">
				<span class="ans">Your answer is false.</span>
				<button type="button" class="restart-btn">
					<a href="https://axl-guessnumber.netlify.app" class="restart">Play Again</a>
				</button>
			</div>
		`;
	}

	// result.classList.replace("innerbox","ans");
	// console.log(result.className);

	// let ansclass = result.classList;

	// ansclass.style.animationName = "animation"
	// let box = document.getElementById("box");
	result.style.animationName = "animation";
	result.style.animationDuration = "2s";
	result.style.animationTimingFunction = "linear";
}