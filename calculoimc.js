const resultado_imc = document.getElementById('res_IMC')
const resultado_clas = document.getElementById('res_classificacao')

function calculoimc() {
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let p = Number(peso.value)
    let a = Number(altura.value)

    let imc = p / (a * a)
    console.log('funcionou', a, p , imc)
    resultado_imc.innerHTML = (`O IMC é ${imc}.`)

    if ( imc < 17 ){
        resultado_clas.innerHTML= (`Muito abaixo do peso`)
    }
    else if (imc < 18.5){
        resultado_clas.innerHTML= (`Abaixo do peso`)
    }
    else if ( imc < 25){
        resultado_clas.innerHTML= (`Peso normal`)
    }
    else if (imc < 30){
        resultado_clas.innerHTML= (`Acima do peso`)
    }
    else if (imc < 35){
        resultado_clas.innerHTML= (`Obesidade grau 1`)
    }
    else if( imc < 40){
        resultado_clas.innerHTML= (`Obesidade grau 2 `)
    }
    else{
        resultado_clas.innerHTML= (`Obesidade grau 3 `)
    }

}

