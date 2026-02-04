let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
console.log(numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function mostrarMensagemInicial(){
exibirTextoNaTela('h1', 'Bem vindo ao Numero Secreto');
exibirTextoNaTela('p', 'digite um numero de 1 a 10');

}

mostrarMensagemInicial();

function verificarChute(){
   
   
    let chute = document.querySelector('input').value;
    
     
    if(chute == numeroSecreto){
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
     exibirTextoNaTela('h1', 'ACERTOU!');
    exibirTextoNaTela('p', `Você acertou o Numero Secreto em ${tentativas} ${palavraTentativas}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

}
else{
    if(chute > numeroSecreto) {
        exibirTextoNaTela('p', 'o Número Secreto é menor!');

} else {
        exibirTextoNaTela('p', 'o Número Secreto é maior');
// colocanto tentativas +1
        
        }
        tentativas ++
        
        limparCodigo();
    }
}

 
function gerarNumero(){
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCodigo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    
numeroSecreto = gerarNumero();
console.log(numeroSecreto);

limparCodigo();
tentativas = 1

mostrarMensagemInicial();
    
document.getElementById('reiniciar').setAttribute('disabled', true);
}

