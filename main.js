// Lista de Exercícios: JavaScript Fundamentos

//___________________________________________________________________________________________________________________________________

// Bloco 1: Variáveis, operadores e console =========================================================================================

//___________________________________________________________________________________________________________________________________

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

// let troco = parseFloat(prompt("Qual o valor do troco?"))

//___________________________________________________________________________________________________________________________________

// 3. Tempo de download.
// Leia o tamanho de um arquivo em GB e a velocidade da internet em Mbps.
// Exiba o tempo estimado em minutos e segundos.
// Dica: 1 GB = 8192 Mb.

// let temp_downloud

// let em_min

// let em_min2

// let em_seg

// let tamanho = Number(prompt("Qual o tamanho do arquivo em GB? (Exemplo: 32)"))

// let velo_inter = parseFloat(prompt("Qual a velocidade da sua internet em Mbps? (Exemplo: 47)"))

//     temp_downloud = ((tamanho * 8000) / velo_inter)

//     em_min = (temp_downloud / 60)
   
//     em_min2 = Math.floor(em_min)
   
//     em_seg = Math.floor((em_min - em_min2) * 100)

//     console.log("O tempo do downloud será de " + em_min2 + " minutos e " + em_seg + " segundos")

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

// Bloco 2: Comparações, if, else e else if =========================================================================================

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

// let valor_peso

// let valor = parseFloat(prompt("Qual o valor da compra?")).toFixed(2)

// let peso = Number(prompt("Qual o peso do pacote? (Em kg)"))

// if (valor > 250) {
   
//     console.log("Devido ao valor de vossa compra ser acima de R$ 250\nO frete seirá gratuito")    
   
//     console.log("Valor final da compra: R$ " + valor + "\nValor Final de frete: Gratuito")    

// } else if (valor <= 250) {

//     console.log("Devido ao valor de vossa compra ser abaixo ou igual a R$ 250\nSerá cobrado o valor do frete")

//     if (peso <= 1) {
   
//         valor_peso = 15.0

//         console.log("O seu produto ficará em R$ " + valor + " e o frete custará R$ " + valor_peso)
       
//     } else if (peso > 1 && peso <= 5) {
       
//         valor_peso = 25.0
       
//         console.log("O seu produto ficará em R$ " + valor + " e o frete custará R$ " + valor_peso)

//     } else if (peso > 5) {
       
//         valor_peso = (25.0 + (4 * (peso - 5))).toFixed(2)
       
//         console.log("O seu produto ficará em R$ " + valor + " e o frete custará R$ " + valor_peso)

//     }

// }

//___________________________________________________________________________________________________________________________________

// **8. Bilheteria do cinema.
// ** Ingresso de R$ 40.
// Leia idade, se é estudante (`s`/`n`) e o dia da semana.
//  Tem meia quem tem menos de 12 anos, 60 ou mais, ou é estudante.
//  Às terças, todos pagam meia.
//  Exiba o valor final.

// let meia

// let Ingresso = (40.0).toFixed(2)

// let idade = Number(prompt("Qual é a sua idade?"))

// let estudante = prompt("Você é estudante? (s/n)")

// let dia_semana = prompt("Que dia da semana é hoje? (Exemplo: Segunda)")

// if (idade <= 12 || idade >= 60) {
   
//     meia = (Ingresso / 2).toFixed(2)
//     console.log("Você tem direito a meia por idade, então o ingresso fica R$ " + meia + " no total")

// } else if (estudante == "s") {
   
//     meia = (Ingresso / 2).toFixed(2)
//     console.log("Você tem direito a meia por ser estudante, então o ingresso fica R$ " + meia + " no total")
   
// } else if (dia_semana === "Terça") {
   
//     meia = (Ingresso / 2).toFixed(2)
//     console.log("Você tem direito a meia por hoje ser terça-feira, então o ingresso fica R$ " + meia + " no total")

// } else {

