var mensagem = "Vamos calcular a média de 5 números" 
alert(mensagem);

var num1 = parseInt(prompt("Digite o número ",""));
var num2 = parseInt(prompt("Digite o número 2/5 ",""));
var num3 = parseInt(prompt("Digite o número 3/5 ",""));
var num4 = parseInt(prompt("Digite o número 4/5 ",""));
var num5 = parseInt(prompt("Digite o número 5/5 ",""));

var z= parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5);


document.write("Seu número 1 foi: ", num1, '<br>')
document.write("Seu número 2 foi: ", num2, '<br>')
document.write("Seu número 3 foi: ", num3, '<br>')
document.write("Seu número 4 foi: ", num4, '<br>')
document.write("Seu número 5 foi: ", num5, '<br><br>')



document.write("A média dos número é: "+ z/5, '<br>');