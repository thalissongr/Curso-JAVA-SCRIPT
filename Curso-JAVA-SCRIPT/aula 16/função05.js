//RECURSIVIDADE
function fatorial(n){
    if (n ==1 ){
        return 'O fatorial de 1 é ele mesmo 1! = 1'
    }else{
        return n * fatorial(n-1)

    }
}

console.log(fatorial(1))