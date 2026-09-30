import readLine from "readline-sync";
import { Gato } from "./src/models/Gato.js";

console.log("=== CADASTRO DE GATO ===");

const novoGato = new Gato({
    nomePaciente: "suzy",
    nomeTutor: "Caua",
    pesoKG: 5,
    fivFelvTestado: 2,
    isIndoor: 1
});

console.log(`Nome do paciente: ${novoGato.getNomePaciente}`);
console.log(`Nome do tutor: ${novoGato.getNomeTutor}`);
console.log(`Peso: ${novoGato.getPesoKG} KG`);
console.log(`Quantidade de testes FIV/FeLV: ${novoGato.getFivFelvTestado}`);
console.log(`Quantidade de vezes/dias indoor: ${novoGato.getIsIndoor}`);

console.log("\n=== ATUALIZACAO DOS DADOS ===");

novoGato.setNomePaciente = readLine.question("Digite o novo nome do paciente: ");
novoGato.setNomeTutor = readLine.question("Digite o novo nome do tutor: ");
novoGato.setPeso = readLine.questionFloat("Digite o novo peso do gato: ");
novoGato.setFivFelvTestado = readLine.questionFloat("Quantas vezes o gato foi testado para FIV/FeLV? ");
novoGato.setIsIndoor = readLine.questionFloat("Quantas vezes/dias o gato fica em ambiente indoor? ");

console.log("\n================================================");
console.log("             DADOS ATUALIZADOS                  ");
console.log("================================================");

console.log(`Nome do paciente:          ${novoGato.getNomePaciente}`);
console.log(`Nome do tutor:             ${novoGato.getNomeTutor}`);
console.log(`Peso:                      ${novoGato.getPesoKG} KG`);
console.log(`Testes FIV/FeLV:           ${novoGato.getFivFelvTestado}`);
console.log(`Indoor:                    ${novoGato.getIsIndoor}`);

console.log("================================================\n");