//     console.log("Você não tem acesso a meia, seu valor é completo e se mantem em R$ " + Ingresso)

// }


//___________________________________________________________________________________________________________________________________

// **9. Saudação pelo horário.
// ** Leia hora e minuto.
//  Valide se o horário existe.
//  Se existir, exiba `Boa madrugada`, `Bom dia`, `Boa tarde` ou `Boa noite`.

// let hora = parseFloat(prompt("Qual é a hora? (Exemplo: 13)"))

// let minuto = parseFloat(prompt("Quais são os minutos? (Exemplo: 30)"))

// if (hora >= 0 || hora <= 23 && minuto >= 0 || minuto <= 59) {

//     console.log("Horario válido")    

//         if (hora >= 0 || hora <= 5 && minuto >= 0 || minuto <= 59) {
       
//             console.log("Boa madrugada!")
           
//         } else if (hora >= 6 || hora <= 11 && minuto >= 0 || minuto <= 59) {
           
//             console.log("Bom dia!")
           
//         } else if (hora >= 12 || hora <= 17 && minuto >= 0 || minuto <= 59) {
           
//             console.log("Boa tarde!")
                       
//         } else if (hora >= 18 || hora <= 23 && minuto >= 0 || minuto <= 59) {
           
//             console.log("Boa noite!")
           
//         }

// } else {
 
//     console.log("Algum valor que fota inserido é inválido\nTente novamente")

// }

//___________________________________________________________________________________________________________________________________

// **10. Margem consignável.
// ** Leia o salário e o valor da parcela de um empréstimo.
//  A parcela pode comprometer no máximo 30% do salário.
//  Exiba `Aprovado` ou `Negado` e, se negado, qual seria a parcela máxima permitida.

// let salario = (parseFloat(prompt("Qual seu salário?"))).toFixed(2)

// let emprestimo = parseFloat(prompt("Qual o valor da parcela do empréstimo?"))

// let parcela = (0.3 * salario)

//     if (parcela >= emprestimo) {
       
//         console.log("Seu emprestimo foi aprovado por estar dentro de seu limite!")

//     } else if (parcela < emprestimo) {
       
//         console.log("Seu emprestimo foi negado, sua parcela máxima só vai até R$ " + parcela)
       
//     }

//___________________________________________________________________________________________________________________________________

// **11. Qual plano de celular?**
// - Plano A: R$ 55 fixo, até 20 GB
// - Plano B: R$ 30 com 5 GB, mais R$ 3 por GB extra

// Leia quantos GB a pessoa usa por mês e informe o plano mais barato e a economia.
// Se usar mais de 20 GB, o plano A não serve.

// let gb = Number(prompt("Quantos GB você usa por mês?"))

//     if (gb <= 20) {
       
//         console.log("O melhor plano para você é o A, você tem R$ 25,00 para apagar á mais que o plano B\nNo entanto como o plano é fixo, não paga mais")
       
//     } else if (gb > 20) {
       
//         console.log("O melhor plano para você é o B, tendo R$ 25,00 de econômia em constraste com o plano A\nNo entanto com o uso de pelo menos 16 GB, a conta sai mais caro que o A")

//     }

//___________________________________________________________________________________________________________________________________

// **12. Prioridade do chamado.**
// Leia a urgência (1 a 3) e o impacto (1 a 3) de um chamado de suporte.
// Classifique:

// - urgência 3 e impacto 3: `P1 Crítico`
// - soma 5: `P2 Alto`
// - soma 3 ou 4: `P3 Médio`
// - demais: `P4 Baixo`

//___________________________________________________________________________________________________________________________________

// **13. Nota com bônus de presença.**
// Leia duas notas e a frequência em %.
// Com frequência abaixo de 75%, reprova direto.
// Com frequência acima de 90%, a média ganha +0,5 (sem passar de 10).
// Depois aplique: 6 ou mais aprovado, abaixo disso reprovado.

