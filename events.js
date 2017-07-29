console.log("hello");

let outputArea = document.getElementById("output-target");

			/******* SECTION CLICK *******/

let articleSections = document.getElementsByClassName("article-section");

function sectionClick(placeHolder) {
	let sectionName = placeHolder.target.innerHTML;
	outputArea.innerHTML = "You clicked on the " + sectionName + " section.";
};

for (let i = 0; i < articleSections.length; i++) {
	articleSections.item(i).addEventListener("click", sectionClick);
};

			/******* HEADER MESSAGE *******/

let header = document.getElementById("page-header");
header.addEventListener("mouseover", headerMouseOver);
header.addEventListener("mouseout", headerMouseAway);

function headerMouseOver(event) {
	outputArea.innerHTML = "You moved your mouse over the header.";
};

function headerMouseAway(event) {
	outputArea.innerHTML = "You left me!!!";
};


			/******* INPUT FIELD MAGIC *******/

let inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", inputMagic);

function inputMagic(event) {
	outputArea.innerHTML = event.target.value;
};

			/******* BUTTON TRICKS *******/

let guineaPig = document.getElementById("guinea-pig");

let colorbtn = document.getElementById("add-color");

colorbtn.addEventListener("click", color);

function color() {
	guineaPig.classList.toggle("colorize");
};

document.getElementById("make-large")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("larger");
	});

document.getElementById("add-border")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("bordered"); 
	});

document.getElementById("add-rounding")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("rounding");
	});

