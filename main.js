// 1. Racha da conta.
// Leia o valor da conta,
// o número de pessoas
// e se vai ter os 10% de serviço (s ou n).
// Exiba quanto cada pessoa paga.

// let conta = parseFloat(prompt("Qual é o valor da conta?")).toFixed(2)

// let pessoas = Number(prompt("Quantas pessoas são?"))

// let serviço = prompt("Será cobrado 10% de serviço? (s ou n)")

// if (serviço === "s") {
   
//     let conta_serviço = 1.1 * conta

//     let valor_final = (conta_serviço / pessoas).toFixed(2)

//     console.log("A conta total com o acressimo de 10% distribuido entre todos resulta em R$ " + valor_final)
   
// } else {
   
//     console.log("Não há 10% de serviço")
   
//     let final_valor = (conta / pessoas).toFixed(2)
   
//     console.log("A conta total sem o acressimo de 10% distribuido entre todos resulta em R$ " + final_valor)

// }

//___________________________________________________________________________________________________________________________________

// 2. Bilhete Único.
// Leia o saldo do cartão.
// A tarifa é R$ 5,00.
// Exiba quantas viagens o saldo cobre e quanto sobra.

// let saldo = parseFloat(prompt("Qual o saldo do seu cartão?"))

// let tarifa = 5.0

// viagem = saldo / tarifa

// viagens = Math.floor(viagem)

// sobra = (viagem - viagens).toFixed(2)

// console.log("Você consegue realizar " + viagens + " viagens com seu saldo atual\nVocê tem R$ 9" + sobra + " sobrando no seu cartão")

//___________________________________________________________________________________________________________________________________


// 4. Troco do caixa.
// Leia um valor inteiro de troco
// e exiba a menor quantidade de notas de 100, 50, 20, 10, 5, 2 e moedas de 1 para formar esse valor.
// Use Math.floor() e %.

//___________________________________________________________________________________________________________________________________

// 3. Tempo de download.
// Leia o tamanho de um arquivo em GB e a velocidade da internet em Mbps.
// Exiba o tempo estimado em minutos e segundos. Dica: 1 GB = 8192 Mb.

//___________________________________________________________________________________________________________________________________

// 5. Custo da viagem.
// Leia a distância até o destino em km,
// o consumo do carro em km/l e o preço do litro.
// Exiba o custo de ida e volta e o custo por km.

// let destino = Number(prompt("Qual a distância até o destino? (Em km)"))

// let km_l = Number(prompt("Quantos kilometros o carro percorre com 1 litro?"))

// let litro = parseFloat(prompt("Qual o preço do litro?")).toFixed(2)

// let custo = destino * litro

// let ida_volta = custo * 2

// let litro_v = km_l / litro

// console.log("O custo de ida será de R$ " + custo + ", sendo tambem o custo de volta\nO custo total será de R$ " + ida_volta + "\n O custo por km é " + litro_v)

//___________________________________________________________________________________________________________________________________

// 6. Etanol ou gasolina?
// Leia o preço dos dois combustíveis.
// Se o etanol custar até 70% do preço da gasolina, ele compensa.
// Exiba qual abastecer e a diferença percentual.

// let etanol = parseFloat(prompt("Qual o preço do etanol?")).toFixed(2)

// let gasolina = parseFloat(prompt("Qual o preço da gasolina?")).toFixed(2)

// let percentual

// let gasolina_70 = (gasolina * 0.7).toFixed

// if (etanol <= gasolina_70) {
    
//     console.log("O etanol está mais barato que a gasolina")
    
//     percentual = etanol / gasolina * 100
    
//     console.log("Compensa usar etanol para abastecer, o diferença percentual entre eles é de " + percentual + " %")
    
// } else if (etanol > gasolina_70) {
    
//     console.log("O etanol está mais caro que a gasolina")
    
//     percentual = gasolina / etanol * 100

//     console.log("Compensa usar gasolina para abastecer, o diferença percentual entre eles é de " + percentual)

// }

//___________________________________________________________________________________________________________________________________

// **7. Frete da loja virtual.**
//  Leia o valor da compra e o peso do pacote em kg.
// - Compra acima de R$ 250: frete grátis
// - Até 1 kg: R$ 15
// - Até 5 kg: R$ 25
// - Acima de 5 kg: R$ 25 + R$ 4 por kg excedente

let valor_peso

let valor = parseFloat(prompt("Qual o valor da compra?")).toFixed(2)

let peso = Number(prompt("Qual o peso do pacote? (Em kg)"))

if (valor > 250) {
    
    console.log("Devido ao valor de vossa compra ser acima de R$ 250\nO frete seirá gratuito")    
    
    console.log("Valor final da compra: R$ " + valor + "\nValor Final de frete: Gratuito")    

} else if (valor <= 250) {

    console.log("Devido ao valor de vossa compra ser abaixo ou igual a R$ 250\nSerá cobrado o valor do frete")

    if (peso <= 1) {
    
        valor_peso = 15.0

        console.log("O seu produto ficará em R$ " + valor + " e o frete custará R$ " + valor_peso)
        
    } else if (peso > 1 && peso <= 5) {
        
        valor_peso = 25.0
        
        console.log("O seu produto ficará em R$ " + valor + " e o frete custará R$ " + valor_peso)

    } else if (peso > 5) {
        
        valor_peso = (25.0 + (4 * (peso - 5))).toFixed(2)
        
        console.log("O seu produto ficará em R$ " + valor + " e o frete custará R$ " + valor_peso)

    }

}


//___________________________________________________________________________________________________________________________________


