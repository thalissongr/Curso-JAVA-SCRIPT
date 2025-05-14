let num = [9,7,8,0,4]
console.log(num)
num.push(6)
num.sort()
console.log(num)
console.log(num.length)
var pos = num.indexOf(7)
if(pos == -1){
    console.log('O Valor não existe ')
}else(console.log(`O valor esta na posição ${pos}`))
