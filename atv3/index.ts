import readLine from "readline-sync";
import { ContaCorrente } from "./src/models/ContaCorrente.js";

console.log("=== CADASTRO DE CONTA CORRENTE ===");

const novaConta = new ContaCorrente({
    numeroConta: "123456",
    titular: "Lucianjo",
    saldo: 19024,
    limiteChequeEspecial: 5000
});

console.log(`\nNumero da conta: ${novaConta.getNumeroConta}`);
console.log(`Titular: ${novaConta.getTitular}`);
console.log(`Saldo: R$ ${novaConta.getSaldo}`);
console.log(`Limite do cheque especial: R$ ${novaConta.getLimiteChequeEspecial}`);

// Alterando os dados através dos setters
novaConta.setTitular = readLine.question("\nDigite o novo nome do titular: ");
novaConta.setNumeroConta = readLine.question("Digite o novo numero da conta: ");

// Exibindo os dados atualizados
console.log("\n================================================");
console.log("           DADOS DA CONTA CORRENTE             ");
console.log("================================================");

console.log(`Numero da conta:          ${novaConta.getNumeroConta}`);
console.log(`Titular:                  ${novaConta.getTitular}`);
console.log(`Saldo:                    R$ ${novaConta.getSaldo}`);
console.log(`Limite Cheque Especial:   R$ ${novaConta.getLimiteChequeEspecial}`);

console.log("================================================\n");