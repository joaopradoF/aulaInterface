import { ContaBancaria } from "./ContaBancaria.js"
import { ContaCorrenteProps } from "../interfaces/ContaProps.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps>{

    constructor(props: ContaCorrenteProps) {
        super(props);
    }

    public get getLimiteChequeEspecial(): number { return this.props.limiteChequeEspecial; }

    public set setLimiteChequeEspecial(novoLimiteChequeEspecial: number) {
        if (novoLimiteChequeEspecial === 0) {
            console.log("\n ERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.limiteChequeEspecial = novoLimiteChequeEspecial;
    }
}