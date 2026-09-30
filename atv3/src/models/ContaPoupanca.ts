import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "../interfaces/ContaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {

    constructor(props: ContaPoupancaProps) {
        super(props);
    }

    public get getTaxaRendimentoMensal(): number {
        return this.props.taxaRendimentoMensal;
    }

    public set setTaxaRendimentoMensal(novoTaxaRendimentoMensal: number) {
        if (novoTaxaRendimentoMensal === 0) {
            console.log("\nERRO: O campo nao pode ser vazio!");
            return;
        }

        this.props.taxaRendimentoMensal = novoTaxaRendimentoMensal;
    }
}