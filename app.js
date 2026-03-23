const form = document.forms.user;
form.addEventListener("submit", function(e) {
	e.preventDefault();
	const body = {}
	for (let i = 0; i < form.elements.length; i++) {
		let el = form.elements[i];
		if (el.name) {
			body[el.name] = el.value;
		}
	}
	document.writeln(body.card)
})



// document.getElementById('card-number').addEventListener('input', function (e) {
//     let target = e.target;
//     let position = target.selectionEnd;
//     let length = target.value.length;
    
    

// });


