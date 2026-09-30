import { Animal } from "./Animal.js";
import { GatoProps } from "../interfaces/AnimalProps.js";

export class Gato extends Animal<GatoProps> {

    constructor(props: GatoProps) {
        super(props);
    }

    public get getFivFelvTestado(): number {return this.props.fivFelvTestado;}
    public get getIsIndoor(): number {return this.props.isIndoor;}

    public set setFivFelvTestado(novoFivFelvTestado: number) {
        if (novoFivFelvTestado === 0) {
            console.log("\nERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.fivFelvTestado = novoFivFelvTestado;
    }
    public set setIsIndoor(novoIsIndoor: number) {
        if (novoIsIndoor === 0) {
            console.log("\nERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.isIndoor = novoIsIndoor;
    }
}