// let nota_one = (Number(prompt("Digite a sua primeira nota (De 0 á 10): ")))

// let nota_two = (Number(prompt("Digite a sua primeira nota (De 0 á 10): ")))

// let frequência = parseFloat(prompt("Digite a frequência (Em porcentagem): "))

//     let média = (nota_one + nota_two) / 2

//     if (frequência < 75) {
        
//         console.log("Você foi reprovado")

//     } else if (frequência > 74 && frequência < 90) {
    
//         if (média >= 6.0) {
        
//          console.log("Parabéns, Você passou!")

//          } else if (média < 6.0) {
        
//          console.log("Você está reprovado")

//         }

//     } else if (frequência >= 90) {
        
//         if (média === 10.0) {
            
//             console.log("Parabéns, Você passou!")
            
//         } else if (média < 10.0) {

//             let média_final = média + 0.5

//             let sobra = média_final - 10.0
            
//             let resultado = média_final - sobra
        
//                 if (média_final >= 6.0) {
        
//                  console.log("Parabéns, Você passou!")

//                  } else {
        
//                  console.log("Você está reprovado")

//                 }
//         }

//     }

//___________________________________________________________________________________________________________________________________

// **14. Entrada à prova de erro.**
// Leia um valor com `prompt()` e trate cada caso:

// 1 - usuário clicou em Cancelar (`null`): `Operação cancelada`
// 2 - campo vazio (`""`): ``Operação cancelada``
// 3 - não é número: `Valor inválido`
// 4 - número: exiba o dobro dele

// Teste `==` e `===` com `null` e escreva num comentário o que mudou.

// let valor = Number(prompt("Digite o valor: "))

//     if (valor == null) {
       
//        console.log("Operação cancelada")
//        // com == aparece certinho o "Operação cancelada"
//     }
    
//     // else if (valor === null) {
        
//     // console.log("Operação cancelada")
//        // com === aparece certinho o "Operação cancelada" tambem
   
//     // }
   
//     else if (valor = "") {

//         console.log("Operação cancelada")
//         //  Não aparece nada

//     } else if (valor = NaN) {
       
//         console.log("Valor inválido")
//         //  Não aparece a mensagem, só aparece um NaN

//     } else if (valor = Number) {
       
//        let resultado = Number * 2

//         console.log("Número dobrado: " + resultado)
//         // Aparece a mensagem, mas no lugar do número dobrado aparece um NaN

//     }
//___________________________________________________________________________________________________________________________________

// Bloco 3: switch ==================================================================================================================

//___________________________________________________________________________________________________________________________________

// **15. Rodízio de São Paulo.**
// Leia o final da placa, o dia da semana e a hora.
// Informe se o carro pode circular.

// - Segunda: 1 e 2 | Terça: 3 e 4 | Quarta: 5 e 6 | Quinta: 7 e 8 | Sexta: 9 e 0
// - Horários restritos: 7h às 10h e 17h às 20h

// let final_placa = prompt("Qual o final da placa do seu carro?")

// let dia_semana = Number(prompt("Qual o dia da semana? (De 0 á 9)"))

// let hora = Number(prompt("Que horas são? (Exemplo: 11)"))

//     switch (dia_semana) {

//         case 1:
//         case 2:
//             console.log("Segunda-Feira")
//             break
            
//         case 3:
//         case 4:
//             console.log("Terça-Feira")
//             break
        
//         case 5:
//         case 6:
//             console.log("Quarta-Feira")
//             break

//         case 7:
//         case 8:
//             console.log("Quinta-Feira")
//             break

//         case 9:
//         case 0:
//             console.log("Sexta-Feira")
//             break
    
//         default:
//             console.log("Dia inválido (ou fim de semana)")
//             break
            
//     }

//     switch (hora) {

