function validaNome(campo) {
	/* Regex */
    var regex = /^[a-zA-ZáÁéÉ][a-zA-ZáÁéÉ]+([ ][a-zA-ZáÁéÉ]+)*([ ][a-zA-ZáÁéÉ][a-zA-ZáÁéÉ]+)+([ ][a-zA-ZáÁéÉ]+)*$/;
    /* Verificando se o valor do nome passa pela regex e verificando se esta vazio    */
    if(regex.test(campo) && !(campo == '')) {
        return false;
    } else { 
    	return true; 
    }
 }

 /* validando email */
 function validaEmail(campo) {
 	var regex =  	
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 	var dominio = campo.substring(campo.indexOf("@"), campo.indexOf("."));
	if (campo.match(regex) && !(campo == '')){
		return false;
	}else{
		return true;
	}
}
function getTipo(campo){
	var dominio = campo.substring(campo.indexOf("@"), campo.indexOf("."));
 	if (dominio == '@gmail' || dominio == '@outlook' || dominio == '@yahoo' || dominio == '@hotmail'|| dominio == '@globo'|| dominio == '@uol'|| dominio == '@bol'){
 		return false;
 	}else{
 		return true;
 	}

}