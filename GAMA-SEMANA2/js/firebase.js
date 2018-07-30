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
	var hora = getData();
	var ip = getIp();

	//salvar dados
	
	saveDados(nome,email,hora,ip);

	//limpa form

	document.querySelector("#form-cadastro").reset();
}



//funçao para pegar form values
function getInputVal(id){
	return document.getElementById(id).value;
}
//salvar dados no firebase

function saveDados(nome,email,hora,ip){
	var newDados = messagesRef.push();
	newDados.set({
		nome: nome,
		email: email,
		hora: getData(),
		ip: getIp()


	});
}