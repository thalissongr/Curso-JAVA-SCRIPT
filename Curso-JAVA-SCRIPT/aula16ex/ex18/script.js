let NUM = []
var resultado = document.querySelector('div#res')

function adicionar(){
    resultado.innerHTML=''
    var res = document.getElementById('dados')
    let N = document.getElementById('Num')
    let numero = Number(N.value)
 
    if(numero.length === 0){
        window.alert('[ERRO]Por favor digite um numero!!!')
    }else if(numero < 0 || numero > 100){
        window.alert('Digite um numero de 0 a 100')
    }
    else {
        if(NUM.includes(numero)){
                window.alert('[ERRO] Este número já foi adicionado!')
            }
        
        else{
        NUM.push(numero)
     let item = document.createElement('option')
     item.text =`voce adicionou ${N.value}`
     item.value = `res`
    res.appendChild(item)
    

    }


    }
    N.value = '' // para limpa a barra que adiciona o numero
    N.focus() // para focar na barra de adicionar 
}

function finalizar(){
    let pos = NUM.length
    let maior = Math.max(...NUM)
    let menor = Math.min(...NUM)
    let soma = NUM.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    }, 0);
    const média = soma/pos
    if(NUM.length === 0){
       window.alert('Por favor ,insira os dados')

    }else{

        resultado.innerHTML=`<br>Ao todo,temos ${pos} números cadastrados.<br><br>
    O maior número é ${maior}<br><br>
    o menor número é ${menor}<br><br>
    A soma de todos os valores é ${soma}<br><br>
    a média dos valores é ${média.toFixed(2)}
    `
    }
    
    
    
}