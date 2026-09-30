export interface AnimalProps {
    nomePaciente: string;
    nomeTutor: string;
    pesoKG: number;
}

export interface CachorroProps extends AnimalProps {
    porte: string;
    precisaTosa: number;
}

export interface GatoProps extends AnimalProps {
    fivFelvTestado: number;
    isIndoor: number;
}