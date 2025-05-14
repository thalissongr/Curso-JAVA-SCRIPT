    function calcular(){
        var Num = document.getElementById('NUM')
        var tab = document.getElementById('selecT')
        
        if(Num.value.length == 0){
            window.alert('[ERRO]Digite um numero!!!')
        }
        else{
            let n =Number(Num.value)
            let c = 1
            tab.innerHTML = ''
            while (c <= 10){
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                item.value = `tab${c}`
                tab.appendChild(item)
                c++
            }
            

           }
           
                    
           
            }
    