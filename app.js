const form = document.forms.user;
let ad = document.querySelector('.test')
const body = {};
form.addEventListener("submit",  function(e) {
	e.preventDefault();
	 body  
	for (let i = 0; i < form.elements.length; i++) {
		let el = form.elements[i];
		if (el.name) {
			body[el.name] = el.value;
		}
	}
	console.log(document.getElementById('card-number1'));
	
	document.getElementById('card-number1').innerText = body.cardnumber
		document.getElementById('name1').innerText = body.name
				document.getElementById('number').innerText = body.age


	// ad.textContent = body.card-number
	// console.log(ad);
	console.log(body)
	
})


// document.getElementById('card-number').addEventListener('input', function (e) {
//     let target = e.target;
//     let position = target.selectionEnd;
//     let length = target.value.length;
    
    

// });