//         case 7:
//         case 8:
//         case 9:
//         case 10:
//         case 17:
//         case 18:
//         case 19:
//         case 20:
//             console.log("Está detro dos horários estritos")
//             break 
            
//             default:
//             console.log("Está fora dos horários estritos")
//             break
            
//     }

//         if (dia_semana >= 0 && dia_semana <= 9) {
         
//             if (hora >= 7 && hora <= 10 || hora >= 17 && hora <= 20) {

//                 console.log("O carro pode circular")
                
//             } else {
                
//                 console.log("O carro não pode circular")

//             }

//         } else {

//             console.log("O carro não pode circular")
            
//         }

//___________________________________________________________________________________________________________________________________

// **16. Status HTTP.**
// Leia um código e exiba o significado: 200, 201, 301, 400, 401, 403, 404, 500.
//  No `default`, use `if` para dizer só a categoria (2xx sucesso, 4xx erro do cliente, 5xx erro do servidor).

//___________________________________________________________________________________________________________________________________

// **17. Rastreio do delivery.**
// Leia a letra do status:
// `P` Pendente,
// `A` Aceito,
// `S` Saiu para entrega,
// `E` Entregue,
// `C` Cancelado.
// Exiba o status e se o pedido ainda pode ser cancelado (só em `P` e `A`).
//  Use cases agrupados.

// let estatus = prompt("Qual a letra de entrega do seu Delivery? (P,A,S,E,C)")

//     switch (estatus) {
//         case "P":
//             console.log("Pendente")
//             break
//         case "A":
//             console.log("Aceito")
//             break
//         case "S":
//             console.log("Saiu para entrega")
//             break
//         case "E":
//             console.log("Entregue")
//             break
//         case "C":
//             console.log("Cancelado")
//             break
//         default:
//             console.log("Status inválido")
//             break
//     }

//     switch (estatus) {
//         case "P":
//         case "A":
//             console.log("Ainda pode ser cancelado")
//             break
    
//         case "S":
//         case "E":
//         case "C":
//             console.log("Não pode mais ser cancelado")
//             break

//         default:
//             console.log("Inválido")
//             break
//     }

//___________________________________________________________________________________________________________________________________

// **18. Casa de câmbio.**
// Leia um valor em reais e o código da moeda (`USD`, `EUR`, `ARS`, `JPY`).
// Use cotações fixas e cobre 2% de taxa.
// Exiba quanto a pessoa recebe.

// let valor_reais = Number(prompt("Qual o valor (em reais)?")).toFixed(2)

// let code_coin = prompt("Qual o código da moeda (USD, EUR, ARS, JPY)?")

// let USD = 5.93

// let EUR = 6.51

// let ARS = 0.03

// let JPY = 0.34


//     switch (code_coin) {
//         case "USD":
            
//             break
//         case "EUR":
            
//             break
//         case "ARS":
            
//             break
//         case "JPY":
            
//             break
    
//         default:

//             console.log("Inválido")

//             break
    
//     }


//___________________________________________________________________________________________________________________________________

// **19. Conta de luz.**
// Leia o consumo em kWh e a bandeira (`verde`, `amarela`, `vermelha1`, `vermelha2`).
// Tarifa base: R$ 0,80/kWh.
// Adicional por kWh: amarela R$ 0,02, vermelha1 R$ 0,04, vermelha2 R$ 0,08.
// Exiba o total.

let kWh = Number(prompt("Qual seu consumo de kWh?"))

let bandeira = prompt("Qual é a bandeira? (verde, amarela, vermelha1, vermelha2)")

let tarifa_base = (0.80 * kWh).toFixed(2)

    switch (bandeira) {
        case "amarela":
            
        yellow = kWh * 0.02

        final = tarifa_base + yellow

            console.log("O consumo é de R$ " + final)
            
            break
        case "vermelha1":
            
        red1 = kWh * 0.04

        final = tarifa_base + red1

            console.log("O consumo é de R$ " + final)
        
            break
        case "vermelha2":
            
        red2 = kWh * 0.08

        final = tarifa_base + red2

            console.log("O consumo é de R$ " + final)

            break
        default:

            console.log("Inválido")

            break
    }

