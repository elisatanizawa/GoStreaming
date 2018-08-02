// Initialize Firebase
var config = {
    apiKey: "AIzaSyArJR_L-sTGhth2ndXtXOAzSnrfy4OUpGI",
    authDomain: "gostreaming-45343.firebaseapp.com",
    databaseURL: "https://gostreaming-45343.firebaseio.com",
    projectId: "gostreaming-45343",
    storageBucket: "gostreaming-45343.appspot.com",
    messagingSenderId: "954966966965"
  };
  firebase.initializeApp(config);
  
  //reference messa collection
  var messagesRef = firebase.database().ref("messages");


document.getElementById("form-cadastro").addEventListener("submit", cadastroForm);

function cadastroForm(c){
	c.preventDefault();

	//Get values



	var nome = getInputVal("nome");
	var email = getInputVal("email");
	var porteEmpresa = getInputVal("porteEmpresa");
	var setorEmpresa = getInputVal("setorEmpresa");
	var depto = getInputVal("depto");
	var estado = getInputVal("estado4");
	var cidade = getInputVal("cidade4");
	var hora = getData();
	var ip = getIp();
	var tipo = "";
		if(getTipo(email)==true){
			tipo = "B2B";
		}else{
			tipo= "B2C";
	}
	

	if(validaNome(nome) || validaEmail(email)){
		alert('Nome incompleto ou E-mail Inválido');
	}else{
		//salvar dados
		alert('Obrigado pelo seu Cadastro!');
		saveDados(nome,email,porteEmpresa,setorEmpresa,depto,estado,cidade,hora,ip,tipo);

		//limpa form

		document.querySelector("#form-cadastro").reset();
	}
}


//funçao para pegar form values
function getInputVal(id){
	return document.getElementById(id).value;
}
//salvar dados no firebase

function saveDados(nome,email,porteEmpresa,setorEmpresa,depto,estado,cidade,hora,ip,tipo){
	var newDados = messagesRef.push();


	newDados.set({
		nome: nome,
		email: email,
		porteEmpresa: porteEmpresa,
		setorEmpresa: setorEmpresa,
		depto: depto,
		estado: estado,
		cidade: cidade,
		hora: getData(),
		ip: getIp(),
		tipo: tipo


	});
}

