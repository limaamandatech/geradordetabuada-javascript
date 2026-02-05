function gerar (){
    let res = document.getElementById('seltab')
    let quasenumero = document.getElementById('testenu')
    let numero = Number(quasenumero.value)
    if(quasenumero.value.length == 0 ){
        window.alert('Por favor, digite um número')
    }else {
        res.innerHTML+''
        for(i = 0; i <= 10; i ++){
            let item = document.createElement('option')
            item.text = `${numero} x${i} = ${numero*i}`
            item.value=`tab ${i}`
            res.appendChild(item)
        }
    }
}