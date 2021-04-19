
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://betteranime.net/");
    //window.location.href = "https://betteranime.net/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página Carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade")
validaIdade(idade)
console.log(validar)
*/


//alert(soma(5 ,10));


/*
var d = new Date();
alert(d.getDate())
*/


/*
var count
for(count=0; count<=5; count++){
    console.log(count)
}
*/


/*var count = 0
while(count = 5){
    console.log(count)
    count = count + 1
}
*/



/*
var idade = prompt("Qual sua idade?")
if(idade >= 18){
    alert("MAIOR DE IDADE");

}else{
    alert("MENOR DE IDADE");
}
*/




/* 
var fruta = [{nome: " maça ", cor: " vermelha "}, {nome: " uva ", cor: " roxa "}]
console.log(fruta)
alert(fruta[1].nome) */


/* var fruta = {nome: " maça ", cor: " vermelha "}
console.log(fruta.nome)
alert(fruta.cor) 
*/



//var lista = ["maçã", "pêra", "laranja"]
//lista.push("uva")
//lista.pop()
//console.log(lista)
//console.log(lista.length) Exibe quantidade do elementos na lista
//console.log(lista.reverse()) Inverte a ordem da lista
//console.log(lista.toString) 
//console.log(lista.join(" - "))



/*
var nome = "Diogo Sucupira";
var n1 = 20;
var n2 = 10;
var frase = "Japão é o melhor time do mundo"
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
console.log(frase.replace("Japão", "Cazaquistão"));
console.log(frase.replace("Japão", "Brasil").toUpperCase());
*/