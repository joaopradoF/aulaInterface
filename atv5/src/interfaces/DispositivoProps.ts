export interface DispositivoProps {
    idRede: string;
    nomeLocal: string;
    isLigado: number;
}

export interface LampadaInteligenteProps extends DispositivoProps {
    corHexadecimal: string;
    nivelBrilho: number;
}

export interface TermostatoProps extends DispositivoProps {
    temperaturaAtual: number;
    temperaturaAlvo: number;
}