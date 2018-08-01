$(document).ready(function() {
$('#addLead').click(function(e) {
// Initializing Variables With Form Element Values
var nome = $('#nome').val();
var email = $('#email').val();
// Initializing Variables With Regular Expressions
var nome_regex = /^[a-zA-Z]+$/;
var email_regex =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// To Check Empty Form Fields.
if (nome.length == 0 || email.length == 0) {
$('#geral').text("* Todos Campos São Obrigatórios! *"); // This Segment Displays The Validation Rule For All Fields
$("#nome").focus();
return false;
}
// Validating Name Field.
else if (!nome.match(nome_regex) || nome.length == 0) {
$('#p1').text("* Somente letras são aceitas *"); // This Segment Displays The Validation Rule For Name
$("#nome").focus();
return false;
}
// Validando e-email
else if (!email.match(email_regex) || email.length == 0) {
$('#p3').text("* Por favor, coloque um endereço valido de e-mail *"); // This Segment Displays The Validation Rule For Email
$("#email").focus();
return false;
} else {
$('#geral').text("");
$('#p1').text("");
$('#p2').text("");
alert("Formulário Entregue com Sucesso!");

return true;
}
});
});