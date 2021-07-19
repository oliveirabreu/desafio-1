let form = document.getElementById("contato");
let msg  = document.getElementById("msg");

	form.addEventListener("submit", function(e){

		e.preventDefault();

		let email = document.getElementById("email");

		if(email.value !=""){

			localStorage.setItem('email', email.value);

			this.style.display = "none";
			msg.style.display = "block";

			setTimeout(function(){
				document.location.reload(true);
			},5000);

		}else{

			alert("Você precisa preencher o campo e-mail.");
			email.focus();
		}

	});