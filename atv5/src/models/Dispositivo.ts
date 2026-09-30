import { DispositivoProps } from "../interfaces/DispositivoProps.js";

export class Dispositivo<T extends DispositivoProps = DispositivoProps> {

    constructor(protected props: T) { }

    public get getIdRede(): string { return this.props.idRede; }
    public get getNomeLocal(): string { return this.props.nomeLocal; }
    public get getIsLigado(): string { return this.props.isLigado === 1 ? "Sim" : "Não"; }

    public set setIdRede(novoIdRede: string) {
        if (novoIdRede.trim().length === 0) {
            console.log("\nERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.idRede = novoIdRede;
    }
    public set setNomeLocal(novoNomeLocal: string) {
        if (novoNomeLocal.trim().length === 0) {
            console.log("\nERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.nomeLocal = novoNomeLocal;
    }
    public set setIsLigado(novoIsLigado: number) {
        if (novoIsLigado < 0 || novoIsLigado > 1) {
            console.log("\nERRO: O valor deve estar entre 0 e 1!");
            return;
        }
        this.props.isLigado = novoIsLigado;
    }
    public alterarEnergia(): void {
        if (this.props.isLigado === 0) {
            this.props.isLigado = 1;
        } else {
            this.props.isLigado = 0;
        }
    }
}