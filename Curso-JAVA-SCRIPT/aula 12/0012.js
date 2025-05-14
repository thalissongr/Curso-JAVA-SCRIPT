var agora = new Date()
var H = agora.getHours()
var M = agora.getMinutes()
    console.log(`São ${H} Horas e ${M} Minutos`)
if (H < 6) {
    console.log('boa madrugada')
}else if(H < 12){
    console.log('Good morning')
}else if(H <= 18){
    console.log('God arfetoon')
}else{
    console.log('Good night')
}