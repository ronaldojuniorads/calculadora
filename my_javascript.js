function caucular(tipo, valor){/*nesse caso so usei o parametro valor*/
    /*limpar o value do painel*/ 
    if (valor === "c"){
        document.getElementById('painel_interno').value = "";
    }
    /*transformar o value do painel em uma operacao aritimetica e atribuir o resultado dessa operacao ao value do painel*/
    else if(valor === "="){
        var cauculo = eval(document.getElementById('painel_interno').value);
        document.getElementById('painel_interno').value = cauculo;
    }
    /* caso o valor do botao que o usuario clicar nao seja "c" nem "=", o restos dos valores serao atribuidos ao value do painel*/
    else{
        document.getElementById('painel_interno').value += valor;
    }
}