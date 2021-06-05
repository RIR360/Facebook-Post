// utility
function qs(elem) {return document.querySelector(elem);}
function qsa(elem) {return document.querySelectorAll(elem);}

// globals
var 
menu_open = 0;

// elements
const
opt_btns = qsa(".top-options button");

// functions

//******************
// Main Function here
//******************
window.addEventListener('load', function() {

	opt_btns.forEach(btn => {
		btn.addEventListener("click", ()=>{
			alert("Work in progress...");
		});
	});
});