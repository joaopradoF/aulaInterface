import { Animal } from "./Animal.js";
import { CachorroProps } from "../interfaces/AnimalProps.js";

export class Cachorro extends Animal<CachorroProps> {

    constructor(props: CachorroProps) {
        super(props);
    }
    public get getPorte(): string {return this.props.porte;}
    public get getPrecisaTosa(): number {return this.props.precisaTosa;}

    public set setPorte(novoPorte: string) {
        if (novoPorte.trim().length === 0) {
            console.log("\nERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.porte = novoPorte;
    }
    public set setPrecisaTosa(novoPrecisaTosa: number) {
        if (novoPrecisaTosa === 0) {
            console.log("\nERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.precisaTosa = novoPrecisaTosa;
    }
}