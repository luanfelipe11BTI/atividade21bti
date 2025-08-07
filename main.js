function soma(event){
    event.preventDefault()
    const numero1 = document.querySelector("#numero").valueAsNumber
    const numero2 = document.querySelector("#numero2").valueAsNumber

    const soma = numero1 + numero2
    const paragrafo = document.querySelector("#resultado")
    paragrafo.innerHTML = `Soma: ${soma}`

}

