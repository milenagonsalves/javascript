let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resul = document.querySelector('div#resul')
let valores = []

function numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
    return true
} else {
    return false
}
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(numero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resul.innerHTML= ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

            for (let pos in valores){
                soma += valores[pos]
                if (valores[pos] > maior){
                maior = valores[pos]
                } if (valores[pos] < menor) {
                menor = valores[pos]
                }
            }
        media = soma / total
        resul.innerHTML = ''
        resul.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resul.innerHTML += `<p>O maior valor adicionado é ${maior}.</p>`
        resul.innerHTML += `<p>O menor valor adicionado é ${menor}.</p>`
        resul.innerHTML += `<p>A soma dos valores adicionados é ${soma}.</p>`
        resul.innerHTML += `<p>A media dos valores adicionados é ${media}.</p>`
    }
}