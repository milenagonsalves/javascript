let num = [2, 5, 8, 3, 7]
// Ao inves de fazer varios console.log do mesmo 
/*for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}
Mais simples porem tem um modo mais simples */

for (let pos in num) {
    console.log(num[pos])
}