//___________________________________________________________________________________________________________________________________

// Bloco 4: for ==================================================================================================================

//___________________________________________________________________________________________________________________________________

// **20. Agenda de horários.**
// Exiba todos os horários de atendimento entre 08:00 e 12:00, de 15 em 15 minutos,
//  no formato `08:15` (com zero à esquerda).

//___________________________________________________________________________________________________________________________________

// **21. Escada de blocos.**
// Leia uma altura N e desenhe uma escada com `#` alinhada à direita.
// Proibido usar `repeat()`.

// ```
//    #
//   ##
//  ###
// ####
// ```

//___________________________________________________________________________________________________________________________________

// **22. Palíndromo.**
// Leia uma palavra,
// inverta com um `for` decrescente
// e informe se ela é um palíndromo (ex: `arara`, `radar`).

//___________________________________________________________________________________________________________________________________

// **23. Raio-x da frase.**
// Leia uma frase e conte vogais,
// consoantes, espaços e números.
// Use `for` para percorrer e `switch` para classificar as vogais.

//___________________________________________________________________________________________________________________________________

// **24. Poupança programada.**
// Leia o depósito mensal e a quantidade de meses.
// O rendimento é de 0,5% ao mês.
// Exiba o saldo mês a mês e o total rendido no final.

//___________________________________________________________________________________________________________________________________

// Bloco 5: while ===================================================================================================================

//___________________________________________________________________________________________________________________________________

// **25. Apuração da eleição do grêmio.**
// Leia a quantidade de votos e depois cada voto (1, 2 ou 3 para candidatos, 0 para nulo).
// Exiba o total de cada um, os nulos, o vencedor ou se houve empate.

//___________________________________________________________________________________________________________________________________

// **26. Carrinho de compras.**
// Leia preços até o usuário digitar `fim`.
// Exiba a quantidade de itens, o item mais caro e o total.
// Acima de R$ 300, aplique 10% de desconto.

//___________________________________________________________________________________________________________________________________

// **27. Bateria do celular.**
// A bateria começa em 100%.
// Leia quanto ela gasta por hora.
// Simule hora a hora: ao chegar em 15%, entra o modo economia e o consumo cai pela metade.
// Exiba em que hora o modo economia ligou e em quantas horas a bateria acabou.

//___________________________________________________________________________________________________________________________________

// **28. Quando o dinheiro dobra?**
// Leia o valor investido e a taxa de rendimento mensal.
// Exiba quantos meses são necessários para o valor dobrar.

//___________________________________________________________________________________________________________________________________

// **29. O computador adivinha.**
// O usuário pensa em um número de 1 a 100.
// O programa chuta e o usuário responde `maior`,
// `menor` ou `acertou`.
// O programa deve sempre chutar o meio do intervalo restante.
// Exiba em quantas tentativas acertou.

//___________________________________________________________________________________________________________________________________

// **30. Desafio integrador: máquina de snacks.**

// | Código |   Produto    |  Preço  | Estoque |
// |  ---   |      ---     |   ---   |   ---   |
// | A1     |   Água       | R$ 3,50 |    3    |
// | A2     | Refrigerante | R$ 6,00 |    2    |
// | B1     |  Salgadinho  | R$ 7,50 |    2    |
// | B2     |  Chocolate   | R$ 5,00 |    1    |

// A máquina fica ligada até o usuário digitar `sair`.
// A cada compra: escolher o produto (`switch`),
// inserir dinheiro até cobrir o preço (`while`),
// calcular o troco e baixar o estoque.
// Produto esgotado não pode ser vendido.
// Ao desligar, exiba o faturamento total e quantas vendas foram feitas.

//___________________________________________________________________________________________________________________________________

