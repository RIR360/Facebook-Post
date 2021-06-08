// utility
function qs(elem) {return document.querySelector(elem);}
function qsa(elem) {return document.querySelectorAll(elem);}

// globals
hovered_btn_id = 0;

// elements
const
opt_btns = qsa(".top-options button"),
menu = qs("#option"),
emoji_panel = qs("#emojies"),
comment_inputs = qsa(".comment-input-area input"),
comment_boxs = qsa(".comment-box"),
comment_btns = qsa(".comment-btn"),
like_btns = qsa(".like-btn"),
emojies = qsa("#emojies img");

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
		menu.style.top =  "0px";
		menu.style.left = "0px";
	}
	else
	{
		menu.style.visibility = "visible";
		menu.style.top =  getOffset(button).top + 50 + "px";
		menu.style.left = getOffset(button).left - 315 + "px";
	}
}
function toggle_reaction(button)
{
	if (emoji_panel.style.visibility == "visible")
	{
		emoji_panel.style.visibility = "hidden";
	}
	else
	{
		emoji_panel.style.visibility = "visible";
		emoji_panel.style.top =  getOffset(button).top - 50 + "px";
		emoji_panel.style.left = getOffset(button).left - 50 + "px";
	}
}
function placeLIke(emoji, id) {
	
	var emoji_src, btn_text;
	
	switch (emoji) {
		case "e-like":
			emoji_src = "./svg/like.svg";
			btn_text = "Like";
			break;
		case "e-love":
			emoji_src = "./svg/love.svg";
			btn_text = "Love";
			break;
		case "e-care":
			emoji_src = "./svg/care.svg";
			btn_text = "Care";
			break;
		case "e-haha":
			emoji_src = "./svg/haha.svg";
			btn_text = "haha";
			break;
		case "e-wow":
			emoji_src = "./svg/wow.svg";
			btn_text = "Wow";
			break;
		case "e-sad":
			emoji_src = "./svg/sad.svg";
			btn_text = "Sad";
			break;
		case "e-angry":
			emoji_src = "./svg/angry.svg";
			btn_text = "Angry";
			break;
		default:
			return;
	}
	
	qs("#fpost" + id).querySelector(".like-btn img").src = emoji_src;
	qs("#fpost" + id).querySelector(".like-btn img").style.width = "20px";
	qs("#fpost" + id).querySelector(".like-btn span").innerHTML = btn_text;
}
function makeComment(text, id) {

	qs("#fpost" + id).querySelector(".comment-box").innerHTML += 
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

	qs("#mother").style.display = "block";
	qs("#js-error").style.display = "none";
	
	opt_btns.forEach(btn => {
		btn.addEventListener("click", (e)=>{
			toggle_option(btn);
		});
	});
	comment_inputs.forEach(input => {
		input.addEventListener("change", (e)=>{
			makeComment(input.value, input.getAttribute("fpost"));
			input.value = "";
		});
	});
	comment_btns.forEach(button => {
		button.addEventListener("click", (e)=>{
			qs("#fpost" + button.getAttribute("fpost")).querySelector("input").focus();
		});
	});
	like_btns.forEach(button => {
		button.addEventListener("mouseover", (e)=>{
			hovered_btn_id = button.getAttribute("fpost");
			toggle_reaction(button);
		});
		button.addEventListener("mouseout", (e)=>{
			toggle_reaction(button);
		});
		button.addEventListener("click", (e)=>{
			placeLIke("e-like", hovered_btn_id);
		});
	});
	emojies.forEach(emoji => {
		emoji.addEventListener("click", (e)=>{
			placeLIke(emoji.getAttribute("id"), hovered_btn_id);
		});
	});
});