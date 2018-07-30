 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBts4x0s8sF7Mrae6mi-riVrhxZdBbCyrw",
    authDomain: "gostreaming-gama.firebaseapp.com",
    databaseURL: "https://gostreaming-gama.firebaseio.com",
    projectId: "gostreaming-gama",
    storageBucket: "gostreaming-gama.appspot.com",
    messagingSenderId: "498080195977"
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