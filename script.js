// utility
function qs(elem) {return document.querySelector(elem);}
function qsa(elem) {return document.querySelectorAll(elem);}

// globals
var
menu_open = 0;

// elements
const
opt_btns = qsa(".top-options button"),
menu = qs("#option"),
comment_inputs = qsa(".comment-input-area input"),
comment_boxs = qsa(".comment-box");

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
		menu.style.left = getOffset(button).left - 315 + "px";
	}
}
function makeComment(text, id) {
	qs("#cb-" + id).innerHTML += 
	`
	<div class="comment-container">
		<div class="comment">
		<img src="assets/profile-pic.jpg" alt="" class="comment-img">
		<div class="comment-text">
			<div class="comment-header">
			<p><strong>Rejwan Islam Rizvy</strong></p>
			</div>
			<p>${text}</p>
		</div>
		<div class="three-dot">
			<img src="svg/three_dot_gray.svg" class="three-dot-img" alt="">
		</div>
		</div>
		<div class="comment-lks">
		<p>
			<span>Like</span><span class="dot"> . </span>
			<span>Reply</span><span class="dot"> . </span>
			<span>Share</span><span class="dot"> . </span>
			<span>just now</span></p>
		</div>
	</div>
	`;
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
	comment_inputs.forEach(input => {
		input.addEventListener("change", (e)=>{
			makeComment(input.value, input.getAttribute("comment-id"));
			input.value = "";
		});
	});
});


var emojies = document.getElementById("emojies");
var like = document.getElementById("like");

like.addEventListener("mouseover", (e) => {
	var emojies = document.getElementById("emojies");
	emojies.style.visibility = 'visible';
})
like.addEventListener("mouseout", (e) => {
	var emojies = document.getElementById("emojies");
	emojies.style.visibility = 'hidden';
})