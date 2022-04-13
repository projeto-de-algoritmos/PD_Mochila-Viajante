export default function knapsack(){

    var W = 11 // peso maximo da mochila
    var qtd_itens = 5 // quantidade total de itens

    var valores = [1,6,18,22,28]
    var pesos = [1,2,5,6,7]

    var w = 0; //capacidade gradual
    var item = 1 //numero do item que estamos

    var memoization = [[]]; //matriz de memorização [PROGRAMAÇÃO DINÂMICA]
    
    for (w = 0; w <= W; w++){
        memoization[w] = [0];
        for (item = 1; item <= qtd_itens; item++){
            if (w >= pesos[item]){
                memoization[w][item] = Math.max(memoization[w][item-1], memoization[w - pesos[item]][item-1] + valores[item]);
            } else {
                memoization[w][item] = Math.max(memoization[w][item-1], 0);
            }
        }
    }

    console.log(memoization[W][qtd_itens])
}