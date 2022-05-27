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
		result.innerHTML= `Your answer is true.`;
	}else{
		result.innerHTML= `Your answer is false.`;
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