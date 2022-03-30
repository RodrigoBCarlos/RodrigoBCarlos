const form = document.querySelector('.form'); //Seleciona Formulario
//reaponsavel em selecionar o formulario
				
form.addEventListener('submit', function (evento){//para o envio do formulario
	evento.preventDefault();
	const inputPeso = evento.target.querySelector('.peso');
	const inputAltura = evento.target.querySelector('.altura');
	
	const peso = Number(inputPeso.value);
	const altura = Number(inputAltura.value);

	if (!peso) {//verifica se a inforação é verdaderira
		setDocumento('Peso inválido', false);
		return;
	}

	if (!altura) {
		setDocumento('Altura inválida', false);
		return;
	}
	
	const imc = getImc(peso, altura);
	const nivelImc = getNivelImc(imc);
	
	const msg = `Seu IMC é ${imc} (${nivelImc})`;
	setDocumento(msg, true);
});



function getNivelImc (imc) {
	const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidademórbida Grau 1', 'Obesidademórbida Grau 2', 'Obesidademórbida Grau 3'];//arrei

	if(imc >= 39.9) return nivel[5]; //a função não precisa de {} quando é pequena
	if (imc >= 34.9) return nivel[4]; 
	if (imc >= 29.9) return nivel[3];
	if (imc >= 24.9) return nivel[2];
	if (imc <= 18.9) return nivel[1];
	if (imc < 18.5) return nivel[0];
}
function getImc(peso, altura){
	const imc = peso/altura**2;
	return imc.toFixed(2);//toFixef(2) retorna somente duas casas decimeis
}

function criaP() {
	const p = document.createElement('p');//cria um paragrafo
	return p;
}

function setDocumento(msg, isValid) {
	const resultados = document.querySelector('#resultados');
	resultados.innerHTML = '';

	const p = criaP();

	if (isValid) {
		p.classList.add('paragrafo-resultado');//Cria uma class
	} else {
		p.classList.add('bad');//Cria uma class
	}

	p.innerHTML = msg; // insere o p dentro do html 
	resultados.appendChild(p); //Insere um elemento 
};





								/*  
								const peso = form.querySelector('.peso');
								const altura = form.querySelector('.altura');
								const resultado = peso.value/ (altura.value*altura.value);
								if((typeof resultado) !== number){
												alert('Tipo de dados inseridos errados!')
											 }
								
								alert(resultado);*/

