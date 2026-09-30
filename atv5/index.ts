import readLine from "readline-sync";
import { LampadaInteligente } from "./src/models/LampadaInteligente.js";

console.log("=== CADASTRO DE LAMPADA INTELIGENTE ===");

const novaLampada = new LampadaInteligente({

    idRede: "REDE-001",
    nomeLocal: "Sala",
    isLigado: 1,
    corHexadecimal: "#FFFFFF",
    nivelBrilho: 80

});


console.log("\n=== DADOS JA CADASTRADOS ===");

console.log(`ID da rede: ${novaLampada.getIdRede}`);
console.log(`Nome do local: ${novaLampada.getNomeLocal}`);
console.log(`Esta ligado: ${novaLampada.getIsLigado}`);
console.log(`Cor hexadecimal: ${novaLampada.getCorHexadecimal}`);
console.log(`Nivel de brilho: ${novaLampada.getNivelBrilho}`);


console.log("\n=== ATUALIZACAO DOS DADOS ===");

novaLampada.setIdRede = readLine.question("Digite o novo ID da rede: ");
novaLampada.setNomeLocal = readLine.question("Digite o novo nome do local: ");
novaLampada.setIsLigado = readLine.questionFloat("Digite o estado da lampada (0 = desligada / 1 = ligada): ");
novaLampada.setCorHexadecimal = readLine.question("Digite a nova cor hexadecimal: ");
novaLampada.setNivelBrilho = readLine.questionFloat("Digite o novo nivel de brilho: ");


console.log("\n=== ALTERANDO ENERGIA ===");

novaLampada.alterarEnergia();

console.log(`Novo estado da lampada: ${novaLampada.getIsLigado}`);


console.log("\n================================================");
console.log("        DADOS ATUALIZADOS DA LAMPADA           ");
console.log("================================================");

console.log(`ID da rede:              ${novaLampada.getIdRede}`);
console.log(`Nome do local:           ${novaLampada.getNomeLocal}`);
console.log(`Esta ligado:             ${novaLampada.getIsLigado}`);
console.log(`Cor hexadecimal:         ${novaLampada.getCorHexadecimal}`);
console.log(`Nivel de brilho:         ${novaLampada.getNivelBrilho}`);

console.log("================================================\n");