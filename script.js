// utility
function qs(elem) {return document.querySelector(elem);}
function qsa(elem) {return document.querySelectorAll(elem);}

// globals
var
menu_open = 0;

// elements
const
opt_btns = qsa(".top-options button");
menu = qs("#option");

// functions
function getOffset(el) {
	const rect = el.getBoundingClientRect();
	return {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY
	};
}
function toggle_option(button)
{
	if (menu.style.visibility == "visible")
	{
		menu.style.visibility = "hidden";
		menu.classList.remove("option_active");
	}
	else
	{
		menu.style.visibility = "visible";
		menu.style.top =  getOffset(button).top + 50 + "px";
		menu.style.left = getOffset(button).left - 310 + "px";
	}
}

//******************
// Main Function here
//******************
window.addEventListener('load', function() {
	// write your main events here...
	opt_btns.forEach(btn => {
		btn.addEventListener("click", (e)=>{
			toggle_option(btn);
		});
	});
	/*
	qs("#mother").addEventListener("click", (e)=>{
		if (menu.style.visibility == "visible")
		{
			menu.style.visibility = "hidden";
		}
	});
	*/
});