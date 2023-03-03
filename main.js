let form = document.querySelector("form");
let name = document.getElementById("name");
let post = document.getElementById("post");
form.addEventListener("submit",function(e){
	e.preventDefault();
	readPost();
});
let data = {};
function readPost(){
	data['text']=name.value;
	createPost();
}
function createPost(){
	post.innerHTML =`<div class="rightin">
	<p class="col-lg-6">${data.text}</p>
	<span class="option">
		<iconify-icon onclick="edit(this)" icon="material-symbols:edit-square-outline-rounded"></iconify-icon>
		<iconify-icon onclick="dlt(this)" icon="mdi:delete"></iconify-icon>
	</span>
	</div>`
	name.value = " ";
}
function edit(e){
	name.value=e.parentElement.previousElementSibling.innerHTML;
	e.parentElement.parentElement.remove();
}
function dlt(e){
	e.parentElement.parentElement.remove();
}