

function calculoimc() {
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let p = Number(peso.value)
    let a = Number(altura.value)

    let imc = p / (a * a)
    console.log('funcionou', a, p , imc)
}

