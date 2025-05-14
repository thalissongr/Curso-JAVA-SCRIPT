var valor = [4,5,2,8,10]
valor.sort(function(a, b){return a-b})
//valor.sort()

/*
for(let pos = 0 ; pos < valor.length ; pos++){
    console.log(`posição ${pos} tem o valor ${valor[pos]}`)
}*/




for(let pos in valor){
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}