function getIp() {

 var xhr = new XMLHttpRequest();

 xhr.open('GET', 'https://api.ipify.org/?format=json', false);

 xhr.send();

 var respostaEmJson = JSON.parse(xhr.response);

 return respostaEmJson.ip;

}


console.log(getIp());