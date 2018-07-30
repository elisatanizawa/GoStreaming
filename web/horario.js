function getData(data = new Date()){
	var hora = data.getHours();
	var minuto = data.getMinutes();
	var segundos = data.getSeconds();
	
	var dia = data.getDate();
	var mes = data.getMonth()+1;
	var ano = data.getFullYear();
	if(dia.toString().length == 1) dia = "0"+ dia;
	if(mes.toString().length == 1) mes = "0"+ mes;
	if(hora.toString().length == 1) hora = "0"+ hora;
	if(minuto.toString().length == 1) minuto = "0"+ minuto;
	if(segundos.toString().length == 1) segundos = "0"+ segundos;
	return ano +"-"+mes+"-"+ dia + " " + hora +":"+ minuto + ":" + segundos;
}
console.log(getData());
