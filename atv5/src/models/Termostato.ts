import { Dispositivo } from "./Dispositivo.js";
import { TermostatoProps } from "../interfaces/DispositivoProps.js";

export class Termostato extends Dispositivo<TermostatoProps> {

    constructor(props: TermostatoProps) {
        super(props);
    }

    public get getTemperaturaAtual(): number { return this.props.temperaturaAtual; }
    public get getTemperaturaAlvo(): number { return this.props.temperaturaAlvo; }

    public set setTemperaturaAtual(novaTemperaturaAtual: number) {
        if (novaTemperaturaAtual <= 0) {
            console.log("\nERRO: O campo nao pode ser vazio ou negativo!");
            return;
        }
        this.props.temperaturaAtual = novaTemperaturaAtual;
    }
    public set setTemperaturaAlvo(novaTemperaturaAlvo: number) {
        if (novaTemperaturaAlvo <= 0) {
            console.log("\nERRO: O campo nao pode ser vazio ou negativo!");
            return;
        }
        this.props.temperaturaAlvo = novaTemperaturaAlvo;
    }
}