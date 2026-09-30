import { AnimalProps } from "../interfaces/AnimalProps.js";

export class Animal<T extends AnimalProps = AnimalProps> {

    constructor(protected props: T) { }

    public get getNomePaciente(): string {return this.props.nomePaciente;}
    public get getNomeTutor(): string {return this.props.nomeTutor;}
    public get getPesoKG(): number {return this.props.pesoKG;}
    
    public set setNomePaciente(novoNomePaciente: string) {
        if (novoNomePaciente.trim().length === 0) {
            console.log("\nERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.nomePaciente = novoNomePaciente;
    }
    public set setNomeTutor(novoNomeTutor: string) {
        if (novoNomeTutor.trim().length === 0) {
            console.log("\nERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.nomeTutor = novoNomeTutor;
    }
    public set setPeso(novoPeso: number) {
        if (novoPeso <= 0) {
            console.log("\nERRO: O peso deve ser maior que zero!");
            return;
        }
        this.props.pesoKG = novoPeso;
    }
}