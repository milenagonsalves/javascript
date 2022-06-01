let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resul = document.querySelector('div#resul')
let valores = []

function numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100)
    return true
} else {
    return false
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
        alert('tudo ok')
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }


function finalizar(){

}