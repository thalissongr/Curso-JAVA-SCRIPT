var idade = 66
    console.log (`Sua idade é ${idade}`)
if(idade < 16 ){
    console.log('Você Não vota')
}else if (idade < 18 || idade > 65){
    console.log('Seu voto é opicional')
}else{
    console.log('Seu voto é obsrigatorio')
}