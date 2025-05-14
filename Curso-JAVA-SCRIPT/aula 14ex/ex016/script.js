function Contar(){
    var inicio = document.getElementById('I')
    var fim = document.getElementById('F')
    var passo = document.getElementById('P')
    var res = document.getElementById('msg')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO]Impossivel contar')
    }else{
        res.innerHTML= "Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let c = i; c<= f; c += p)
            res.innerHTML += ` ${c} \u{1F449}`
        }
     else{
        //Contagem regressiva
        for(let c = i ; c>= f;c -=p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
     }   
        res.innerHTML += `\u{1F3C1}`
    }
}
