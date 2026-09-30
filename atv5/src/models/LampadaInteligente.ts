import { Dispositivo } from "./Dispositivo.js";
import { LampadaInteligenteProps } from "../interfaces/DispositivoProps.js";

export class LampadaInteligente extends Dispositivo<LampadaInteligenteProps> {

    constructor(props: LampadaInteligenteProps) {
        super(props);
    }


    public get getCorHexadecimal(): string { return this.props.corHexadecimal; }
    public get getNivelBrilho(): number { return this.props.nivelBrilho; }

    public set setCorHexadecimal(novaCorHexadecimal: string) {
        if (novaCorHexadecimal.trim().length === 0) {
            console.log("\nERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.corHexadecimal = novaCorHexadecimal;
    }
    public set setNivelBrilho(novoNivelBrilho: number) {
        if (novoNivelBrilho < 0) {
            console.log("\nERRO: O nivel de brilho nao pode ser negativo!");
            return;
        }
        this.props.nivelBrilho = novoNivelBrilho;
    }
}